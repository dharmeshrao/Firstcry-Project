const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
" mongodb+srv://sagar:Firstcry_123@cluster0.hnm7z.mongodb.net/firstcry?retryWrites=true&w=majority",

  );
};
