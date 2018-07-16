const Twitter = require('twitter');
const Sentiment = require('sentiment');

const config = {
    consumer_key : process.env.consumer_key,
    consumer_secret : process.env.consumer_secret,
    access_token_key : process.env.access_token,
    access_token_secret : process.env.access_token_secret
};

const tweet =  new Twitter(config);
const sentiment = new Sentiment();

const params = {
    q: '"#optus" OR "OPTUS" OR "Optus" ',
    count: 10,
    result_type: 'recent',
    lang: 'en',
    tweet_mode : 'extended'
}

var finalTweet = [];
tweet.get('search/tweets', params, function(err, data, response) {
    if(!err){
        
      for(i=0; i<data.statuses.length;i++) {
        console.log(data.statuses[i]);
      }

      var filteredTweetArr = data.statuses.filter(function(tweetObj){
        return tweetObj.user.screen_name === "Iamcharlotte7";
      });
      console.log(filteredTweetArr);

      filteredTweetArr.forEach(element => {

        var sentence = element.full_text;
        var text = /(Optus)|(Boardband)|(PLAN)/i;
        var validTweetChkIndex = sentence.search(text);
        if(validTweetChkIndex !== -1) {
            finalTweet.push({
                'userID': 'Iamcharlotte7',
                'text': sentence,
                'keyword': 'Boardband',
                'sentimentScore' : sentiment.analyze(sentence)
            });
        }
      });

      console.log(finalTweet);
    } else {
      console.log(err);
    }
})

// var sentence = '@optus I am looking for a boardband plan'
// text = /(Boardband)|(PLAN)/i
// result= sentence.search(/(change) | (PLAN)/i) //sentence.match(text); 
// console.log(result);

