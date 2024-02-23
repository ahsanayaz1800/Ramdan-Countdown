setInterval(function () {
  var date = new Date().getTime()
  var ramDate = new Date('march 12, 2024 ').getTime()
  var sub = ramDate - date
  var day = Math.floor(sub / (1000 * 60 * 60 * 24))
  var getDay = document.querySelector("#day")
  
  getDay.innerHTML = day + "<br>" + "Day"
  var hr = Math.floor(sub % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  var getHr = document.querySelector("#hr")
  getHr.innerHTML = hr + "<br>" + "Hrs" 
  var min = Math.floor(sub % (1000 * 60 * 60) / (1000 * 60))
  var getMin = document.querySelector("#mint")
  getMin.innerHTML = min + "<br>" + "Min"
  var sec = Math.floor(sub % (1000 * 60) / (1000))
  var getSec = document.querySelector("#sec")
  getSec.innerHTML = sec + "<br>" + "Sec"
  
}, 1000)

 