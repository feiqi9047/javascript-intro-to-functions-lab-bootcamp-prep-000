function shout(string) {
  return string.toUpperCase()
}

'Hello!'.toUpperCase()

function whisper(string) {
  return string.toLowerCase()
}

'Hello!'.toLowerCase()

function logShout(string) {
  return console.log('HELLO')
}

function logWhisper(string) {
  return console.log('hello')
}


function sayHiToGrandma(string){
  if(string.toLowerCase){
    return ("I can\'t hear you!")
  } else if(string.toUpperCase){
    return ("YES INDEED!")
  } else if(string.mixedCase)
  return ("I love you, too.")
}