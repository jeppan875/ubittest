import slugify from "slugify";
import Joi from "@hapi/joi";
import { articleSchema } from "apiLib/validations";

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
    const data = req.body;
    const { error } = articleSchema.validate(data);
    if (error) {
      throw new Error("validation failed");
    }
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
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end(JSON.stringify({ err: "Server error" }));
  }
};
