//--------------Hiking-----------------
function hikingFunction () {
    document.getElementById("hikingmyDropdown").classList.toggle("hikingshow");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.hikingdropbtn')) {
      let dropdowns = document.getElementsByClassName("hikingdropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('hikingshow')) {
          openDropdown.classList.remove('hikingshow');
        }
      }
    }
  }


//-------------Running------------------
function runningFunction() {
    document.getElementById("runningmyDropdown").classList.toggle("runningshow");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.runningdropbtn')) {
      let dropdowns = document.getElementsByClassName("runningdropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('runningshow')) {
          openDropdown.classList.remove('runningshow');
        }
      }
    }
  }

//-------------Camping------------------
function campFunction() {
    document.getElementById("campmyDropdown").classList.toggle("campshow");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.campdropbtn')) {
      let dropdowns = document.getElementsByClassName("campdropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('campshow')) {
          openDropdown.classList.remove('campshow');
        }
      }
    }
  }

//------------Lakes-------------------
function lakesFunction() {
    document.getElementById("lakesmyDropdown").classList.toggle("lakesshow");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.lakesdropbtn')) {
      let dropdowns = document.getElementsByClassName("lakesdropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('lakesshow')) {
          openDropdown.classList.remove('lakesshow');
        }
      }
    }
  }

// ---------------------------Hiking links-------------------------------  

const getTrails = () => {
  axios.get('http://localhost:5513/trails').then((res) => {
    const trails = res.data[0];
    const hikingDropDown = document.getElementById("hikingmyDropdown")
    for (let i = 0; i < trails.length; i++) {
      const trail = trails[i]
      const newImage = document.createElement('img');
      const newTrailLink = document.createElement('a')
      newTrailLink.href = trail.link;
      newTrailLink.innerHTML = trail.name;
      newImage.src = trail.image;
      hikingDropDown.appendChild(newImage);
      hikingDropDown.appendChild(newTrailLink);
    };
  }).catch()

}
getTrails()

// --------------------------Running Links------------------------------------

const getRunning = () => {
  axios.get('http://localhost:5513/running').then((res) => {
    const runningEvents = res.data[0];
    const runningDropDown = document.getElementById("runningmyDropdown")
    for (let i = 0; i < runningEvents.length; i++) {
      const running = runningEvents[i]
      const newImage = document.createElement('img');
      const newRunningLink = document.createElement('a')
      newRunningLink.href = running.link;
      newRunningLink.innerHTML = running.name;
      newImage.src = running.image;
      runningDropDown.appendChild(newImage);
      runningDropDown.appendChild(newRunningLink);
    };
  }).catch()

}
getRunning()


//-------------------------Camping Links-------------------------------------

const getCamping = () => {
  axios.get('http://localhost:5513/camping').then((res) => {
    const campingLocations = res.data[0];
    const campingDropDown = document.getElementById("campmyDropdown")
    for (let i = 0; i < campingLocations.length; i++) {
      const camping = campingLocations[i]
      const newImage = document.createElement('img');
      const newCampingLink = document.createElement('a')
      newCampingLink.href = camping.link;
      newCampingLink.innerHTML = camping.name;
      newImage.src = camping.image;
      campingDropDown.appendChild(newImage);
      campingDropDown.appendChild(newCampingLink);
    };
  }).catch()

}
getCamping()


//-------------------------Lakes Links---------------------------------------

const getLakes = () => {
  axios.get('http://localhost:5513/lakes').then((res) => {
    const lakeLocations = res.data[0];
    const lakesDropDown = document.getElementById("lakesmyDropdown")
    for (let i = 0; i < lakeLocations.length; i++) {
      const lakes = lakeLocations[i]
      const newImage = document.createElement('img');
      const newLakesLink = document.createElement('a')
      newLakesLink.href = lakes.link;
      newLakesLink.innerHTML = lakes.name;
      newImage.src = lakes.image;
      lakesDropDown.appendChild(newImage);
      lakesDropDown.appendChild(newLakesLink);
    };
  }).catch()

}
getLakes()


//------------------------Logout--------------------------------


const logout = () => {
  window.location.href = "http://127.0.0.1:5500/capstone/frontend/login.html"
}
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);

//----------------------Slide Show-----------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

setInterval(() => {
  plusSlides(1)
}, 7000)

//---------------------------Wish List------------------------

let incompleteTaskHolder = document.getElementById("incomplete-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

let createNewTaskElement = function(wishListItem) {
	let listItem = document.createElement("li");
  listItem.name = wishListItem.name;
  listItem['data-completed'] = wishListItem.completed;
  listItem.id = wishListItem.id;
	let checkBox = document.createElement("input");
	let label = document.createElement("label");
	let editInput = document.createElement("input");
	let editButton = document.createElement("button");
	let deleteButton = document.createElement("button");
	label.innerText = wishListItem.name;
	checkBox.type = "checkbox";
  checkBox.checked = wishListItem.completed;
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

let addTask = () => {
  let taskInput = document.getElementById("new-task");
  let taskName = taskInput.value;
  axios.post("http://localhost:5513/wishList", {
    name: taskName,
    completed: false
  })
    .then(res => {
      const newWishListItem = res.data[0];
      let listItem = createNewTaskElement(newWishListItem);
      incompleteTaskHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
      taskInput.value = "";
    })
    .catch(err => console.log('error adding task', err))
}

let editTask = (event) => {
  let listItem = event.target.parentNode;
  let editInput = listItem.querySelector('input[type=text]');
  let label = listItem.querySelector("label");
  let containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    axios.put("http://localhost:5513/wishList", {
      name: editInput.value,
      completed: listItem.getAttribute('data-completed'),
      id: listItem.id
    }).then(() => {
      label.innerText = editInput.value;
    }).catch(err => {
      console.log("Error")
    })
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

let deleteTask = (event) => {
  let listItem = event.target.parentNode;
  axios.delete(`http://localhost:5513/wishList/${listItem.id}`)
    .then(() => {
      let ul = listItem.parentNode;
      ul.removeChild(listItem);
    })
    .catch(err => {
      console.log('Error')
    })
}

let taskCompleted = (event) => {
	let listItem = event.target.parentNode;
  axios.put("http://localhost:5513/wishList", {
    name: listItem.name,
    completed: true,
    id: listItem.id
  }).then(() => {
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  }).catch(err => {
    console.log('Error')
  })
}

let taskIncomplete = (event) => {
  let listItem = event.target.parentNode;
  axios.put("http://localhost:5513/wishList", {
    name: listItem.name,
    completed: false,
    id: listItem.id
  }).then(() => {
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  }).catch(err => {
    console.log('Error')
  })
}

let addButton = document.getElementById("add-favorite-btn");
addButton.addEventListener("click", addTask);

let bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

axios.get("http://localhost:5513/wishList").then((res) => {
  const wishListItems = res.data[0];
  for (let i = 0; i < wishListItems.length; i++) {
    const wishListItem = wishListItems[i];
    if (wishListItem.completed) {
      const listItem = createNewTaskElement(wishListItem)
      completedTasksHolder.appendChild(listItem)
      bindTaskEvents(listItem, taskIncomplete);
    } else {
      const listItem = createNewTaskElement(wishListItem)
      incompleteTaskHolder.appendChild(listItem)
      bindTaskEvents(listItem, taskCompleted)
    }
  }
}).catch(err => {
  console.log('error');
})

for (let i = 0; i < incompleteTaskHolder.children.length; i++){
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (let i = 0; i < completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}