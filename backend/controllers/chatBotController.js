import asyncHandler from "express-async-handler";
const { doesNotMatch } = require('assert');
const {spawn} = require('child_process');
const { type, default: res } = require('express/lib/response');

export const chatBotController = asyncHandler(async (req , res) => {

    var dataToSend;
    const python = spawn('python', ['main.py',req.body.command]);
        python.stdout.on('data', (data)=>{
        var parsedData = JSON.parse(data.toString());
        console.log(parsedData);    
        res.json({"data" : parsedData});
    });
    python.stderr.on('data',(data)=>{
        console.error(`stderr: ${data}`);
        res.json({"err" : data});
    });
    python.on('close', (code) => {
        console.log("successfully closed")
    });

})