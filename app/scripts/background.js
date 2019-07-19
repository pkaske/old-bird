// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18';
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: [ 'https://twitter.com/**' ] },
  [ 'blocking', 'requestHeaders' ]
);
