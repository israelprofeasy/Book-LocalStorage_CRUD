let form = document.querySelector('#bookdata');
let title = document.querySelector('#title');
let pgnumber = document.querySelector('#pgnumber');
let btn = document.querySelector('#btn');
let table= document.querySelector('#bookTotal')
let bookArray = [];
// let bookObj = {}

function creatBook(){
let bookObj = {}
bookObj.title = title.value
bookObj.pgnumber = pgnumber.value
bookObj.complete = false
bookArray.push(bookObj)
}

function read(){
table.innerHTML += `<tbody><tr><td>${bookArray[bookArray.length - 1].title}</td><td>${bookArray[bookArray.length - 1].pgnumber}</td><td>${bookArray[bookArray.length - 1].complete}</td></tr></tbody>`
}
// CREATE AND READ WITH DOM
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    creatBook()
     read()
    console.log(bookArray)
    
})










