var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    title: {type: String, default: "" },
    author: {type: String, default: "" },
});

var Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
