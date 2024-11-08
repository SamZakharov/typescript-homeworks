const text = "This is a test sentence with some bad words.";
const forbiddenWords = ["bad", "test", "sentence"];

const highlightForbiddenWords = (text: string, forbiddenWords: string[]): string => {
    const splittedText = text.split(" ");
    forbiddenWords.forEach(bannedWord => {
        const bannedWordIndex = splittedText.indexOf(bannedWord);
        if (bannedWordIndex !== -1) {
            splittedText[bannedWordIndex] = `<del>${bannedWord}</del>`;
        }
    });
    return splittedText.join(" ");
}

document.getElementById('inputText')!.innerText = text;
forbiddenWords.forEach(bannedWord => {
    document.getElementById('inputBanWords')!.appendChild(document.createTextNode(' ' + bannedWord));
})
document.getElementById('outputEditedText')!.innerHTML = highlightForbiddenWords(text, forbiddenWords);

