const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json())

app.get('/:searchOption/:searchText', (req, res, next) => {
  let text = req.params.searchText
  let sort = req.params.searchOption

  //set header: user-agent required for GitHub API v3
  let options = {
    url: `https://api.github.com/search/repositories?q=${text}&sort=${sort}`,
    headers: {
      'User-Agent': 'request'
    }
  };

  //parse request parameters
  function callback(error, response, body) {
    if(error){
      res.send(`error: ${error}`);
    }else{
      console.log('statusCode:', response && response.statusCode);
      res.send(`${body}`)
    }
  };

  //fire request
  request(options,callback);
})

app.listen(port)
