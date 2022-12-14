
/**
 * ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
 */

/**
 * How to use TwitterFetcher's fetch function:
 * 
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 * 
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 * 
 * You may specify at minimum the following two required properties:
 * 
 * @param object.id {string} The ID of the Twitter widget you wish
 *     to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.
var configProfile = {
  "profile": {"screenName": 'btetweets'},
  "domId": 'Twitter-widget',
  "maxTweets": 1,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);


// ##### Simple example 2 #####
// A simple example to get my latest 5 of my favourite tweets and write to a
// HTML element with id "talk". Also automatically hyperlinks URLS and user
// mentions and hashtags but does not display time of post. We also make the
// request to Twitter specifiying we would like results where possible in
// English language.
var config2 = {
  "profile": {"screenName": 'jason_mayes'},
  "domId": 'example2',
  "maxTweets": 5,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "lang": 'en',
  "customCallback": handleTweets
};
twitterFetcher.fetch(config2);


// ##### Simple example 3 #####
// A simple example to get latest 5 tweets for #API tag and shows any images
// attached to tweets.
var config3 = {
  "id": '502160051226681344',
  "domId": 'example3',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": true
};
twitterFetcher.fetch(config3);


// ##### Advanced example #####
// An advance example to get latest 5 posts using hashtag #API and write to a
// HTML element with id "tweets2" without showing user details and using a
// custom format to display the date/time of the post, and does not show
// retweets.
var config4 = {
  "id": '345690956013633536',
  "domId": 'example4',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": false,
  "showTime": true,
  "dateFunction": dateFormatter,
  "showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See https://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
  return date.toTimeString();
}

twitterFetcher.fetch(config4);


// ##### Advanced example 2 #####
// Similar as previous, except this time we pass a custom function to render the
// tweets ourself! Useful if you need to know exactly when data has returned or
// if you need full control over the output.

var config5 = {
  "id": '345690956013633536', 
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "customCallback": handleTweets,
  "showInteraction": false
};

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0; 
    while(n < x) { 
       console.log(tweets[n]);
      n++;
    } 
}

twitterFetcher.fetch(config5);