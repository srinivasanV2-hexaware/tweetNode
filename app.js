const Twitter = require('twitter');

const config = {
    consumer_key : process.env.consumer_key,
    consumer_secret : process.env.consumer_secret,
    access_token_key : process.env.access_token,
    access_token_secret : process.env.access_token_secret
};

const tweet =  new Twitter(config);

const params = {
    q: '"#optus" OR "optus australia"',
    count: 10,
    result_type: 'recent',
    lang: 'en',
    tweet_mode : 'extended'
}

tweet.get('search/tweets', params, function(err, data, response) {
    if(!err){

        var filteredArr = data.filter(function(tweetObj){
            return tweet.user.screen_name === "John25872967";

        })
       console.log(filteredArr);
      for(i=0; i<data.statuses.length;i++) {
        console.log(data.statuses[i].full_text);
      }
    } else {
      console.log(err);
    }
})
  


