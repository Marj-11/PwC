function test (listItem){
    listItem.target.classList.toggle("active")
}



function selectAll (button){
    var sectionItems = document.querySelectorAll('section #ulList1 li')
    
    if (button.target.classList.contains("active") ) {
        document.getElementById("selectAll").onclick = function (){
        document.getElementById("selectAll").innerHTML = "Select all";
        }
        
        button.target.classList.remove("active")
        sectionItems.forEach(function(listItem){
        listItem.classList.remove("active")
        })
      }
      else {
        button.target.classList.add("active")
        sectionItems.forEach(function(listItem){
        listItem.classList.add("active")
        document.getElementById("selectAll").onclick = function (){
        document.getElementById("selectAll").innerHTML = "Deselect all";
        }
        })
      }
    }

    function deselectAll (button){
        var sectionItems = document.querySelectorAll('section #ulList2 li ')
        
        if (button.target.classList.contains("active") ) {
            button.target.classList.remove("active")
            sectionItems.forEach(function(listItem){
            listItem.classList.remove("active")

            
            document.getElementById("deselectAll").disabled= false
            

            document.getElementById("deselectAll").onclick = function (){
            document.getElementById("deselectAll").innerHTML = "Select all";
            }
            })
          }
          else {
            button.target.classList.add("active")
            sectionItems.forEach(function(listItem){
            listItem.classList.add("active")
            
            document.getElementById("deselectAll").onclick = function (){
            document.getElementById("deselectAll").innerHTML = "Deselect all";
            }
            })
          }
        }

        function targetDeSelectAll (button){
            var sectionItems = document.querySelectorAll('section #ulList3 li ')

       
            if (button.target.classList.contains("active") ) {
                button.target.classList.remove("active")
                sectionItems.forEach(function(listItem){
                listItem.classList.remove("active")
                document.getElementById("targetDeselectAll").onclick = function (){
                document.getElementById("targetDeselectAll").innerHTML = "Select all";
                    }
                })
              }
              else {
                button.target.classList.add("active")
                sectionItems.forEach(function(listItem){
                listItem.classList.add("active")
                document.getElementById("targetDeselectAll").onclick = function (){
                document.getElementById("targetDeselectAll").innerHTML = "Deselect all";
                        }
                })
              }
            }
  

function moveFirst1 () {
var sectionItems = document.querySelectorAll('section #ulList1 li.active')


sectionItems.forEach(function(listItem){
    document.getElementById('ulList2').appendChild(
        listItem
        );
       
  
    })
    var ulList1Children = document.getElementById('ulList2').getElementsByTagName('li').length

    if(ulList1Children >= 1) {
        document.getElementById("selectAll").disabled= false
    } else {
        document.getElementById("selectAll").disabled= true
    }
   var ulList2Children = document.getElementById('ulList2').getElementsByTagName('li').length

    if(ulList2Children >= 1) {
        // make button active and set text to deselect all
        document.getElementById("deselectAll").disabled= false
    } else {
        document.getElementById("deselectAll").disabled= true
    }
        
}



function moveSecond1 () {
    var sectionItems = document.querySelectorAll('section #ulList2 li.active')
    
    sectionItems.forEach(function(listItem){
           document.getElementById('ulList1').appendChild(
            listItem
            );
           
        })
        
        // Input Columns - Button
        var ulList2Children = document.getElementById('ulList2').getElementsByTagName('li').length
        if(ulList2Children >= 1) {
            document.getElementById("deselectAll").disabled= false
        } else {
            document.getElementById("deselectAll").disabled= true
        }

        // All Columns - Button
        var ulList2Children = document.getElementById('ulList1').getElementsByTagName('li').length
        if(ulList2Children >= 1) {
            document.getElementById("selectAll").disabled= false
        } else {
            document.getElementById("selectAll").disabled= true
        }
    }

    function moveFirst2 () {
        var sectionItems = document.querySelectorAll('section #ulList2 li.active')
        

        sectionItems.forEach(function(listItem){
            document.getElementById('ulList3').appendChild(
                listItem
                );
          
            })
            var ulList3Children = document.getElementById('ulList3').getElementsByTagName('li').length
        if(ulList3Children >= 1) {
            document.getElementById("targetDeselectAll").disabled= false
        } else {
            document.getElementById("targetDeselectAll").disabled= true
        }

         ulList2Children = document.getElementById('ulList2').getElementsByTagName('li').length
        if(ulList2Children >= 1) {
            document.getElementById("deselectAll").disabled= false
        } else {
            document.getElementById("deselectAll").disabled= true
        }
        
        }

        function moveSecond2 () {
            var sectionItems = document.querySelectorAll('section #ulList3 li.active')
            
            sectionItems.forEach(function(listItem){
                document.getElementById('ulList2').appendChild(
                    listItem
                    );
              
                })

            var ulList3Children = document.getElementById('ulList2').getElementsByTagName('li').length
            if(ulList3Children >= 1) {
                document.getElementById("deselectAll").disabled= false
            } else {
                document.getElementById("deselectAll").disabled= true
            }
            
            var ulList3Children = document.getElementById('ulList3').getElementsByTagName('li').length
            if(ulList3Children >= 1) {
                document.getElementById("targetDeselectAll").disabled= false
            } else {
                document.getElementById("targetDeselectAll").disabled= true
            }
        }





var selectItems = document.querySelectorAll('section ul li')
    selectItems.forEach(function(listItem){
    listItem.addEventListener("click", test)
    })

var selectAllBottun = document.querySelector("#selectAll")
    selectAllBottun.addEventListener("click", selectAll)

var deselectAllBottun = document.querySelector("#deselectAll")
    deselectAllBottun.addEventListener("click", deselectAll)

var targetDeselectAllBottun = document.querySelector("#targetDeselectAll")
    targetDeselectAllBottun.addEventListener("click", targetDeSelectAll)



    var moveButtonRight1 = document.querySelector("#toTheRightButton1")
        moveButtonRight1.addEventListener("click", moveFirst1)

    var moveButtonLeft1 = document.querySelector("#toTheleftButton1")
        moveButtonLeft1.addEventListener("click", moveSecond1)
        
    var moveButtonRight2 = document.querySelector("#toTheRightButton2")
        moveButtonRight2.addEventListener("click", moveFirst2)  

    var moveButtonLeft2 = document.querySelector("#toTheleftButton2")
        moveButtonLeft2.addEventListener("click", moveSecond2)  

        document.getElementById("deselectAll").disabled= true
        document.getElementById("targetDeselectAll").disabled= true
        