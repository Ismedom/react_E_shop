const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require("../testing-13d5e-firebase-adminsdk-52cli-7732d44e06.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "testing-13d5e.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
