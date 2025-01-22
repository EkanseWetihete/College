let krepsininkai = [];
var kiek = 0;

$(document).ready(function(){
	$("#prideti").click(function(){
		const Vardas = $("#vardas").val()
		const Pavarde = $("#pavarde").val()
		const PTaskai = $("#taskai").val()
		const AKamuoliai = $("#atkovoti_kamuoliai").val()
		const RPerdavimai = $("#rezultatyviniai_perdavimai").val()
		const Laimi = $('input[name="laimi"]:checked').serialize()
		
		var laimejimas
		if (Laimi == "laimi=on") laimejimas = "Taip" 
		else laimejimas = "Ne"
		
		krepsininkai.push([Vardas, Pavarde, PTaskai, AKamuoliai, RPerdavimai, laimejimas, kiek])
	
		$("#Atsakymas").append('<div id="' + kiek + '" class="row borderis"> <div class="col-4 borderis">' + Vardas + " " + Pavarde + '</div> <div class="col-2 borderis">' + PTaskai + '</div> <div class="col-2 borderis">' + AKamuoliai + '</div> <div class="col-2 borderis">' + RPerdavimai + '</div> <div class="col-2 borderis">' + laimejimas	 + '</div> </div>')
		
		kiek++
		
		var daugiausiaiTasku = -1
		var daugiausiaiKamuoliu = -1
		var daugiausiaiPerdavimu = -1
		
		var daugiausiaiTaskuSk = 0
		var daugiausiaiKamuoliuSk = 0
		var daugiausiaiPerdavimuSk = 0
		
		for (var i = 0; i < kiek; i++) {
			if(krepsininkai[i][5] == "Taip"){
				if(krepsininkai[i][2] > daugiausiaiTaskuSk){
					daugiausiaiTaskuSk = krepsininkai[i][2]
					daugiausiaiTasku = i
				}
				if(krepsininkai[i][3] > daugiausiaiKamuoliuSk){
					daugiausiaiKamuoliuSk = krepsininkai[i][3]
					daugiausiaiKamuoliu = i
				}
				if(krepsininkai[i][4] > daugiausiaiPerdavimuSk){
					daugiausiaiPerdavimuSk = krepsininkai[i][4]
					daugiausiaiPerdavimu = i
				}
			}
		}
		
		for(var i = 0; i < kiek; i++){
			$("#" + i).html("test")
			
		}
		
		for(var i = 0; i < kiek; i++){
			$("#" + i).html('<div class="col-4 borderis">' + krepsininkai[i][0] + " " + krepsininkai[i][1] + '</div> <div id="kr3-'+ i + '"class="col-2 borderis">' + krepsininkai[i][2] + '</div> <div id="kr4-'+ i + '" class="col-2 borderis">' + krepsininkai[i][3] + '</div> <div id="kr5-'+ i +'"class="col-2 borderis">' + krepsininkai[i][4] + '</div> <div class="col-2 borderis">' + krepsininkai[i][5] + '</div>')
			
			
		
		}
		
		$('#kr3-'+daugiausiaiTasku).css('background-color', 'red');
		$('#kr4-'+daugiausiaiKamuoliu).css('background-color', 'red');
		$('#kr5-'+daugiausiaiPerdavimu).css('background-color', 'red');
		
	});
});
