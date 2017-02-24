//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


menuElement = document.getElementsByClassName("name");
//console.log(menuElement)

for(var i = 0; i<menuElement.length; i++){
	menuElement[i].addEventListener("click", showMenu);
}


function showMenu(){
 var pic = this.querySelectorAll(".menu")[0];
  console.log("clicky")
  if(pic.style.display === "none"){
    pic.style.display = "block";
  }else{
    pic.style.display = "none";
  }
}
