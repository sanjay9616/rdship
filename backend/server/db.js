const { MongoClient } = require("mongodb");
const urlList = require("./config/urlList");

let dbConnection;
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(urlList.DATABASE.DATABASE_NAME.URL)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}