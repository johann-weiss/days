function main(){
	var dNow = new Date();

	document.getElementById("upd").innerHTML = "##07.09.2015 08:50:42";
	
	var dayMine = new Date(1992,10,29);	
	document.getElementById("dayMine").innerHTML = daysBetween(dNow, dayMine);

	var dayI = new Date(1993,03,28);	
	document.getElementById("dayI").innerHTML = daysBetween(dNow, dayI);

	var aug = new Date(2017,07,01);
	document.getElementById("aug").innerHTML = daysBetween(aug,dNow);

	var noCoffeeYear = new Date(2016,08,07);
	var noCoffee = new Date(2015,08,07);
	document.getElementById("noCoffeeYear").innerHTML = daysBetween(noCoffeeYear, dNow);
	document.getElementById("noCoffee").innerHTML = daysBetween(dNow, noCoffee);

	var noSnickersAndOtherShitOnlyFruits = new Date(2015,09,07);
	document.getElementById("noSnickersAndOtherShitOnlyFruits").innerHTML = daysBetween(noSnickersAndOtherShitOnlyFruits, dNow);
	
	var lwo = new Date(2014,11,01);
	document.getElementById("lwo").innerHTML = daysBetween(dNow,lwo);
	document.getElementById("lwo_s").innerHTML = daysBetween(dNow, dayMine) - daysBetween(dNow,lwo);
	
}


function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}
