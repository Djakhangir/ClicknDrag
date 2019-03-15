//Over here in order to make the click and drag work on scroll we have to work with rotateY/X to let the JS know where we selected
// and from which position scroll left or right the div on amount of px we scroll we say to move the div to 
//that amount of px; So basically its the combination of the mouse and click events.

// selecting the items div
const slider = document.querySelector('.items');
//the flag variable to indicate whether we clicked or not having boolean value;
let isDown = false;
let startX; // we need to let the app know where the initial click done that is why we create startX variable
let scrollLeft; // this variable helps us to know where the initial click done to come back 
//we do not assign the values to them since we do it through our events;


slider.addEventListener('mousedown', (e)=>{ //we pass e into fn and work with e.pageX that shows where we clicked on the items
isDown = true;
slider.classList.add('active'); //when clicked, add class active;
startX = e.pageX - slider.offsetLeft; //offset'll help us to record value only within the div instead of counting entire page
scrollLeft = slider.scrollLeft; // Helps us to record the initial click value to bring us back when we scroll Left

});

slider.addEventListener('mouseleave', ()=>{
    isDown = false;
    slider.classList.remove('active'); // when mouse left remove class added
});

slider.addEventListener('mouseup', ()=>{
    slider.classList.remove('active');  // when mouse left remove class added
    isDown = false;
});
        
slider.addEventListener('mousemove', (e)=>{
    if (!isDown) return //stop the fn from running if not clicked;
    e.preventDefault(); // helps us to stop selecting the text inside of the items(divs) etc. which is by default;
    const x = e.pageX - slider.offsetLeft; //here we recalculate every time when we move our mouse. similar to the startX
    //the only diff. is that startX records the click point as a value and this recalculates it every time we move;
    const walk = (x - startX) * 3; //walk will tell us how far we deviated from the initial space clicked; 
    // *3 means everytime we move it'll move the slider for 3px;
    slider.scrollLeft = scrollLeft - walk;// it'll help us to move beautifully without jumps;
});