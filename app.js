const Twitter = require('twitter');

const config = {
    consumer_key : process.env.consumer_key,
    consumer_secret : process.env.consumer_secret,
    access_token_key : process.env.access_token,
    access_token_secret : process.env.access_token_secret
};

const tweet =  new Twitter(config);

const params = {
    q: '"#optus" OR "OPTUS" OR "Optus" ',
    count: 10,
    result_type: 'recent',
    lang: 'en',
    tweet_mode : 'extended'
}

tweet.get('search/tweets', params, function(err, data, response) {
    if(!err){
        
      for(i=0; i<data.statuses.length;i++) {
        console.log(data.statuses[i]);
      }

      var filteredArr = data.statuses.filter(function(tweetObj){
        return tweetObj.user.screen_name === "peer5";
      });
      console.log(filteredArr);
    } else {
      console.log(err);
    }
})

var sentence = '@optus I am looking for a boardband plan'
text = /(Boardband)|(PLAN)/i
result= sentence.match(text); //sentence.search(/optus/i)
console.log(result);

