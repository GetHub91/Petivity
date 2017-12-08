// Hide "add new task" form
document.getElementById("newTask").style.display = "none";

// Hide "edit task" form
document.getElementById("editTask").style.display = "none";

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    addTextElement(myNodelist[i], "span", "close", "\u00D7");
}

// Add "close" buttons
makeXsCloseable();


/* ----------     Event listeners     ---------- */

// Add a "selected" class to clicked list item and open the edit window
document.getElementById("myUL").addEventListener('click', function(ev) {
    if (ev.target.tagName === 'SPAN' && ev.target.classList != "close") {
        ev.target.classList.toggle("selected");
        document.getElementById("taskname").value = document.getElementsByClassName("selected")[0].parentNode
                                                            .getElementsByClassName("col-9 remove-padding offset-task")[0].innerText;
        document.getElementById("daysremaining").value = document.getElementsByClassName("selected")[0].parentNode
                                                                 .getElementsByClassName("col-3 remove-padding text-center")[0].innerText;
        toggleEditTask();
    }
}, false);

// Event listeners for buttons in newTask form
document.getElementById("newElement").addEventListener("click", event => {
    event.preventDefault();
    newElement();
});
document.getElementById("addButton").addEventListener("click", function() {
    toggleAddTask();
});
document.getElementById("cancelAdd").addEventListener("click", function() {
    toggleAddTask();
});

// Event listeners for buttons in editTask form
document.getElementById("editElement").addEventListener("click", event => {
    event.preventDefault();
    editElement();
});
document.getElementById("cancelEdit").addEventListener("click", function() {
    toggleEditTask();
    cancelEdit();
});

// Open the edit task window; Adds a "selected" class to list items when clicked
// document.getElementById("myUL").addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'SPAN' && ev.target.classList != "close") {
//     ev.target.classList.toggle('selected');
//     document.getElementById("taskname").value = document.getElementsByClassName("selected")[0].parentNode
//                                                         .getElementsByClassName("col-9 remove-padding offset-task")[0].innerText;
//     document.getElementById("daysremaining").value = document.getElementsByClassName("selected")[0].parentNode
//                                                              .getElementsByClassName("col-3 remove-padding text-center")[0].innerText;
//     toggleEditTask();
//   }
// }, false);


/* ----------    Functions     ---------- */

// Appends textNode to tagged element to parent node
function addTextElement(parent, tag, className, text) {
    var child = document.createElement(tag);
    var textNode = document.createTextNode(text);
    child.className = className;
    child.appendChild(textNode);
    parent.appendChild(child);
}

// Click on a close button to delete the current list item
function makeXsCloseable() {
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.parentElement.removeChild(div);
        }
    }
}

// Toggles visibility of form to add new task
function toggleAddTask() {
    var newTask = document.getElementById("newTask");
    toggleVisibility(newTask);
}

// Toggles visibility of form to edit existing task
function toggleEditTask() {
    var editTask = document.getElementById("editTask");
    toggleVisibility(editTask);
}

// Helper function for the toggleAddTask and toggleEditTask functions
function toggleVisibility(task) {
    if (task.style.display == "none") {
        task.style.display = "block";
    } else {
        task.style.display = "none";
    }
}

// Hit the cancel button when editing an task
function cancelEdit() {
    document.getElementsByClassName('selected')[0].classList.toggle("selected");
}

// Edit an item
function editElement() {
    var elem = document.getElementsByClassName("selected")[0].parentNode;
    var newDays = document.getElementById("daysremaining").value;

    var li = document.createElement("LI");
    li.className = "row no-gutter remove-padding task";

    addTextElement(li, "SPAN", "col-9 remove-padding offset-task", document.getElementById("taskname").value);
    addTextElement(li, "SPAN", "col-3 remove-padding text-center", newDays);
    addTextElement(li, "SPAN", "close", "\u00D7");

    insertTask(li, document.getElementsByTagName("LI"), newDays);
    elem.parentNode.removeChild(elem);
    makeXsCloseable();

    document.getElementById("taskname").value = "";
    document.getElementById("daysremaining").value = "";
    toggleEditTask();
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var days = document.getElementById("new_daysremaining").value;
    if (!days) days = 0;      // Add alert feature for user

    var li = document.createElement("LI");
    li.className = "row no-gutter remove-padding task";

    addTextElement(li, "SPAN", "col-9 remove-padding offset-task", document.getElementById("new_taskname").value);
    addTextElement(li, "SPAN", "col-3 remove-padding text-center", days);
    addTextElement(li, "SPAN", "close", "\u00D7");

    insertTask(li, document.getElementsByTagName("LI"), days);
    makeXsCloseable();

    document.getElementById("new_taskname").value = "";
    document.getElementById("new_daysremaining").value = "";
    toggleAddTask();
}

// Inserts task into to-do list by order of days remaining
function insertTask(task, nodeList, daysRemaining) {
    for (i = 0; i < nodeList.length; i++) {
        var c = nodeList[i].getElementsByClassName("col-3 remove-padding text-center");

        if ((c[0].innerText > daysRemaining)) {
            document.getElementById("myUL").insertBefore(task, nodeList[i]);
            break;
        } else if (i == nodeList.length-1) {
            document.getElementById("myUL").appendChild(task);
        }
    }
}

//to add animations any time an item is completed
$(".close").click(function() { 

    //for the fruit
    var child = new Image();
    var parent = document.getElementById("tempFruit");
    child.setAttribute("src", "images/mango.png");
    child.setAttribute("width", "50px");
    child.style.marginLeft = "180px";
    //child.setAttribute("float", "right");
    parent.appendChild(child);
    // console.log(parent);
    child.style.display = "block";

    //for the heart

    var heart = new Image();
    heart.setAttribute("src", "images/heart.png");
    heart.setAttribute("width", "50px");
    //child.setAttribute("float", "right");

    // console.log(parent);
    heart.style.display = "block";
    heart.style.marginLeft = "220px";
    heart.style.marginTop = "70px";

    // console.log(child); 

    //happens first
    setTimeout(function() {
        $(child).toggleClass('transform-active');
        //happens second
        setTimeout(function() {
            $(child).toggleClass('fade');
            $(heart).toggleClass('tranform-scale');
            //happens third to last
            setTimeout(function() {
                $(child).toggleClass('transform-active');
                $(child).toggleClass('fade');
                parent.removeChild(child);
                parent.appendChild(heart);
                //happens second to last
                setTimeout(function() {
                    $(heart).toggleClass('pulse');
                    // happens last
                    setTimeout(function() {
                        parent.removeChild(heart);
                    }, 5000);
                }, 2000);
            }, 1500);
        }, 2000);
    }, 500);


});


//$("selfCare").on("change", function() {
//var counter = 0;
var selfCareOn = false;
var blockOn = false;
var calOn = true;
showSpecificCal = function(blockOrCare){

    /////CHANGE TO MAKE DEFAULT CHECKED ON
    if(blockOrCare === "calend"){
        if(calOn === true){
            calOn = false;
        } else{
            calOn = true;
        }
    }
    //if calendar is unchecked show a blank calendar
    if(calOn === false){
        cal.setAttribute("src", "https://calendar.google.com/calendar/embed?src=cs.stanford.edu_n4hndha5isd8ba25h3qk9n3lr4%40group.calendar.google.com&ctz=America%2FLos_Angeles");
        return;
    }
    
    if(blockOrCare === "block"){
        if(blockOn === true){
            blockOn = false;
        } else{
            blockOn = true;
        }

    }else if(blockOrCare === "selfCare"){
        if(selfCareOn === true){
            selfCareOn = false;
        } else{
            selfCareOn = true;
        }
    }

    var cal =  document.getElementById("gooCal");

    //show both self care and blocking
    if(selfCareOn ===true && blockOn === true){
        cal.setAttribute("src", "https://calendar.google.com/calendar/embed?src=cs.stanford.edu_n4hndha5isd8ba25h3qk9n3lr4%40group.calendar.google.com&ctz=America%2FLos_Angeles");
        //show only self care
    }else if(selfCareOn ===true){
        cal.setAttribute("src", "https://calendar.google.com/calendar/embed?src=cs.stanford.edu_n4hndha5isd8ba25h3qk9n3lr4%40group.calendar.google.com&ctz=America%2FLos_Angeles");
        //show only blocking
    }else if(blockOn === true){
        cal.setAttribute("src", "https://calendar.google.com/calendar/embed?src=cs.stanford.edu_n4hndha5isd8ba25h3qk9n3lr4%40group.calendar.google.com&ctz=America%2FLos_Angeles");
    }
};
//);