const {createCorpusFromJSON}=require("ksana-corpus-lib");
createCorpusFromJSON("xml/manual-corpus.json",function(err,bytewritten){
	if (err)console.log(err);
	else console.log(bytewritten);
});