/*Vars*/
var ip = new XMLHttpRequest();                              //watcha doing here stalker XD !
ip.open('GET', 'http://sorrow.live/api/v1/ip');             //Discord: Xenedium#1977
ip.send();

ip.onreadystatechange = () =>
{
    var visitor = {
        ip: ip.response,
        date: new Date().toString(),
        page: window.location.pathname,
        referrer: document.referrer,
        history: history.length,
        browser: {
            name: navigator.appName,
            engine: navigator.product,
            version: navigator.appVersion,
            language: navigator.language,
            online: navigator.onLine,
            platform: navigator.platform,
            cookies: navigator.cookieEnabled
        },
        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth
        },
        document: {
            width: document.width,
            height: document.height
        },
        inner: {
            width: innerWidth,
            height: innerHeight
        },
        avail: {
            width: screen.availWidth,
            height: screen.availHeight
        },
        color: {
            colordepth: screen.colorDepth,
            pixeldepth: screen.pixelDepth
        },
    }
    var req = new XMLHttpRequest();
    req.open('POST', 'https://discordapp.com/api/webhooks/865202894596603914/kgipxfUe2k2Cfapm3mYqBsi8W-mnVCJ2ofHgQ_D86MAB61FesdZXu2H3IIkUgCzFfsYC');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({content: "```json\n"+JSON.stringify(visitor) +"```", username: "Visitor"}));
}


