module.exports = function(app) {
    app.get("/livros", function(req, res){
        res.render("books/books")
    })
}
