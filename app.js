var d = new Date()
var hour = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

document.getElementById('time1').innerHTML = hour + ':' + min
var body = document.getElementById('body')

function showMessage1() {
  document.getElementById('body').innerHTML =
    "One Language to Rule Them All"
}
function showMessage2() {
  document.getElementById('body').innerHTML =
    "Hyper Text Markup Language is the Backbone of the Web"
}
function showMessage3() {
  document.getElementById('body').innerHTML =
    "CSS is the language we use to style an HTML document"
}