var navToggle = document.querySelector('#main-nav-toggle') //searching for an object that doesn't exist does not throw an error. Trying to use the object, will throw an error however

var navList = document.querySelector('#main-nav-list')

if (navToggle && navList) { //executes if navToggle and navList return a value i.e. exist in the document. Always check to see if an element exists before writing those elements
  navToggle.addEventListener('click', function(event) {
    console.log(event);
    //console.log(arguments); //the argument variable is a given variable whose value is all of the arguements passed into the function
    if (navToggle.classList.contains('close')){ //checks to see if the element has the class of close on it
      navToggle.classList.remove('close');
      navList.classList.remove('open');

    } else {
      navToggle.classList.add('close');
      navList.classList.add('open');
    }

    //Alternatively instead of the above if statement, we could use:
    // navToggle.classList.toggle('close');
    // navList.classList.toggle('open');
  });

}
