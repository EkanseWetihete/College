let vartotojas = [];
var kiek = 0;

function funkcija() {
	const Vardas = document.getElementById('vardas')
	const Pavarde = document.getElementById('pavarde')
	const Metai = document.getElementById('metai')
	const Menuo = document.getElementById('menuo')
	const Diena = document.getElementById('diena')
	const Adresas = document.getElementById('adresas')
	const Studijuoja = document.getElementById('studijuoja')
	const Kryptis = document.getElementById('pasirinkimas')
	const Vyras = document.getElementById('vyras')
	const Moteris = document.getElementById('moteris')
	
	var studijuojantis
	var PKryptis = ''
	var lytis
	
	if(Vardas.value == "") {
		alert("Vardo laukas yra būtinas.")
		return 0
	}
	
	if(Pavarde.value == "") {
		alert("Pavardės laukas yra būtinas.")
		return 0
	}
	if(Metai.value == "") {
		alert("Metų laukas yra būtinas.")
		return 0
	}
	if(Menuo.value == "") {
		alert("Menesių laukas yra būtinas.") 
		return 0
	}
	if(Diena.value == "") {
		alert("Dienos laukas yra būtinas.")
		return 0
	}
	
	if(Menuo.value > 12) {
		alert("Pasirinkite menesius intervalu tarp 1 ir 12.")
		return 0
	}
	if(Diena.value > 31){
		alert("Pasirinkite dienas intervalu tarp 1 ir 31.")
		return 0
	}
	
	if (Studijuoja.checked == true) {
		studijuojantis = "Taip"
		PKryptis = Kryptis.value
	} else {
		studijuojantis = "Ne"
		PKryptis = '-'
	}
	
	if (Vyras.checked == false && Moteris.checked == false){
		alert("Pasirinkite lyti.")
		return 0
	}
	
	if(Vyras.checked == true) {
		lytis = "Vyras"
	} else if(Moteris.checked == true) {
		lytis = "Moteris"
	}
	
	if(Kryptis.value == "Pasirinkite studijų krypti..." && studijuoja.checked == true){
		alert("Parinkite savo studijų krypti.")
		return 0
	}
	
	vartotojas.push([kiek, Vardas.value, Pavarde.value, Metai.value, Menuo.value, Diena.value, adresas.value, studijuojantis, PKryptis, lytis, '\n'])
	
	var AtsakymoTekstas = document.createElement("div")
	AtsakymoTekstas.className = "row borderis vidurys"
	AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[kiek][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[kiek][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[kiek][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[kiek][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[kiek][8] + '</div>' 
	document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
		
	kiek++
	StatistikosFunkcija()
}

var lyt="Vyras"
function rykiavimas_Lytis(){
	document.getElementById("Atsakymas").innerHTML = '<div class="row borderis vidurys"> <div class="col-3 borderis"> Vardas </div> <div class="col-4 borderis"> Pavardė </div> <div class="col-1 borderis"> Lytis <button class="rykiuoti" type="button" onclick="rykiavimas_Lytis()"> ↕ </button> </div><div class="col-1 borderis"> Studijuoja </div> <div class="col-3 borderis"> Kryptis </div> </div>'
	if(lyt == "Vyras"){
		for(i = 0; i<kiek; i++){
			if(vartotojas[i][9] == "Vyras"){
				var AtsakymoTekstas = document.createElement("div")
				AtsakymoTekstas.className = "row borderis vidurys"
				AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
				document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
			}
		}
		for(i = 0; i<kiek; i++){
			if(vartotojas[i][9] == "Moteris"){
				var AtsakymoTekstas = document.createElement("div")
				AtsakymoTekstas.className = "row borderis vidurys"
				AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
				document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
			}
			lyt = "Moteris"
		}
	} else {
		for(i = 0; i<kiek; i++){
			if(vartotojas[i][9] == "Moteris"){
				var AtsakymoTekstas = document.createElement("div")
				AtsakymoTekstas.className = "row borderis vidurys"
				AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
				document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
			}
		}
		for(i = 0; i<kiek; i++){
			if(vartotojas[i][9] == "Vyras"){
				var AtsakymoTekstas = document.createElement("div")
				AtsakymoTekstas.className = "row borderis vidurys"
				AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
				document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
			}
		}
		lyt = "Vyras"
	}
}

var stud = "Ne"
function Filtruoti(){
	document.getElementById("Atsakymas").innerHTML = '<div class="row borderis vidurys"> <div class="col-3 borderis"> Vardas </div> <div class="col-4 borderis"> Pavardė </div> <div class="col-1 borderis"> Lytis <button class="rykiuoti" type="button" onclick="rykiavimas_Lytis()"> ↕ </button> </div><div class="col-1 borderis"> Studijuoja </div> <div class="col-3 borderis"> Kryptis </div> </div>'

	for(i = 0; i<kiek; i++){
		if(vartotojas[i][7] == stud){
			var AtsakymoTekstas = document.createElement("div")
			AtsakymoTekstas.className = "row borderis vidurys"
			AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
			document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
		} 
	}
	if (stud == "Ne") {
		stud = "Taip"
	} else stud = "Ne"

}

function download() {
    const blob = new Blob([vartotojas], { type: 'text/csv' });
 
    const url = window.URL.createObjectURL(blob)
 
    const a = document.createElement('a')
	
    a.setAttribute('href', url)
    a.setAttribute('download', 'download.csv');
 
    a.click()
	
	document.getElementById("Atsakymas").innerHTML = '<div class="row borderis vidurys"> <div class="col-3 borderis"> Vardas </div> <div class="col-4 borderis"> Pavardė </div> <div class="col-1 borderis"> Lytis <button class="rykiuoti" type="button" onclick="rykiavimas_Lytis()"> ↕ </button> </div><div class="col-1 borderis"> Studijuoja </div> <div class="col-3 borderis"> Kryptis </div> </div>'
	for(i = 0; i<kiek; i++){
		var AtsakymoTekstas = document.createElement("div")
		AtsakymoTekstas.className = "row borderis vidurys"
		AtsakymoTekstas.innerHTML = '<div class="col-3 borderis">' + vartotojas[i][1] + '</div>' + '<div class="col-4 borderis">' + vartotojas[i][2] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][9] + '</div>' + '<div class="col-1 borderis">' + vartotojas[i][7] + '</div>' + '<div class="col-3 borderis">' + vartotojas[i][8] + '</div>' 
		document.getElementById("Atsakymas").appendChild(AtsakymoTekstas);
	}	
}

var vyr=0, mot=0, stud=0
function StatistikosFunkcija(){
	for(i = 0; i<kiek; i++){
		if(vartotojas[i][9] == "Vyras"){
			vyr++
		} else {
			mot++
		}
		
		if(vartotojas[i][7] == "Taip"){
			stud++
		} 
	}
	
	document.getElementById("Statistika").innerHTML = '<h4> Statistika: </h4> <br> <font> Iš viso susiregistravusiu vyrų: ' + vyr + '</font>' + ', <br> <font> Iš viso susiregistravusiu moterų: '+ mot + '</font> <br> <font> iš viso studijuojančių žmonių: ' + stud + '</font> <br>'
	vyr = 0, mot = 0, stud = 0
}

