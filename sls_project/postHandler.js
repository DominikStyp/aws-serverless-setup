'use strict';

// dependencies
const AWS = require('aws-sdk');
const util = require('util');

// get reference to S3 client
const s3 = new AWS.S3();

let saveFile = async event => {
    try {
        let jsonInput = JSON.parse(event.body);
        const dstBucket = "my-custom-bucket2";
        const destKey    = "jsonInput.log";
        const destparams = {
            Bucket: dstBucket,
            Key: destKey,
            Body: JSON.stringify(jsonInput),
            ContentType: "text/json"
        };
        const putResult = await s3.putObject(destparams).promise();
    } catch (error) {
        console.log(error);
        return;
    }
};

module.exports.post = async event => {
    let jsonInput = JSON.parse(event.body);
    await saveFile(event);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                jsonInput: jsonInput,
                message: 'postHandler.post method executed',
                input: event,
            },
            null,
            2
        ),
    };
};