function main(){
	var dNow = new Date();
	
	var dayMine = new Date(1992,10,29);	
	document.getElementById("dayMine").innerHTML = daysBetween(dNow, dayMine);

	var dayI = new Date(1993,03,28);	
	document.getElementById("dayI").innerHTML = daysBetween(dNow, dayI);

	var noCoffee = new Date(2018,0,02);	
	var noCoffeeDay = daysBetween(dNow, noCoffee);
	document.getElementById("noCoffee").innerHTML = noCoffeeDay;
	
	var noAFSA = new Date(2018,0,18);	
	document.getElementById("noAFSA").innerHTML = daysBetween(dNow, noAFSA);
	
	// var six = new Date(2018,0,16);
	// document.getElementById("six").innerHTML = daysBetween(dNow, six);
	
	// var morngym = new Date(2018,0,16);
	// document.getElementById("morngym").innerHTML = daysBetween(dNow, morngym);
	
	// var S000 = new Date(2018,0,7);
	// document.getElementById("S000").innerHTML = daysBetween(dNow, S000);

	
	
	document.getElementById("noCoffeePromile").innerHTML = (noCoffeeDay/dayMine).toFixed(4);
	
	
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
