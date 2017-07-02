console.log('test');

console.log('Witamy w konsoli Node.js');
console.log('Zaraz nastapi odliczanie...');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

for(i = 10; i > 0 ; i--) {
	console.log(i);
	sleep(1000);
}

console.log('Robienie takich rzeczy jest fajne ! ');

console.log('Sprojbujcie teraz sami!');

for(i = 60; i > 0 ; i--) {
	console.log(i);
	sleep(1000);
}

