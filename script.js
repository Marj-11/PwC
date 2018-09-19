/**
 * Clicking on an item toggles the class active (toggle = add/remove the class)
 * active class = background-color red
 * 
 * @param {*} listItem - MouseEvent Object which contains target to select the actual clicked list item
 */
function testfunc (listItem) {
    listItem.target.classList.toggle("active")
}

/**
 * When clicking on "Select all" Button every List Item will be set to active
 * 
 * @param {*} button 
 */
function selectall (button){
    // get all list Items into the variable sectionListItem
    var sectionListItems = document.querySelectorAll ('section ul li')

    if (button.target.classList.contains("active") ) {
        // DOES contain active
        button.target.classList.remove("active")
   
        sectionListItems.forEach(function(listItem) {
            // for each listItem remove the class active
            listItem.classList.remove("active")
        })
             
    } 
    else  {
        button.target.classList.add("active")
        

        // get through all of the sectionListItems
        sectionListItems.forEach(function(listItem) {
            // for each listItem add the class active
            listItem.classList.add("active")
        })
    }
}

// get all list Items into the variable sectionListItem
var sectionListItem = document.querySelectorAll ('section ul li')

// get through all of the sectionListItems
sectionListItem.forEach(function(listItem) {
    // for each listItem attach an mouse left click event
    // click event executes testfunc
    listItem.addEventListener("click", testfunc)
})


var selectAllButton = document.querySelector('#selectAll')
selectAllButton.addEventListener("click",selectall)

///////////////////////////////////////////////////////////





