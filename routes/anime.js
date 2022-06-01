const router = require('express').Router()

const request = require('request');

const options = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/quotes/anime',
  qs: {title: 'Naruto'},
  headers: {
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com',
    'X-RapidAPI-Key': 'a4e9619f2fmsh53521a81124cfedp118893jsnbc1bc5985b63',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
module.exports = router