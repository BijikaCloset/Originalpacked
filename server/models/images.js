const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const ImagesproductsSchema = new Schema({
  images: {
    type: Array,
  },
});

const Imagesproducts = Mongoose.model("Imagesproducts", ImagesproductsSchema);

module.exports = Imagesproducts;
