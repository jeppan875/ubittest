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
  try {
    const { slug } = req.query;
    const params = {
      TableName: "ubit-articles",
      Key: {
        slug
      }
    };
    const resData = await docClient.delete(params).promise();
    res.setHeader("Content-Type", "application/json");

    res.statusCode = 200;
    res.end(JSON.stringify({ msg: `deleted ${slug}`, resData }));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end(JSON.stringify({ err: "Server error" }));
  }
};
