const lib="ksana-corpus-builder";
const createCorpusFromJSON=require(lib).createCorpusFromJSON;

createCorpusFromJSON("xml/manual-corpus.json",function(err,bytewritten){
	if (err)console.log(err);
	else console.log(bytewritten);
});