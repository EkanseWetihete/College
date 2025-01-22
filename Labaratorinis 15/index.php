<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
		<link href="main.css" rel="stylesheet" />
		<title>15 laboratorinis darbas</title>
	</head>
	<body>
		
		<h5> 15 Labaratorinis Darbas: </h5> <font> Atlikite tą patį darbą kaip tryliktoje užduotyje. Vietoje JSON naudokite XML. Įkelti failo (upload) nebūtina.</font> <br>
		
		<h5> Pasirinkimas</h5> <font> Tekstiniame faile yra krepšininkai. Sudaryti galimybę papildyti failą naujais krepšininkais. Surasti krepšininkus, kurie pelno daugiausiai taškų, atkovoja daugiausiai kamuolių ir atlieka daugiausiai rezultatyvių perdavimų kai jų komanda laimi.</font>
		<h6> Jei nieko neirašysite, puslapis tiesiog persikraus iš naujo. </h6>
		<form action="index.php" method="post">
			<h3> Krepšininko Informacija </h3>
			<label>Vardas:</label>
			<input placeholder="Vardas" name="vardas" maxlength="20"> 
			<label>Pavardė:</label>
			<input placeholder="Pavardė" name="pavarde" maxlength="20">
			<label>Pelnyti Taškai:</label>
			<input placeholder="Pelnyti Taškai" name="PT" maxlength="3">
			<label>Atkovoti Kamuoliai:</label>
			<input placeholder="Atkovoti Kamuoliai" name="AK" maxlength="3">
			<label>Rezultatyviniai Perdavimai:</label>
			<input placeholder="Rez. Perdavimai" name="RP" maxlength="3">
			<label>Komanda laimi*:</label>
			<input placeholder="Taip/Ne" name="laimi" maxlength="4">
				
			<br> <br> <br>
			<input type="submit" name="pridejimas" value="Pradėti"/>
		</form>
		
		<div ID="demo">
		
		</div>
		
		<?php
			if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['pridejimas'])) {
				funkcija();
			}
			
			function funkcija() {
				$Vardas = $_POST['vardas'];
				$Pavarde = $_POST['pavarde'];
				$PT = $_POST['PT'];
				$AK = $_POST['AK'];
				$RP = $_POST['RP'];
				$Laimi = $_POST['laimi'];
				
				if($Vardas == "" && $Pavarde == "" && $PT == "" && $AK == "" && $RP == "" && $Laimi == ""){
					return 0;
				}
				
				$krepsininkai = array(
					array("Vardas", "Pavarde", "PT", "AK", "RP", "Laimi")
				);
				
                $kiek = sizeof($krepsininkai);
				
				if(!is_file("upload.xml")){
					$dom = new DOMDocument();
					
                    $dom->encoding = 'utf-8';
                    $dom->xmlVersion = '1.0';
                    $dom->formatOutput = true;

                    $FailoPav = 'upload.xml';
					
                    $root = $dom->createElement('Krepsininkai');
					$krepsininkas = $dom->createElement('Krepsininkas');
			
					$krepsininkoVardas = $dom->createElement('Vardas', $krepsininkai[0][0]);
					$krepsininkas->appendChild($krepsininkoVardas);
					
					$krepsininkoPavarde = $dom->createElement('Pavarde', $krepsininkai[0][1]);
					$krepsininkas->appendChild($krepsininkoPavarde);
					
					$ifPT = $dom->createElement('PT', $krepsininkai[0][2]);
					$krepsininkas->appendChild($ifPT);
					
					$ifAK = $dom->createElement('AK', $krepsininkai[0][3]);
					$krepsininkas->appendChild($ifAK);
					
					$ifRP = $dom->createElement('RP', $krepsininkai[0][4]);
					$krepsininkas->appendChild($ifRP);
					
					$iflaimi = $dom->createElement('laimi', $krepsininkai[0][5]);
					$krepsininkas->appendChild($iflaimi);
			
					$root->appendChild($krepsininkas);

					$dom->appendChild($root);
                    $dom->save($FailoPav);
				} 
				
				$objXmlDocument = simplexml_load_file("upload.xml");
				 
				echo "<br>";
				
                $list = $objXmlDocument->Krepsininkas;
				
				$krepsininkai2 = [];
				$Pcount = count($list);
				
				for($i = 0; $i<$Pcount; $i++){
					$vard1 = $list[$i]->Vardas;
					$pav1 = $list[$i]->Pavarde;
					$pt1 = $list[$i]->PT;
					$ak1 = $list[$i]->AK;
					$rp1 = $list[$i]->RP;
					$laimi1 = $list[$i]->laimi;
					array_push($krepsininkai2, array($vard1, $pav1, $pt1, $ak1, $rp1, $laimi1));
				}
				
				array_push($krepsininkai2, array($Vardas, $Pavarde, $PT, $AK, $RP, $Laimi));
				$count = count($krepsininkai2);
				
				$dom = new DOMDocument();
					
				$dom->encoding = 'utf-8';
				$dom->xmlVersion = '1.0';
				$dom->formatOutput = true;
				$root = $dom->createElement('Krepsininkai');
				
				
				for($i = 0; $i<$count; $i++){
					
					$krepsininkas = $dom->createElement('Krepsininkas');
			
					$krepsininkoVardas = $dom->createElement('Vardas', $krepsininkai2[$i][0]);
					$krepsininkas->appendChild($krepsininkoVardas);
					
					$krepsininkoPavarde = $dom->createElement('Pavarde', $krepsininkai2[$i][1]);
					$krepsininkas->appendChild($krepsininkoPavarde);
					
					$ifPT = $dom->createElement('PT', $krepsininkai2[$i][2]);
					$krepsininkas->appendChild($ifPT);
					
					$ifAK = $dom->createElement('AK', $krepsininkai2[$i][3]);
					$krepsininkas->appendChild($ifAK);
					
					$ifRP = $dom->createElement('RP', $krepsininkai2[$i][4]);
					$krepsininkas->appendChild($ifRP);
					
					$iflaimi = $dom->createElement('laimi', $krepsininkai2[$i][5]);
					$krepsininkas->appendChild($iflaimi);
			
					$root->appendChild($krepsininkas);
					
				}
				$dom->appendChild($root);
				$dom->save('upload.xml');
				
				
				$daugiausiaiTasku = 0;
				$daugiausiaiTaskuK = "";
				$daugiausiaiKamuoliu = 0;
				$daugiausiaiKamuoliuK = "";
				$daugiausiaiPerdavimu = 0;
				$daugiausiaiPerdavimuK = "";
				
				//daugiausiai tasku turintys krepsininkai
				for($i = 1; $i < $count; $i++){
					for($j = 0; $j < 6; $j++){
						if($krepsininkai2[$i][5] == "Taip"){
							if($daugiausiaiTasku < $krepsininkai2[$i][2]){
								$daugiausiaiTasku = $krepsininkai2[$i][2];
								$daugiausiaiTaskuK = $krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1];
							}
							if($daugiausiaiKamuoliu < $krepsininkai2[$i][3]){
								$daugiausiaiKamuoliu = $krepsininkai2[$i][3];
								$daugiausiaiKamuoliuK = $krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1];
							}
							if($daugiausiaiPerdavimu < $krepsininkai2[$i][4]){
								$daugiausiaiPerdavimu = $krepsininkai2[$i][4];
								$daugiausiaiPerdavimuK = $krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1];
							}
						}
					}
				}
				
				
				echo '<div name="Atsakymas" class="container">';
				echo '<div class="row borderis"> <div class="col-4 borderis"> Krepšininkai </div> <div class="col-2 borderis"> Pelnyti Taškai </div> <div class="col-2 borderis"> Atkovoti kamuoliai </div><div class="col-2 borderis">rezultatyviniai perdavimai</div><div class="col-2 borderis">Komanda laimi</div></div>';
				
				for($i = 1; $i < $count; $i++){
					echo '<div class="row borderis"> <div class="col-4 borderis">' . $krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1] . '</div>';
					if($krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1] == $daugiausiaiTaskuK && $daugiausiaiTasku == $krepsininkai2[$i][2]) {
						echo '<div class="col-2 borderis red"> ' . $krepsininkai2[$i][2] . ' </div>'; 
					} else {
						echo '<div class="col-2 borderis"> ' . $krepsininkai2[$i][2] . ' </div>'; 
					}
					
					if($krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1] == $daugiausiaiKamuoliuK && $daugiausiaiKamuoliu == $krepsininkai2[$i][3]) {
						echo '<div class="col-2 borderis red">' . $krepsininkai2[$i][3] . '</div>'; 
					} else {
						echo '<div class="col-2 borderis">' . $krepsininkai2[$i][3] . '</div>'; 
					}
					
					if($krepsininkai2[$i][0] . " " . $krepsininkai2[$i][1] == $daugiausiaiPerdavimuK && $daugiausiaiPerdavimu == $krepsininkai2[$i][4]) {
						echo '<div class="col-2 borderis red">' . $krepsininkai2[$i][4] . '</div>'; 
					} else {
						echo '<div class="col-2 borderis">' . $krepsininkai2[$i][4] . '</div>'; 
					}
					
					echo '<div class="col-2 borderis">' . $krepsininkai2[$i][5] . '</div></div>';
				}
				echo '</div>';
				
			}
		?>
	</body>
</html>