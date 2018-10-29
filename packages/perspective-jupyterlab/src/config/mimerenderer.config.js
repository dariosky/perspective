/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const path = require("path");
const common = require("@jpmorganchase/perspective/src/config/common.config.js");

module.exports = Object.assign({}, common(), {
    entry: "./src/ts/mimerenderer.ts",
    output: {
        filename: "mime.js",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "../../build")
    }
});

module.exports.module.rules.push({test: /\.ts?$/, loader: "ts-loader"});
