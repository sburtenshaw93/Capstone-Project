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




//-------------------------Camping Links-------------------------------------




//-------------------------Lakes Links---------------------------------------