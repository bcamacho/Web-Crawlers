// to start edit source files
// make sure to have Node.js installed
// install crawler,  npm install crawler

// file name webCrawler.js

var Crawler = require("crawler").crawler;

var c = new Crawler({
"maxConnections":40,

// This will be called for each crawled page
"callback":function(error,result,$) {



	// for each page returned the following code will be performed

	if(result){
		var page = result.body;
		var res = page.match(/goo.gl/i);
		if (res && res.length > 0){
			console.log(result.body);
		}
	}

    // $ is a jQuery instance scoped to the server-side DOM of the page

$("a").each(function(index,a) {
	console.log(a.href);
	c.queue(a.href);
});

    // $("#content a").each(function(index,a) {
    //     c.queue(a.href);
    // });

}
});

// Queue just one URL, with default callback
// c.queue("http://developers.google.com");

// Queue a list of URLs
c.queue(["http://developers.android.com","http://developers.google.com/glass","http://developer.android.com/tv","http://developer.android.com/wear","http://developer.android.com/auto","http://developer.android.com/design","http://developers.google.com/cast","http://developer.chrome.com"]);

// Queue URLs with custom callbacks & parameters

// c.queue([{
// "uri":"http://parishackers.org/",
// "jQuery":false,

// The global callback won't be called
// "callback":function(error,result) {
//     console.log("Grabbed",result.body.length,"bytes");
// }
// }]);

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
// "html":"<p>This is a <strong>test</strong></p>"
// }]);



// Next call the following command using terminal

//node /Users/bcamacho/Testing/webCrawler.js