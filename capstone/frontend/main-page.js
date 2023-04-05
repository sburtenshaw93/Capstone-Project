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
