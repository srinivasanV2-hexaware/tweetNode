const Twitter = require('twitter');

const config = {
    consumer_key : process.env.consumer_key,
    consumer_secret : process.env.consumer_secret,
    access_token_key : process.env.access_token,
    access_token_secret : process.env.access_token_secret
};

const tweet =  new Twitter(config);

const params = {
    q: ['#octus','octus australia'],
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

tweet.get('search/tweets', params, function(err, data, response) {
    if(!err){
      console.log(data);
    } else {
      console.log(err);
    }
})
  


