var numbers = []

function takeANumber(numbers) {
  var newOrder = numbers.push(numbers.length + 1)
return (`Welcome, you are number ${newOrder} in line.`)
}
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstinline = deliLine.shift()
    return `Currently serving ${firstinline}.`
  }
}
function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var finalString = 'The line is currently: ';
    for( var i = 0; i < deliLine.length; i++) {
      var substring = `${i + 1}. ${deliLine[i]}, `
      finalString += substring
    }
    return finalString.slice(0, -2)
  }
}
