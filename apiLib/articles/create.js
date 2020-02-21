import slugify from "slugify";

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
  const data = req.body;
  const params = {
    TableName: "ubit-articles",
    Item: {
      ...data,
      createdAt: new Date().getTime(),
      slug: slugify(data.title)
    }
  };
  const resData = await docClient.put(params).promise();
  res.setHeader("Content-Type", "application/json");

  res.statusCode = 200;
  res.end(JSON.stringify({ resData }));
};
