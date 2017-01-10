var censorWords = ["bad","sad","ugly"];
var customCensorWords = [];

function censor(text){
	for(index = 0; index < censorWords.length; index++){
		text = text.replace(censorWords[index],"*****");
	}
	for(index = 0; index < customCensorWords.length; index++){
		text = text.replace(customCensorWords[index],"*****");
	}
	return text;
}

function addCensorWord(word){
	customCensorWords.push(word);
}
function getCensorWords(){
	return censorWords.concat(customCensorWords);
}
exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWords = getCensorWords;
