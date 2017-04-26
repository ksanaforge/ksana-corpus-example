var createCorpusFromJSON=null
try {
	createCorpusFromJSON=require("ksana-corpus-builder").createCorpusFromJSON;
} catch(e){
	createCorpusFromJSON=require("ksana-corpus-lib").createCorpusFromJSON;
}

createCorpusFromJSON("xml/manual-corpus.json",function(err,bytewritten){
	if (err)console.log(err);
	else console.log(bytewritten);
});