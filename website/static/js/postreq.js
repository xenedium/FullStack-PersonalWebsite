/*Vars*/
var ip = new XMLHttpRequest();                              //watcha doing here stalker XD !
ip.open('GET', 'https://api.ipify.org');                    //Ds: Xenedium#1977
ip.send();

var visitor = "Date: " + new Date().toString() + "\nPageon: " + window.location.pathname + "\nReferrer: " + document.referrer + "\nHistoryLen: " + history.length + 
            "\nBrowserName: " + navigator.appName + "\nBrowserEngine: " + navigator.product + "\nBrowserVer1a: " + navigator.appVersion + "\nBrowserVer1b: " + navigator.userAgent +
            "\nBrowserLang: " + navigator.language + "\nBrowserOnline: " + navigator.onLine + "\nBrowserPlatform: " + navigator.platform + "\nCookiesEnabled: " + navigator.cookieEnabled +
            "\nScreenRes: " + screen.width + "x" + screen.height + "\nDocumentRes: " + document.width + "x" + document.height + "\nInnerRes: " + innerWidth + "x" + innerHeight + 
            "\nAvailRes: " + screen.availWidth + "x" + screen.availHeight + "\nColorDepth: " + screen.colorDepth + "\nPixelDepth: " + screen.pixelDepth ;

const dshookpost = () =>
{
    var req = new XMLHttpRequest();
    req.open('POST', 'https://discordapp.com/api/webhooks/865202894596603914/kgipxfUe2k2Cfapm3mYqBsi8W-mnVCJ2ofHgQ_D86MAB61FesdZXu2H3IIkUgCzFfsYC');
    req.setRequestHeader('Content-Type', 'application/json');
    setTimeout(()=>{req.send(JSON.stringify({content: "```"+visitor + "\nIP: " + ip.response +"```", username: "Visitor"}))}, 3000);
}

document.body.onload = dshookpost;


