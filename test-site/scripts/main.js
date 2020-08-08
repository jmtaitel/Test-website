let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.png') {
      myImage.setAttribute('src','images/test-logo-2.png');
    } else {
      myImage.setAttribute('src','images/test-image.png');
    }
}
let myVariable = document.querySelector('h1');
alert('hello!');
document.querySelector('html').onclick = function() {
    
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
        else {
            localStorage.setItem('name', myName);
            myHeading.innerHTML = 'Mozilla is cool,' + myName;
        }
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;

}
myButton.onclick = function() {
    setUserName();
}