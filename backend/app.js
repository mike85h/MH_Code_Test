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
  let sort = req.query.searchOption || '';
  let perPage = req.query.perPage || '';
  let pageNum = req.query.pageNum || '';
  let filter = req.query.filter || '';

  let cacheKey = (`${text},${sort},${perPage},${pageNum},${filter}`);

  let cacheCheck = cache.get(cacheKey) === null;

  if(cacheCheck){
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
        cache.put(cacheKey,body,6000000);
        res.send(body);
      }
    };
    //request resource
    request(options,callback);
  }else{
    let cacheResponse = cache.get(cacheKey);
    res.send(cacheResponse);
  }
})

app.listen(port)
