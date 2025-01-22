let darbuotojai = [];
var kiek = 0;

function funkcija() {
	const Id = kiek
	const Vardas = document.getElementById('vardas')
	const Pavarde = document.getElementById('pavarde')
	const Metai = document.getElementById('metai')
	const Stazas = document.getElementById('stazas')

	for (var i = 0; i < 1; i++) { 
        darbuotojai.push([kiek + 1, Vardas.value, Pavarde.value, Metai.value, Stazas.value])
    }
	
	var AtsakymoTekstas = document.createElement("div");
	AtsakymoTekstas.innerHTML = "<label>" + darbuotojai[kiek][0] + ". " + darbuotojai[kiek][1] + " " + darbuotojai[kiek][2] + " " + darbuotojai[kiek][3] + "m. " + darbuotojai[kiek][4] + "</label>"
	document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
	
	kiek++
	
	
	funkcija2();
}

let darbuotojai2 = [];

function funkcija2() {
	document.getElementById("darbas").innerHTML = "";
	darbuotojai2 = [];
	for (var i = 0; i < kiek; i++) { 
		if(darbuotojai[i][4] > 30 && darbuotojai[i][3] < 63){
			var AtsakymoTekstas2 = document.createElement("div");
			AtsakymoTekstas2.innerHTML = "<label>" + darbuotojai[i][1] + " " + darbuotojai[i][2] + " " + darbuotojai[i][3] + "m. " + darbuotojai[i][4] + "</label>"
			document.getElementById("darbas").appendChild(AtsakymoTekstas2);
			darbuotojai2.push([darbuotojai[i][1], darbuotojai[i][2], darbuotojai[i][3], darbuotojai[i][4]])
		}
    }
}

function saugojimas(filename, text){
	filename = "Darbuotojai.txt"
	text = darbuotojai2
	
	var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
}

