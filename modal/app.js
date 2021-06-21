// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// toggle clas .open-modal
//selectors
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

//console.log(modalBtn);
//console.log(modalOverlay);
//console.log(closeBtn);

//event listeners
modalBtn.addEventListener('click', function (){
    //console.log("clicked");
    modalOverlay.classList.add('open-modal');
    
})

closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
    
})