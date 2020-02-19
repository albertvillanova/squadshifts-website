function renderLeaderboard(dataset) {
    // Load the dataset into json
    $.getJSON("results.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });

    // sort by F1 scores for dataset

    // populate scores, human/not, etc

    // need a data.leaderboard field, which is an array of sortered leaderboard
    // entries

    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('leaderboard').innerHTML = rendered;
}
