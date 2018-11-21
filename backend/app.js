const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const cache = require('memory-cache');

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res, next) => {
  let text = req.query.searchText;
  let sort = req.query.searchOption ||"";
  let perPage = req.query.perPage || "";
  let pageNum = req.query.pageNum || "";
  let filter = req.query.filter || "";
  //set header: user-agent required for GitHub API v3
  let options = {
    url: `https://api.github.com/search/repositories?q=${text}${sort}&per_page=${perPage}&page=${pageNum}`,
    headers: {
      'User-Agent': 'request'
    }
  };
  function callback(error, response, body) {
    if(error){
      res.send(`error: ${error}`);
    }else{
      res.send(body)
    }
  };
  //request resource
  request(options,callback);
})

app.listen(port)
