const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = require('./app');

const runtimeOpts = {
    timeoutSeconds: 60,
    memory: '256MB'
   };
   
exports.app = functions.runWith(runtimeOpts).https.onRequest(app);