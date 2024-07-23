const mongoose = require("mongoose");

var enqSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Enviado",
    enum: ["Enviado", "Contatado", "Em progresso"],
  },
});

//Export the model
module.exports = mongoose.model("Enquiry", enqSchema);
