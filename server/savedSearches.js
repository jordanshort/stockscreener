var searches = [];
var id = 1;

module.exports = {
    create: (req, res) => {
        var tempSearch = req.body;
        tempSearch.id = id++;
        searches.push(tempSearch);
        res.status(200).send(searches);
    }


}