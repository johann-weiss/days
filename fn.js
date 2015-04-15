function main(){
	var dNow = new Date();

	document.getElementById("upd").innerHTML = "#2015.04.15 11.33.56";
	
	var dBorn = new Date(1992,10,29);	
	document.getElementById("dol").innerHTML = daysBetween(dNow, dBorn);

	var aug = new Date(2017,07,01);
	document.getElementById("aug").innerHTML = daysBetween(aug,dNow);

	var pure = new Date(2015,03,16);
	document.getElementById("pure").innerHTML = daysBetween(dNow,pure);

	var noCoffee = new Date(2015,02,4);
	document.getElementById("noCoffee").innerHTML = daysBetween(dNow,noCoffee);
	
	var nali = new Date(2015,04,15);
	document.getElementById("nali").innerHTML = daysBetween(nali,dNow);

	
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
