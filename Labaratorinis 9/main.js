let krepsininkai = [];
var kiek = 0;

function funkcija() {
	const Vardas = document.getElementById('vardas')
	const Pavarde = document.getElementById('pavarde')
	const PTaskai = document.getElementById('taskai')
	const AKamuoliai = document.getElementById('atkovoti_kamuoliai')
	const RPerdavimai = document.getElementById('rezultatyviniai_perdavimai')
	const Laimi = document.getElementById('laimi')

	for (var i = 0; i < 1; i++) { 
		var laimejimas
		if (Laimi.checked == true) laimejimas = "Taip" 
		else laimejimas = "Ne"
		
        krepsininkai.push([Vardas.value, Pavarde.value, PTaskai.value, AKamuoliai.value, RPerdavimai.value, laimejimas])
    }
	
	var AtsakymoTekstas = document.createElement("div")
	AtsakymoTekstas.className = "row borderis"
	AtsakymoTekstas.innerHTML = '<div class="col-4 borderis">' + krepsininkai[kiek][0] + " " + krepsininkai[kiek][1] + '</div>' + '<div class="col-2 borderis">' + krepsininkai[kiek][2] + '</div>' + '<div class="col-2 borderis">' + krepsininkai[kiek][3] + '</div>' + '<div class="col-2 borderis">' + krepsininkai[kiek][4] + '</div>' + '<div class="col-2 borderis">' + krepsininkai[kiek][5] + '</div>'
	document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
		
	kiek++
	
	
	funkcija2();
}

function funkcija2() {
	document.getElementById("Galas").innerHTML = "";
	var daugiausiaiTasku = 0
	var daugiausiaiTaskuKrepsininkas = ""
	var daugiausiaiKamuoliu = 0
	var daugiausiaiKamuoliuKrepsininkas = ""
	var daugiausiaiPerdavimu = 0
	var daugiausiaiPerdavimuKrepsininkas = ""
	
	for (var i = 0; i < kiek; i++) {
		if(krepsininkai[i][5] == "Taip"){
			if(krepsininkai[i][2] > daugiausiaiTasku){
				daugiausiaiTaskuKrepsininkas = krepsininkai[i][0] + " " + krepsininkai[i][1]
				daugiausiaiTasku = krepsininkai[i][2]
			}
			if(krepsininkai[i][3] > daugiausiaiKamuoliu){
				daugiausiaiKamuoliuKrepsininkas = krepsininkai[i][0] + " " + krepsininkai[i][1]
				daugiausiaiKamuoliu = krepsininkai[i][3]
			}
			if(krepsininkai[i][4] > daugiausiaiPerdavimu){
				daugiausiaiPerdavimuKrepsininkas = krepsininkai[i][0] + " " + krepsininkai[i][1]
				daugiausiaiPerdavimu = krepsininkai[i][4]
			}
		}
    }
	
	var AtsakymoTekstas2 = document.createElement("div");
	AtsakymoTekstas2.innerHTML = "<label>" + "Daugiausiai taškų pelnė krepšininkas " + daugiausiaiTaskuKrepsininkas + ", kuris pelnė " + daugiausiaiTasku + " taškus." + "</label>" + "<br>" +
								 "<label>" + "Daugiausiai kamuolių atkovojo krepšininkas " + daugiausiaiKamuoliuKrepsininkas + ", kuris atkovojo " + daugiausiaiKamuoliu + " kamuolius." + "</label>" + "<br>" +
								 "<label>" + "Daugiausiai perdavimų atliko krepšininkas " + daugiausiaiPerdavimuKrepsininkas + ", kuris perdavė " + daugiausiaiPerdavimu + " kamuolius." + "</label>"
	document.getElementById("Galas").appendChild(AtsakymoTekstas2);
}