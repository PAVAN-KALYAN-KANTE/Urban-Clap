// const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1:27017/urban-clap';

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connection;
