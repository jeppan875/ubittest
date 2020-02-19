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
  const { slug } = req.query;
  const params = {
    TableName: "ubit-articles",
    Key: {
      type: "article",
      slug
    }
  };
  const resData = await docClient.get(params).promise();
  res.setHeader("Content-Type", "application/json");
  if (!resData) {
    res.statusCode = 404;
    res.end(JSON.stringify({ err: { msg: "Could not find article" } }));
  } else {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }
};
