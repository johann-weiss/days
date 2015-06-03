function main(){
	var dNow = new Date();

	document.getElementById("upd").innerHTML = "#2015.06.03 13.56.08";
	
	var dayMine = new Date(1992,10,29);	
	document.getElementById("dayMine").innerHTML = daysBetween(dNow, dayMine);

	var dayI = new Date(1993,03,28);	
	document.getElementById("dayI").innerHTML = daysBetween(dNow, dayI);

	var aug = new Date(2017,07,01);
	document.getElementById("aug").innerHTML = daysBetween(aug,dNow);


/*
	var pure = new Date(2015,04,23);
	document.getElementById("pure").innerHTML = daysBetween(dNow,pure);

	var self_puring = new Date(2015,04,12);
	document.getElementById("self_puring").innerHTML = '0';
	// daysBetween(dNow,self_puring);
*/

	var noCoffee = new Date(2015,02,04);
	document.getElementById("noCoffee").innerHTML = daysBetween(dNow,noCoffee);

	var noJobTea = new Date(2015,04,20);
	document.getElementById("noJobTea").innerHTML = daysBetween(dNow,noJobTea);
/*	
	var anapana = new Date(2015,04,11);
	document.getElementById("anapana").innerHTML = daysBetween(dNow,anapana);
*/
	var lwo = new Date(2014,11,01);
	document.getElementById("lwo").innerHTML = daysBetween(dNow,lwo);

	document.getElementById("lwo_s").innerHTML = daysBetween(dNow, dayMine) - daysBetween(dNow,lwo);

	
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
