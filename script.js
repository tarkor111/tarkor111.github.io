console.log ("you can see, Js is linked.");

function dropdown () {
 
  var height = document.getElementById('info');
  var dropdown = document.getElementById('dropdown');
  
  if (dropdown.style.color === "gray") {
    info.style.display = "none";
    dropdown.style.color = "black";
  } else {
    
    dropdown.style.color = "gray";
    info.style.display = "block";
  }
}
function home () {
    var height = document.getElementById('welcome');
    var dropdown = document.getElementById('homebutton');
  
  if (dropdown.style.color === "gray") {
    welcome.style.display = "none";
    homebutton.style.color = "black";
  } else {
    
    homebutton.style.color = "gray";
    welcome.style.display = "block";
  }
}
function about () {
  document.getElementById('about');
  document.getElementById('aboutbutton');
  if (aboutbutton.style.color === "gray") {
    about.style.display = "none";
    aboutbutton.style.color = "black";
  } else {
    
    aboutbutton.style.color = "gray";
    about.style.display = "block";
  }
}

function wallpaper () {
    
    var image1 = "url(/images/neonwall.png)";
    var image2 = "url(/images/gradientdisplay.png)";
    var image3 = "url(/images/trianglify.jpg)";
    var image4 = "url('/images/neon_cube.png')";
    var image5 = "url('https://cdna.artstation.com/p/assets/images/images/048/734/668/medium/taras-k-nuclear-submarine-improved.jpg?1650811235')";
    var image6 = "url('https://cdna.artstation.com/p/assets/images/images/040/643/348/medium/taras-k-procedural-wood-material-preview.jpg?1629462691')";
    var image7 = "url('https://cdnb.artstation.com/p/assets/images/images/040/643/359/large/taras-k-r.jpg?1629462704')";
    var image8 = "url(/images/PlexusNeo2.png)";
    var image9 = "url(/images/gradientdisplay3.png)";
    var image10 = "url(/images/gradientdisplay4.png)";
    var array1 = new Array(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10);
    var randomItem = array1[Math.floor(Math.random()*array1.length)];
    document.getElementById('body').style.backgroundImage = randomItem;
}
function blackpage () {
    if (document.getElementById('body').style.backgroundImage !== "none") {
        document.getElementById('body').style.backgroundImage = "none";
        document.getElementById('body').style.backgroundColor = "darkgray";
        document.getElementById('bgremove').innerHTML = "Démasquer le fond d'écran";
    }
    else {
        document.getElementById('body').style.backgroundImage = "url('/images/gradientdisplay.png')";
        document.getElementById('bgremove').innerHTML = "Masquer le fond d'écran";
    }
}

function collapse () {
    document.getElementById("navbar").style.backgroundImage = "none" ;
    document.getElementById("navbar").style.backgroundColor = "rbga('10,10,10,02')";
   
}
function scale () {
    
}s
