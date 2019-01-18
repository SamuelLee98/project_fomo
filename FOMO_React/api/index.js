import express from "express";
import mongoose from 'mongoose';
import assert from 'assert';
import config from '../config'

mongoose.connect(config.mongodbUri, { useNewUrlParser: true }, (err) => {
    // If err is not equal to null, we exit the program with error
    assert.equal(null, err);
    console.log(`Connected to ${config.mongodbUri}`);
});

const router = express.Router();

import Test from './models/Test';

router.get('/test', (req, res) => {


    Test.find({}, (err, tests) => {
        if (err) throw err;
        res.send(tests);
    });
});

export default router;
