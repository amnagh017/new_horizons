window.onload = function(){
    //Get the MODAL
var modal = document.getElementById('myModal');

//GET THE IMAGE AND INSERT IT INSIDE THE MODAL - USE ITS "ALT" TEXT AS A CAPTION
var img = document.getElementsByClassName('photos');
console.log(img);
var modalImg = document.getElementById('img01');
var captionText  = document.getElementById('caption');
//ADDING THE CLICK ACTION TO OUR IMAGES

// img.onclick = function(){
//     console.log(this);
//     modal.style.display="block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

}

function imgModal(event){
    console.log(event);
    var modal = document.getElementById('myModal');
    //GET THE IMAGE AND INSERT IT INSIDE THE MODAL - USE ITS "ALT" TEXT AS A CAPTION
    // var img = document.getElementsByClassName('photos');
    // console.log(img);
    var modalImg = document.getElementById('img01');
    var captionText  = document.getElementById('caption');
    modal.style.display="block";
    modalImg.src = event.src;
    captionText.innerHTML = event.alt;

    //GET THE <SPAN> ELEMENT THAT CLOSES THE MODAL
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on <span> (x), close the modal

    span.onclick = function(){
        modal.style.display = "none";
    }
}