const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});
// Create DynamoDB document client
const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  convertEmptyValues: true
});

export default async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  const { slug } = req.query;

  if (slug == null) {
    const params = {
      TableName: "ubit-articles",
      IndexName: "list-article-index",
      Limit: 20
    };

    const resData = await docClient.scan(params).promise();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(resData));
  } else {
    const params = {
      TableName: "ubit-articles",
      Key: {
        slug
      }
    };
    const resData = await docClient.get(params).promise();
    res.setHeader("Content-Type", "application/json");
    if (resData.Item == null) {
      res.statusCode = 404;
      res.end(JSON.stringify({ err: "Could not find article" }));
    } else {
      res.statusCode = 200;
      res.end(JSON.stringify(resData.Item));
    }
  }
};
