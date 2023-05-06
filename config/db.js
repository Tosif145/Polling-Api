const mongoose = require('mongoose');

const connectWithDb = () => {
  // mongoose
  //   .connect(process.env.DB_URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(console.log(`DB connected successfully`))
  //   .catch((error) => {
  //     console.log(`DB connection failed`);
  //     console.log(error);
  //     process.exit(1);
  //   });
  mongoose.connect('mongodb://127.0.0.1:27017/PollingApi');
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

  db.once("open", function () {
    console.log("Connected to DB");
  });
};

module.exports = connectWithDb
