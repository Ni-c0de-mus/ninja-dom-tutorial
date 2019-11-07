/* Select ( a single element )one book from the li list */

const book = document.querySelector('#book__list li:nth-child(2) .name');
console.log(book);

/* document.querySelector("#element") will return single element

document.querySelectorAll(".name") will return collection of elements */

/* Display all nodes in the HTML tree */

const all = document.querySelectorAll('html');
console.log(all);

/* Display the 'name' tags from the Li list */

const name = document.querySelector('.name');
console.log(name);

/* Display all 'name' tags */

const nameAll = document.querySelectorAll('.name');
console.log(nameAll);


const nameLi = document.querySelectorAll('#book__list li .name');
console.log(nameLi);

/* Each displays the selected Li:Nth-child from #Book__List */

const nameNth1 = document.querySelector('#book__list li:nth-child(1) .name');
console.log(nameNth1);

const navLink = document.querySelector('.nav__link');
console.log(navLink);

const navLinks = document.querySelectorAll('.nav__link');
console.log(navLinks);

const nameNth2 = document.querySelector('#book__list li:nth-child(2) .name');
console.log(nameNth2);

const nameNth3 = document.querySelector('#book__list li:nth-child(3) .name');
console.log(nameNth3);

const nameNth4 = document.querySelector('#book__list li:nth-child(4) .name');
console.log(nameNth4);

/* Creating and selecting Arrays in the DOM */

/* document.querySelectorAll

booksArray.forEach

returns a node list not a html collection.active

document.getElementsByClassName
document.getElementsByTagName 

var booksArray = document.querySelectorAll('#book__list  li .name');


both return an HTML collection

*/

var booky = document.querySelector('#book__list li .name');

var booksArray = document.querySelectorAll('#book__list li .name');

/* Array.from(booksArray).forEach(function(booksArray){
 console.log(booksArray.textContent);

}); */

/* Array.from(booksArray).forEach(function(booky) {
 console.log(booky.textContent);
}); */


/* Overwrite Text Content */

/* Array.from(booksArray).forEach(function(booky) {
 booky.textContent = 'test';
}); */


/* Append/Update - Text Content */

Array.from(booksArray).forEach(function(booky) {
 booky.textContent += '  (Book Title)';
});

/* Displays Content of HTML

const bookList = document.querySelector('#book__list');
console.log(bookList.innerHTML);
*/

/* Replace HTML content of selected

const bookList = document.querySelector('#book__list');
bookList.innerHTML = '<h2>Books and more books...</h2>' */

/* const bookList = document.querySelector('#book__list');
bookList.innerHTML = '<p>This is how you replace/ammend HTML';

const bookTitle = document.querySelector('.title');
bookTitle.textContent = 'Bumhead Books'; */

/* Node Properties */

const banner = document.querySelector('#page__banner');
console.log('#page__banner node type is:', banner.nodeType);
 
 const bookNode = document.querySelector('#book__list');
 console.log('#page__banner node type is:', book__list.nodeType);

 console.log('#page__banner name type is:', banner.nodeName);

 console.log('#page__banner has child nodes:', banner.hasChildNodes());

 /* const clonedBanner = banner.cloneNode(true);
 console.log('clonedBanner'); */

 const clonedBanner = banner.cloneNode(false);
 console.log(clonedBanner);

 const bookList = document.querySelector('#book__list');
 console.log('the parent node is:', bookList.parentNode);
 console.log('the parent element is:', bookList.parentElement.parentElement);

/* ChildNodes displays Node list */

 console.log(bookList.childNodes);

 /* Children displays HTML collection */
 console.log(bookList.children);

 console.log('book__list next sibling is:', bookList.nextSibling);

 console.log('book__list next element sibling is', bookList.nextElementSibling);


 console.log('bookList previous sibling is', bookList.previousElementSibling);

 console.log('bookList previous element is', bookList.previousElementSibling);

 bookList.previousElementSibling.querySelector('p').innerHTML += '</br>Too cool for everyone else!'

 /* Javascript Events and removing elements */

 var h2 = document.querySelector('#book__list h2');

 h2.addEventListener('click', function(e) {
  console.log(e.target);
  console.log(e);
 });

 /* Removes Item Li from DOM with EventListener */

 var btns = document.querySelectorAll('#book__list .delete');

 Array.from(btns).forEach(function(btn) {
  btn.addEventListener('click', function(e) {

   const li = e.target.parentElement;

   li.parentNode.removeChild(li);

  });
 });


/* Displays Message On Click Link preventDefault */

 const link = document.querySelector('#page__banner a');

 link.addEventListener('click', function(e){
 e.preventDefault();
 console.log('navigation to', e.target.textContent, 'was prevented');

 });