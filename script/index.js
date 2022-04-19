// navigation sticky 

window.onscroll = () => {
  const nav = document.querySelector('#weximHeader');
  if(this.scrollY <= 100) nav.className = 'header'; else nav.className = 'nav-scroll';
  const myscroll = document.querySelector('#topScroll');
  /* if(this.scrollY <= 500) myscroll.style.display ="none"; else myscroll.style.display ="block"; */
  if(this.scrollY <= 500) myscroll.className = 'C-top'; else myscroll.className = 'D-top';
  };

//top scroll

// window.onscroll = () => {

// };

//   sidemenu

function openNav() {
     /* document.getElementById("mysidemenu").style.right = "0px";
    document.getElementById("mysidemenu").style.width = "50%"; */
   
    const sidemenu =  document.querySelector('#mysidemenu');
    sidemenu.className = 'side-nav-open';
    const bgoverlay = document.querySelector("#navBg");
    bgoverlay.className = 'start-bgoverlay';
   /*  document.getElementsByClassName("bg-overlay")[0].style.display = "block"; */
  }
  
  function closeNav() {
    // document.getElementById("mysidemenu").style.display = "none";
   /*  document.getElementById("mysidemenu").style.width = "0";
    document.getElementById("mysidemenu").style.right = "-70px"; */
    const sidemenu =  document.querySelector('#mysidemenu');
    sidemenu.className = 'side-nav-close';
    const bgoverlay = document.querySelector("#navBg");
    bgoverlay.className = 'end-bgoverlay';
   /*  document.getElementsByClassName("bg-overlay")[0].style.display = "none"; */

  }
function myScrollTop() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  //  const myscroll = document.getElementById('#topScroll').scrollTop = 0;
   //document.body.scrollTo = 0;

  }
  



  //geolocation map 

/*   function myMap(e) {
    // e.preventDefault();  
    var mapOptions = {  
        center: new google.maps.LatLng(23.033863, 72.585022),  
        zoom: 10,  
        mapTypeId: google.maps.MapTypeId.HYBRID  
    }  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);  
    }   */


    // new map

    let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}