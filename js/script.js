/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/    
 const LIfullStudentlist = document.querySelector('.student-list').children;
const Profile = 'profile image'
const maxStudentsPerPage = 9;
const listStudent = document.querySelector('.student-list');
const ul = document.querySelector('.link-list')

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function CreateNewElementChild(nameOfElement, elementClassName) {
   const newElement = document.createElement(nameOfElement);
   newElement.className += elementClassName; 
   return newElement;
}

function createPageButton(stringNumber){
   const button = CreateNewElementChild('button')
     button.setAttribute('type', 'button')
     button.textContent = stringNumber
     return button;
}


function createStudent( avatar, title, firstName, lastName, email, date, age) {
   const li = CreateNewElementChild('li', 'student-item' )
      document.querySelector('.student-list').appendChild(li);
     const div = CreateNewElementChild('div', 'student-details' )
      li.appendChild(div);
      var img = CreateNewElementChild('img', 'avatar')
            img.setAttribute('src', avatar)
            img.setAttribute('alt', Profile)
        div.appendChild(img);

     let name = CreateNewElementChild('h3', 'name')
      name.textContent += `${firstName} ${lastName}`;
       img.parentNode.insertBefore(name, img.nextSibling);

      let span = CreateNewElementChild('span', 'email')
      span.textContent += email
         name.parentNode.insertBefore(span, name.nextSibling);
     const divJoin = CreateNewElementChild('div', 'joined-details')
              div.parentNode.insertBefore(divJoin, div.nextSibling);
      let spanDate = CreateNewElementChild('span', 'date')
              divJoin.parentNode.insertBefore(spanDate, divJoin.nextSibling);
        spanDate.textContent += date
        return li;
}




 
function showPage(list, page) {
       const firstIndex = parseInt((page) * 9) - 9;
       console.log(firstIndex)
      const lastIndex = (parseInt(page) * 9) - 1; 
      console.log(lastIndex) 
      let fullstudentlist;

   	for(let i = 0; i < data.length; i++) {
		 fullStudentlist = createStudent(data[i].picture.large, data[i].name.title, data[i].name.first, data[i].name.last, data[i].email, data[i].registered.date, data[i].registered.age)
      console.log(fullStudentlist.length);
      LIfullStudentlist[i].style.display = 'none';
	}
    for (let i = firstIndex; i <= lastIndex; i++) {
      LIfullStudentlist[i].style.display = '';
      }
   
  
     for(let i = 0; i <  list.length/maxStudentsPerPage; i++){
      console.log(i)
       const li = CreateNewElementChild('li', `button${i}`)
        document.querySelector('.link-list').appendChild(li);
       const button = createPageButton(`${i + 1}`)
       document.querySelector(`.button${i}`).appendChild(button);
     }

    const button = document.querySelector(`.button${page - 1}`).children[0]
     button.setAttribute('class', 'active')
}
showPage(data, 1) 


function runPage(page) {
         const firstIndex = parseInt(page) * 9 - 9;
      const lastIndex = (parseInt(page) * 9) - 1;
    const remove = document.querySelector('.active')
    remove.setAttribute('class', 'undifined')
    const button = document.querySelector(`.button${page - 1}`).children[0]
     button.setAttribute('class', 'active')
   	for(let i = 0; i < data.length; i++) {
       LIfullStudentlist[i].style.display = 'none'
      }
     for (i = firstIndex; i <= lastIndex ; i++){
     LIfullStudentlist[i].style.display = ''
     }

}


ul.addEventListener('click', (e) => {
 const button = e.target;
  if (button.tagName === 'BUTTON' && parseInt(button.textContent) <= 2000 ) {
      runPage(parseInt(button.textContent))
         console.log(button.textContent);
   } else {
      console.log('error')
   }
});
