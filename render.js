function renderLeaderboard(dataset) {
    // Load the dataset into json

    // sort by F1 scores for dataset

    // populate scores, human/not, etc

    // need a data.leaderboard field, which is an array of sortered leaderboard
    // entries

    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('leaderboard').innerHTML = rendered;
}
