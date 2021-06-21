module.exports = [
    {
        source: '/(.*)?', // Matches all pages
        headers: [
            {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
            },
            {
                key: 'Content-Security-Policy',
                value: "base-uri 'self'; \
                connect-src 'self' api.segment.io api-iam.intercom.io forms.hubspot.com www.google-analytics.com heapanalytics.com wss://nexus-websocket-a.intercom.io api.hubapi.com www.google.com stats.g.doubleclick.net api.hsforms.com; \
                default-src 'self' api-iam.intercom.io api.segment.io cdn.heapanalytics.com cdn.segment.io fonts.googleapis.com fonts.gstatic.com forms.hubspot.com heapanalytics.com  js-na1.hs-scripts.com js.hs-analytics.net js.hs-banner.com js.hscollectedforms.net js.intercomcdn.com self track.hubspot.com widget.intercom.io www.google-analytics.com www.googletagmanager.com null images.ctfassets.net wss://nexus-websocket-a.intercom.io api.hubapi.com connect.facebook.net js.hsadspixel.net px.ads.linkedin.com snap.licdn.com www.facebook.com www.google.com www.google.dk downloads.intercomcdn.com messenger-apps.intercom.io static.intercomassets.com www.google.co.in www.google.co.nz www.google.ca www.google.com.br www.google.com.do www.google.es www.youtube.com wss www.google.fr www.google.hu www.google.lu www.linkedin.com; \
                font-src 'self' data: fonts.gstatic.com js.intercomcdn.com www.slant.co storage.googleapis.com; \
                form-action calendly.com; \
                frame-ancestors 'self'; \
                frame-src www.youtube.com intercom-sheets.com bid.g.doubleclick.net; \
                img-src 'self' data: www.google-analytics.com heapanalytics.com images.ctfassets.net track.hubspot.com js.intercomcdn.com static.intercomassets.com i.ytimg.com px.ads.linkedin.com www.facebook.com www.google.ca www.google.com www.gstatic.com downloads.intercomcdn.com messenger-apps.intercom.io p.adsymptotic.com www.google.co.jp www.google.co.kr www.google.co.uk www.google.de www.google.gr www.google.ro www.google.ru www.linkedin.com forms.hsforms.com www.google.co.in www.google.co.ma www.google.co.nz www.google.co.za www.google.co.zw www.google.com.au www.google.com.br www.google.com.gh www.google.com.my www.google.com.ng www.google.com.pe www.google.com.ph www.google.com.pr www.google.com.sg www.google.com.tr www.google.com.ua www.google.com.vn www.google.cz www.google.dk www.google.es www.google.fr www.google.lk www.google.pt www.googletagmanager.com log-papago.naver.com translate.google.com www.google.at www.google.be www.google.ch www.google.cl www.google.co.il www.google.co.ke www.google.com.ar www.google.com.bd www.google.com.co www.google.com.kw www.google.com.mt www.google.com.mx www.google.com.np www.google.com.pk www.google.com.tw www.google.com.uy www.google.fi www.google.ie www.google.is www.google.it www.google.jo www.google.nl www.google.no www.google.pl www.google.rs www.google.se www.google.ae www.google.co.ao www.google.mu www.google.hu t.co; \
                manifest-src 'self'; \
                media-src js.intercomcdn.com; \
                object-src 'none'; \
                script-src 'self' cdn.segment.io js.intercomcdn.com widget.intercom.io cdn.heapanalytics.com js-na1.hs-scripts.com js.hs-analytics.net js.hs-banner.com js.hscollectedforms.net www.google-analytics.com www.googletagmanager.com js.hsadspixel.net snap.licdn.com; \
                script-src-elem 'self' 'unsafe-inline' widget.intercom.io www.google-analytics.com www.googletagmanager.com cdn.heapanalytics.com cdn.segment.com js-na1.hs-scripts.com js.hs-analytics.net js.hs-banner.com js.hscollectedforms.net js.intercomcdn.com js.hsadspixel.net snap.licdn.com www.google.com analytics.twitter.com static.ads-twitter.com www.googleadservices.com googleads.g.doubleclick.net stats.g.doubleclick.net js.hsleadflows.net; \
                style-src 'self' 'unsafe-inline' fonts.googleapis.com; \
                style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com; \
                worker-src 'self';"
            }
        ]
    }
]