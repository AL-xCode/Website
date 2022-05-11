//alert( "Welcome to my website");

//click on projects or certifications and bring up information
///let portfolio = document.getElementsByClassName('certifications');

// Click on Quote and Rose
///let quoteClick = document.getElementById('quote');

// Click on submit and set submittal 
///let submit = document.getElementById('submit');



// Click on button and turn to light blue
let Clickbutton = document.querySelector('.btn-user');

function ButtonBlue(){
Clickbutton.style.backgroundColor = 'lightblue';
}

Clickbutton.onclick = ButtonBlue;

// Contact me, information displays and closes with close button
let display = document.getElementById('contact-open');
let hide = document.getElementById('contact-close');
let information = document.getElementById('contact-information');

let open = function() {
  information.style.display = 'block';
  hide.style.display = 'block';
};

let close = function() {
  information.style.display = 'none';
  hide.style.display = 'none';
};

display.addEventListener('click', open);
hide.addEventListener('click', close);



//(hide certifications until clicked button)
let loadcert = document.getElementById('loadbutton');
let certifications = document.getElementById('displayCertifications');

let openCert = function() {
  certifications.style.display = 'block';
};

loadcert.addEventListener('click', openCert);

//link error
function error() {
    alert("Link is under Construction. Check back soon.")
}

//keyboard
function heightGrow(){
    image.style.height = '400px';
  }
  
  function heightReduce(){
    image.style.height = '200px';
  }
  
  document.addEventListener('keydown', heightGrow);
  document.addEventListener('keyup', heightReduce);

// mouseover and mouse out
function changeColor(){
    quote.style.color = 'lightblue';
  }
function resetColor(){
    quote.style.color = 'black';
}
  
  quote.addEventListener('mouseover', changeColor);
  quote.addEventListener('mouseout', resetColor);

// submit
function formSubmit(event) {
    log.textContent = "Form has been Submitted. Thank you!";
  }
  form.addEventListener('submit', formSubmit);

//animation
const animation = document.querySelector('.animationBounce')
const animationLog = document.querySelector('.animationLog');
const final = document.querySelector('.final');
let iterationCount = 0;
let finalcount = 0;

animation.addEventListener('animationiteration', () => {
    iterationCount++;
    finalcount = iterationCount + 1;
    animationLog.textContent = `${animationLog.textContent} 'animation iterations: ${iterationCount}'`; 
    final.textContent = `'Final Iteration: ${finalcount}'`;
  });