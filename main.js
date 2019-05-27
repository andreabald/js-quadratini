// Parte 1
//  Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

function genera_numero_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crea_array_quadratini_rossi() {
  var numeri_rossi = [];

  while (numeri_rossi.length < 15) {
    var numero_random = genera_numero_random(0, 63);

    if(!numeri_rossi.includes(numero_random)) {
      numeri_rossi.push(numero_random);
    }
  }
  return numeri_rossi;
}


var posizioni_quadratini_rossi = crea_array_quadratini_rossi();

for (var i = 0; i <= 63; i++) {

  if(posizioni_quadratini_rossi.includes(i)) {
    $('.griglia').append('<div class="quadratino rosso"></div>');
  } else {
    $('.griglia').append('<div class="quadratino"></div>');
  }
}

var contatore_rosso = 0;
var contatore_verde = 0;

$('.quadratino').click(function() {

  if(! $(this).hasClass('colorato')) {

    if($(this).hasClass('rosso')) {
      contatore_rosso++;
      $('.contatore_rossi span').text(contatore_rosso);
    } else {
      contatore_verde++;
      $('.contatore_verdi span').text(contatore_verde);
    }
    $(this).addClass('colorato');
  }

});
