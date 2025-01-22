function puslapiai() {
	const x = document.getElementById('psl');
	var skaitmenys = 1
	var skaidymas = 0
	
	 for (i = 0; i <= x.value; i++) {
		for (j = 1; j<=i; j*=10){
			skaidymas++
		}
		skaitmenys += skaidymas
		skaidymas = 0
	}
	
	var AtsakymoTekstas = "Atsakymas: " + x.value + " puslapiams reikes " + (skaitmenys - 1) + " skaitmenu."
	document.getElementById("Atsakymas").innerHTML = AtsakymoTekstas;
}

