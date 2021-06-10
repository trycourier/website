export default async(req, res) => {
    res.statusCode = 200;
    return res.json({ status: "success" });

    // //TODO
    // const { email, hutk, pageUri, pageName } = JSON.parse(req.body);
    // try {
    //     const apiEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`;
    //     const data = {
    //         submittedAt: new Date().valueOf().toString(),
    //         fields: [
    //             {
    //                 "name": "email",
    //                 "value": email
    //             }
    //         ],
    //         "context": {
    //             "hutk": hutk,
    //             "pageUri": pageUri,
    //             "pageName": pageName
    //         },
    //         "legalConsentOptions":{
    //             "consent":{
    //                 "consentToProcess":true,
    //                 "text":"I agree to allow Courier to store and process my personal data.",
    //                 "communications":[
    //                 {
    //                     "value":true,
    //                     "subscriptionTypeId":999,
    //                     "text":"I agree to receive marketing communications from Courier."
    //                 }
    //                 ]
    //             }
    //         }
    //     };
    //     try {
    //         const response = await fetch(apiEndpoint, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data),
    //         });
    //         if(response) {
    //             res.statusCode = 200;
    //             return res.json({ status: "success" });
    //         }
    //     } catch(e) {
    //         console.log(`err bruh: ${e}`);
    //     }
    // } catch(e) {
    //     console.log(e);
    //     res.statusCode = 500;
    //     return res.json({ status: "error, please contact admin." });
    // }
};