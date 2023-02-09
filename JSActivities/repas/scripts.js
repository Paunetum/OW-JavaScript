var equips = ["Barça", 33, {nom: "Espanyol", entrenador: "Ruby"}, null, "Madrid", {nom: "Girona", socis: 2836}];

document.getElementById('barca').innerHTML = equips[0];
document.getElementById('espanol').innerHTML = equips[2].nom;
document.getElementById('madrid').innerHTML = equips[4];
document.getElementById('girona').innerHTML = equips[5].nom;
document.getElementById('entrenador_espanol').innerHTML = "<b>Entrenador del espanyol: </b>" + equips[2].entrenador;
document.getElementById('socis_girona').innerHTML = "<b>Socis del girona: </b>" + equips[5].socis;