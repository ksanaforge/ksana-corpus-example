const {openCorpus}=require("ksana-corpus");

openCorpus("manual",function(err,cor){

//sync
	const k=cor.filterKey("entry","條");
	console.log(k)
/*
	cor.getKeyField("entry",function(data){
		console.log(data)
	})
*/	
})