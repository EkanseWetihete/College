<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
		<link href="main.css" rel="stylesheet" />
		<title>12 laboratorinis darbas</title>
	</head>
	<body>
		<h2> 12 Laboratorinis Darbas </h2> <font> Darbą atlikite pradinius duomenis įkeldami faile (upload).</font> <br>
		<h5> Pasirinkimas: </h5> <font> Tekstiniame faile yra krepšininkai. Sudaryti galimybę papildyti failą naujais krepšininkais. Surasti krepšininkus, kurie pelno daugiausiai taškų, atkovoja daugiausiai kamuolių ir atlieka daugiausiai rezultatyvių perdavimų kai jų komanda laimi.</font>
		<br> <br>
		
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
			<label>Komanda laimi:</label>
			<input placeholder="Taip/Ne" name="laimi" maxlength="4">
				
			<br> <br> <br>
			<input type="submit" name="pridejimas" value="Pradėti"/>
		</form>
		
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
				
				$darbuotojai = array(
					array($Vardas, $Pavarde, $PT, $AK, $RP, $Laimi),
				);
				
				if($Laimi == "Taip" or $Laimi == "Ne"){
					print("");
				} else {
					echo "Parasykite ar laimi (Taip arba Ne)";
					return 0;
				}
				
				$darbuotojai1 = array();
				
				$darbuotojai2 = array();
				
				$darbuotojai1 = file("upload.txt");
				
				array_push($darbuotojai1, $Vardas . " " . $Pavarde . " " . $PT . " " . $AK . " " . $RP . " " . $Laimi);
				$count = count($darbuotojai1);
				
				//failo nuskaitymas
				for ($i = 0; $i < $count; $i++){
					$kelintas = 0;
					$galas = false;
					$vard = "";
					$pav = "";
					$peln = "";
					$atk = "";
					$rez = "";
					$laim = "";
					
					for ($j = 0; $j < 100 && $galas == false; $j++){
						if($kelintas == 0){
							$vard = $vard . $darbuotojai1[$i][$j];
							if($darbuotojai1[$i][$j] == " ") {
								$kelintas = $kelintas + 1;
							}
						} else if($kelintas == 1){
							$pav = $pav . $darbuotojai1[$i][$j];
							if($darbuotojai1[$i][$j] == " ") {
								$kelintas = $kelintas + 1;
							}
						} else if($kelintas == 2){
							$peln = $peln . $darbuotojai1[$i][$j];
							if($darbuotojai1[$i][$j] == " ") {
								$kelintas = $kelintas + 1;
							}
						} else if($kelintas == 3){
							$atk = $atk . $darbuotojai1[$i][$j];
							if($darbuotojai1[$i][$j] == " ") {
								$kelintas = $kelintas + 1;
							}
						} else if($kelintas == 4){
							$rez = $rez . $darbuotojai1[$i][$j];
							if($darbuotojai1[$i][$j] == " ") {
								$kelintas = $kelintas + 1;
							}
						} else if($kelintas == 5){
							if($darbuotojai1[$i][$j] == "N") {
								$kelintas = $kelintas + 1;
								$laim = "Ne";
							} else {
								$kelintas = $kelintas + 1;
								$laim = "Taip";
							}
						} else {
							$galas = true;
						}
					}
					$darbuotojai2[$i][0] = $vard;
					$darbuotojai2[$i][1] = $pav;
					$darbuotojai2[$i][2] = $peln;
					$darbuotojai2[$i][3] = $atk;
					$darbuotojai2[$i][4] = $rez;
					$darbuotojai2[$i][5] = $laim;
				}
				$daugiausiaiTasku = 0;
				$daugiausiaiKamuoliu = 0;
				$daugiausiaiPerdavimu = 0;
				
				//daugiausiai tasku turintys krepsininkai
				for($i = 0; $i < $count; $i++){
					
					for($j = 0; $j < 6; $j++){
						if($darbuotojai2[$i][5] == "Taip"){
							if($daugiausiaiTasku < $darbuotojai2[$i][2]){
								$daugiausiaiTasku = $darbuotojai2[$i][2];
							}
							if($daugiausiaiKamuoliu < $darbuotojai2[$i][3]){
								$daugiausiaiKamuoliu = $darbuotojai2[$i][3];
							}
							if($daugiausiaiPerdavimu < $darbuotojai2[$i][4]){
								$daugiausiaiPerdavimu = $darbuotojai2[$i][4];
							}
						}
					}
				}
				
				
				echo '<div name="Atsakymas" class="container">';
				echo '<div class="row borderis"> <div class="col-4 borderis"> Krepšininkai </div> <div class="col-2 borderis"> Pelnyti Taškai </div> <div class="col-2 borderis"> Atkovoti kamuoliai </div><div class="col-2 borderis">rezultatyviniai perdavimai</div><div class="col-2 borderis">Komanda laimi</div></div>';
				
				//Lenteles padarymas
				for($i = 0; $i < $count; $i++){
					echo '<div class="row borderis"> <div class="col-4 borderis">' . $darbuotojai2[$i][0] . " " . $darbuotojai2[$i][1] . '</div>';
					if($darbuotojai2[$i][2] == $daugiausiaiTasku) {
						echo '<div class="col-2 borderis red"> ' . $darbuotojai2[$i][2] . ' </div>'; 
					} else {
						echo '<div class="col-2 borderis"> ' . $darbuotojai2[$i][2] . ' </div>'; 
					}
					
					if($darbuotojai2[$i][3] == $daugiausiaiKamuoliu) {
						echo '<div class="col-2 borderis red">' . $darbuotojai2[$i][3] . '</div>'; 
					} else {
						echo '<div class="col-2 borderis">' . $darbuotojai2[$i][3] . '</div>'; 
					}
					
					if($darbuotojai2[$i][4] == $daugiausiaiPerdavimu) {
						echo '<div class="col-2 borderis red">' . $darbuotojai2[$i][4] . '</div>'; 
					} else {
						echo '<div class="col-2 borderis">' . $darbuotojai2[$i][4] . '</div>'; 
					}
					
					echo '<div class="col-2 borderis">' . $darbuotojai2[$i][5] . '</div></div>';
				}
				echo '</div>';
				
				//išsaugojimas i faila
				$myfile = fopen("upload.txt", "w") or die("Unable to open file!");
				
				for ($i = 0; $i < $count; $i++) { 
					$txt = $darbuotojai2[$i][0] . " " . $darbuotojai2[$i][1] . " " . $darbuotojai2[$i][2] . " " . $darbuotojai2[$i][3] . " " . $darbuotojai2[$i][4] . " " . $darbuotojai2[$i][5] . "\n";
					fwrite($myfile, $txt);
				}
				fclose($myfile);
				
			}
		?>
	</body>
</html>