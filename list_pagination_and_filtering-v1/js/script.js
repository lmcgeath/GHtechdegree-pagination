/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const listItem = document.getElementsByClassName('student-item cf');
const pageItems =  10;
/***
Takes a dynamic list, displays 10 items per page and hides the rest.
***/
const showPage = (list, page) => {
  let startIndex = (page * pageItems) - pageItems
  let endIndex = (page * pageItems) - 1;
    for (let i = 0; i < list.length; i+=1){
    if (i >= startIndex && i <= endIndex ){
        list[i].style.display = '';
      }
        else {
         list[i].style.display = 'none';
      }
  }};

/***
  Creates a hierarchy of html elements,
  assigns their classes, text content and attributes,
  appends them to the page and applies click behavior.
***/
const appendPageLinks = (list) => {
  /*calculates the number of pages needed based on the items in
  the given list.*/
  const pages = Math.ceil((listItem.length/pageItems));
  //creates and appends html elements.
  const pageDiv = document.querySelector('.page');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  const pageLi = document.createElement('li');
  const a = document.createElement('a')
  div.className = 'pagination';
  pageDiv.appendChild(div);
  div.appendChild(ul);

/*Loops through the list to create the appropriate number of
list and a elements, assigns their content and appends them.*/
  for (let i=1;i<=pages; i+=1){
    const a = document.createElement('a')
    const pageLi = document.createElement('li');
    a.setAttribute('href','#');
    a.textContent = i;
    pageLi.appendChild(a);
    ul.appendChild(pageLi);
//Sets the first page on initial load to active.
const firstA = document.querySelector('a')
firstA.className = 'active';

/*Creates a click event to assign the
active class to only the displaying page.*/
ul.addEventListener('click', (e) => {
  for (let i = 0; i<pages; i+=1){
    a.className = '';
  }
    firstA.classList.remove('active');
    e.target.className = 'active';
    a.classList.remove('active');
    const pageNum = e.target.textContent;
    showPage(listItem, pageNum)
});


  }};
//calls both functions to display page 1 on intial load.
showPage(listItem, 1);
appendPageLinks(listItem);
