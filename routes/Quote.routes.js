var Quote = require("../controllers/Quote.controller");

module.exports = (app) => {
    app.post("/", Quote.addQuote);
    app.get("/", Quote.getQuotes);
    app.put("/", Quote.updateQuote);
    app.delete("/:id", Quote.deleteQuote);
};
