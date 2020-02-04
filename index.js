var express = require("express");
var path = require("path");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);
var app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname +  "/src/index.html"));
})



app.listen(3000);