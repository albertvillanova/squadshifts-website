function renderLeaderboard(dataset) {
    // Fetch the Mustache template
    var template = document.getElementById('template').innerHTML;

    // Build the leaderboard data
    var LEADERBOARD_JSON = 'results.json';
    var rows = [];
    $.getJSON(LEADERBOARD_JSON, function (data) {
        // Humans
        var humans = data[dataset].humans;
        for (var i = 0; i < humans.length; i++) {
            var item = humans[i];
            item.rank = "";
            item.row_class = "human-row";
            item[dataset + "_f1"] = parseFloat(item[dataset + "_f1"]).toFixed(1);
            item[dataset + "_em"] = parseFloat(item[dataset + "_em"]).toFixed(1);
            rows.push(item)
        }
        // Models
        var models = data[dataset].models;
        models.sort(
            function(a, b){
                return b[dataset + "_f1"] - a[dataset + "_f1"]
        });
        for (var i = 0; i < models.length; i++) {
            var item = models[i];
            if(i == 0){
                item.score_class = "best-score";
            } else{
                item.score_class = "";
            }
            item.rank = i + 1;
            item.row_class = ""
            item[dataset + "_f1"] = parseFloat(item[dataset + "_f1"]).toFixed(1);
            item[dataset + "_em"] = parseFloat(item[dataset + "_em"]).toFixed(1);
            rows.push(item)
        }
    data.leaderboard = rows
    var rendered = Mustache.render(template, data);
    document.getElementById('leaderboard').innerHTML = rendered;
    });
}
