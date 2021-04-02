module.exports = function(app) {
    app.get("/form_book_inclusion", function(req, res){
        res.render("admin/form_add_book")
    })
}
