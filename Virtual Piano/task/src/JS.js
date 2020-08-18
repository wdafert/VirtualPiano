document.addEventListener("keydown", function (event) {
  switch (event.key.toUpperCase()) {
    case "A":
    case "S":
    case "D":
    case "F":
    case "G":
    case "H":
    case "J":
    case "W":
    case "E":
    case "T":
    case "Y":
    case "U":
      let audio = new Audio(`audio/${event.key}.mp3`); //"audio/A.mp3"); //"audio/`'${event.key}'`.mp3"); 'audio/' + event.code[3] + '.mp3'
      audio.play();
      break;
    default:
      console.log("key not supported");
  }
});
