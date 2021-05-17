var mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

exports.addQuote = async (req, res) =>  {  

    //Create new quotation
    let newQuote = new Quote(req.body);
    newQuote.save(async (err, quote) => {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while new quotation adding."});
        } else {
            res.json({success: true, message: "New quotate was created successfully.", quote: quote});
        }
    }); 
}

exports.getQuotes = async (req, res) =>  {  
    Quote.find()
        .exec(function(err, quotes) {
        if (err) {
            return res.json({success: false, errMessage: "Unknown errors occurred while getting all quotes."});
        } else {
            return res.json({success: true, quotes: quotes});
        }
    });
}

exports.updateQuote = async (req, res) =>  {  
    let quoteObj = new Quote(req.body);

    Quote.findByIdAndUpdate(quoteObj._id, {
        title: quoteObj.title,
        author: quoteObj.author,
    }, {
        new: true,
        useFindAndModify: false
    }, async function(err, quote){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while updating quote."});
        } else {
            res.json({success: true, message: "Successfuly updated."});
        }
    });
}

exports.deleteQuote = async (req, res) =>  {  
    var id = req.params.id;
    Quote.findByIdAndRemove(id, {
        new: true,
        useFindAndModify: false
    }, async function(err, quote){
        if(err) {
            res.json({success: false, errMessage: "Unknown errors occurred while deleting quote."});
        } else {
            return res.json({success: true, message: "Successfully deleted"});
        }
    });
}
