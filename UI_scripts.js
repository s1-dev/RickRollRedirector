// Script for displaying current configured URLs
window.addEventListener("load", function(){
  var tbl = document.getElementById('table')
  chrome.storage.local.get(["URLs"], function(result) {
    var temp = result.URLs
    console.log(temp)
    for(i = 0; i < 5; i++){
      var r = tbl.insertRow()
      var cell = r.insertCell()
      if(temp === undefined || temp.length != 5){
        cell.innerHTML = "URL: N/A"
      }else{
        cell.innerHTML = "URL: " + temp[i]
      }
    }
  })
})

// Script for when default button is clicked
const d_element = document.getElementById('default_btn')
d_element.addEventListener("click", () => {
    setDefault()
    function setDefault(){
        const arr = ["https://www.google.com/", "https://www.bing.com/", "https://www.minecraft.net/en-us", "https://downloadmoreram.com/", "https://www.whitehouse.gov/"]
    
        var tbl = document.getElementById('table')
        while(tbl.hasChildNodes()){
          tbl.removeChild(tbl.firstChild)
        }
        chrome.storage.local.set({"URLs": arr})
        chrome.storage.local.get(["URLs"], function(result) {
          console.log(result)
          var temp = result.URLs
          if(temp === undefined){
            alert("Error getting")
            return
          }
          for(i = 0; i < 5; i++){
            var r = tbl.insertRow()
            var cell = r.insertCell()
            cell.innerHTML = "URL: " + temp[i]
          }
        })
    }
})

// Script for when user desires to delete the current data stored locally
const del_element = document.getElementById('del_btn')
del_element.addEventListener("click", () => {
  delEntries()
  function delEntries(){
    var tbl = document.getElementById('table')
    while(tbl.hasChildNodes()){
      tbl.removeChild(tbl.firstChild)
    }
    chrome.storage.local.clear()
    var tbl = document.getElementById('table')
    for(i = 0; i < 5; i++){
      var r = tbl.insertRow()
      var cell = r.insertCell()
      cell.innerHTML = "URL: N/A"
    }
  }
})

//Script for creating tab to paypal
const support_element = document.getElementById('support')
support_element.addEventListener("click", () => {
  paypal()
  function paypal(){
    console.log("working")
    chrome.tabs.create({
      url: "https://paypal.me/s1development?country.x=US&locale.x=en_US"
    })
  }
})