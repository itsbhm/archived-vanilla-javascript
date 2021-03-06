// JavaScript - Accessing elements & attributes using document object

// access an element using getElementById
var hElement = document.getElementById("my-heading");

//alert(hElement);

// get DOM object value
//alert(hElement.innerHTML);

// get DOM object attribute value
//alert(hElement.getAttribute("id"));

// get tag name
//alert(hElement.tagName);

// access elements using class attribute
var pElements = document.getElementsByClassName("my-paragraph"); // NodeList

//alert(pElements);

//alert(pElements[0]);

//alert(pElements[0].innerHTML);

// loop through all paragraphs
for( var i=0; i < pElements.length; i++ ) {
    
  // alert(pElements[i].innerHTML);
    
}
