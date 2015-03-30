function main(){
	var dNow = new Date();
	
	var dBorn = new Date(1992,10,29);	
	document.getElementById("dol").innerHTML = daysBetween(dNow, dBorn);

	var aug = new Date(2017,07,01);
	document.getElementById("aug").innerHTML = daysBetween(aug,dNow);

	var pure = new Date(2015,02,31);
	document.getElementById("pure").innerHTML = daysBetween(dNow,pure);

	var noCoffee = new Date(2015,02,4);
	document.getElementById("noCoffee").innerHTML = daysBetween(dNow,noCoffee);
	
	document.getElementById("upd").innerHTML = "#2015.03.30 10.43.54";
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
