const {createCorpusFromJSON}=require("ksana-corpus-builder");
createCorpusFromJSON("xml/manual-corpus.json",function(err,bytewritten){
	if (err)console.log(err);
	else console.log(bytewritten);
});