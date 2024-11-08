var text = "This is a test sentence with some bad words.";
var forbiddenWords = ["bad", "test", "sentence"];
var highlightForbiddenWords = function (text, forbiddenWords) {
    var splittedText = text.split(" ");
    forbiddenWords.forEach(function (bannedWord) {
        var bannedWordIndex = splittedText.indexOf(bannedWord);
        if (bannedWordIndex !== -1) {
            splittedText[bannedWordIndex] = "<del>".concat(bannedWord, "</del>");
        }
    });
    return splittedText.join(" ");
};
document.getElementById('inputText').innerText = text;
forbiddenWords.forEach(function (bannedWord) {
    document.getElementById('inputBanWords').appendChild(document.createTextNode(' ' + bannedWord));
});
document.getElementById('outputEditedText').innerHTML = highlightForbiddenWords(text, forbiddenWords);
