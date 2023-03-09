// Sets user inputs to local storage
const s_element = document.getElementById('set_btn')
s_element.addEventListener("click", () => {
    setCustom()
    function setCustom(){
        var tArr = []
        for(i = 0; i < 5; i++){
            var temp = "URL" + i.toString()
            var check = ""
            try{
                check = document.getElementById(temp).value
            }catch(err){
                continue
            }
            if(check == ""){
                console.log("nc hit")
                tArr.push("nc")
                continue
            }
            console.log("this hit")
            tArr.push(check)
        }
        chrome.storage.local.get(["URLs"], function(result) {
            var temp = result.URLs
            var change = []
            if(temp != undefined){
                change = temp
                for(i = 0; i < 5; i++){
                    if(tArr[i] != 'nc'){
                        change[i] = tArr[i]
                    }
                    else if(tArr[i] == 'nc' && change[i] != (undefined || "")){
                    }
                    else{
                        change[i] = "N/A"
                    }
                }
                chrome.storage.local.set({["URLs"]: change})
            }
            else{
                for(i = 0; i < 5; i++){
                    if(tArr[i] != 'nc'){
                        change.push(tArr[i])
                    }
                    else{
                        change.push("N/A")
                    }
                }
                chrome.storage.local.set({["URLs"]: change})
            }
        })
        var setM = document.getElementById('set_msg')
        setM.innerHTML = "Entries have been set"
    }
})

const delete_button = document.getElementById('del_btn')
delete_button.addEventListener("click", () => {
    removeAllEntries()
    function removeAllEntries(){
        for(i = 0; i < 5; i++){
            var temp = "URL" + i.toString()
            try{
                document.getElementById(temp).value = ""
            }catch(err){
                continue
            }
        }
        document.getElementById('set_msg').innerHTML = ""
    }
})