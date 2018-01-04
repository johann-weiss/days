function main(){
	var dNow = new Date();

	document.getElementById("upd").innerHTML = "##07.09.2015 08:50:42";
	
	var dayMine = new Date(1992,10,29);	
	document.getElementById("dayMine").innerHTML = daysBetween(dNow, dayMine);

	var dayI = new Date(1993,03,28);	
	document.getElementById("dayI").innerHTML = daysBetween(dNow, dayI);

	var noCoffee = new Date(2018,0,02);	
	document.getElementById("noCoffee").innerHTML = daysBetween(dNow, noCoffee);
	
	var noSPHAO = new Date(2017,11,30);	
	document.getElementById("noSPHAO").innerHTML = daysBetween(dNow, noSPHAO);
	
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
