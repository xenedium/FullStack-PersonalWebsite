/*Vars*/
var ip = new XMLHttpRequest();                              //watcha doing here stalker XD !
ip.open('GET', 'https://sorrow.live/api/v1/ip');             //Discord: Xenedium#1977
ip.send();

ip.onreadystatechange = (e) => {
    if (ip.readyState == 4) {
        var visitor = {
            ip: ip.response,
            date: new Date().toString(),
            page: window.location.pathname,
            referrer: document.referrer,
            history: history.length,
            browser: {
                name: navigator.appName,
                engine: navigator.product,
                version1a: navigator.appVersion,
                version1b: navigator.vendor,
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
        var req = new XMLHttpRequest();     //post to the backend server
        req.open('POST', 'https://sorrow.live/api/v1/visitor');
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(visitor));
        req.onreadystatechange = (e) => {
            if (req.readyState == 4)
            {
                var dsreq = new XMLHttpRequest();   //post to a discord server
                dsreq.open('POST', 'https://discordapp.com/api/webhooks/865202894596603914/kgipxfUe2k2Cfapm3mYqBsi8W-mnVCJ2ofHgQ_D86MAB61FesdZXu2H3IIkUgCzFfsYC');
                dsreq.setRequestHeader('Content-Type', 'application/json');
                dsreq.send(JSON.stringify({ content: "```json\n" + JSON.stringify(visitor) + "```\n" + req.status, username: "Visitor" }));
            }
        }
    }
}


