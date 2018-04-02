function zmianaKoloru(){
	var litery = "Curriculum Vitae";
	var kolor = new Array("#4885ed", "#db3236", "#db3236", "#f4c20d", "#f4c20d", "#4885ed", "#3cba54", "#db3236", "#db3236", "#4885ed", "#db3236", "#db3236", "#f4c20d", "#f4c20d", "#4885ed");
	for (var i = 0; i < litery.length; i++) {
		$("#litery").append(litery[i].fontcolor(kolor[i]));
	}
}
zmianaKoloru();