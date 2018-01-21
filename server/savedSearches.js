var searches = [];
var id = 1;
var sectorSearch = [{name: "consumer", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "energy", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "financial", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "healthcare", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "industrial", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "basic_materials", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "utilites", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
    {name: "technology", minPrice: 30, maxPrice: 150, avgVolume: 1000000},
]

module.exports = {
    create: (req, res) => {
        var tempSearch = req.body;
        tempSearch.id = id++;
        searches.push(tempSearch);
        res.status(200).send(searches);
    },

    read: (req, res) => {
        res.status(200).send(sectorSearch);
    }



}

