var app = require("./config/server")

var homeRoute = require("./app/routes/home")
homeRoute(app)

var formBookInclusionRoute = require("./app/routes/form_book_inclusion")(app)
var booksRoute = require("./app/routes/books")(app)

app.listen(3000, function() {
    console.log("Servidor rodando com Express na porta 3000")
})
