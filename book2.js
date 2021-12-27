let form = document.querySelector('#bookdata');
let title = document.querySelector('#title');
let pgnumber = document.querySelector('#pgnumber');
let btn = document.querySelector('#btn');
let table= document.querySelector('#bookTotal')
let btn2 = document.querySelector('#btn2')
let hiddenIndex = document.querySelector('#hiddenIndex')
let bookArray ;



function read(arr){
    arr.forEach((v,i)=>{table.innerHTML += `<tbody><tr><td>${v.title}</td><td>${v.pgnumber}</td><td>${v.complete}</td> <td><a href="#" onclick="edit(${i})" >Edit</a></td><td><a href="" onclick="del(${i})">Delete</a></td></tr></tbody>`})
    }

    function del(i){
        let arr = JSON.parse(localStorage.getItem('book'))
        arr.splice(i, 1)
        localStorage.setItem('book', JSON.stringify(arr))
        read()
    
    }
btn2.addEventListener('click', (e)=>{
    
    let arr = JSON.parse(localStorage.getItem('book'))
    arr[hiddenIndex.value].title = title.value
    arr[hiddenIndex.value].pgnumber = pgnumber.value
    localStorage.setItem('book', JSON.stringify(arr))
    btn2.style.display ="none"
    btn.style.display = "block"
    location.reload()
    read()

})
function edit(i){
    hiddenIndex.value = i
        let arr = JSON.parse(localStorage.getItem('book'))
        let word = arr[i]
        title.value = word.title
        pgnumber.value = word.pgnumber
        btn.style.display = "none"
        btn2.style.display = "block"
        
        //localStorage.setItem('book', JSON.stringify(arr))
        //read()
    
    
    
}
//READ DATA FROM LOCAL STORAGE
document.addEventListener('DOMContentLoaded', ()=>{
    const userData= JSON.parse(localStorage.getItem('book'))
    read(userData)
  
})
// STORE DATA ON LOCAL STORAGE ON SUBMIT
 btn.addEventListener('click', (e)=>{
    
if (localStorage.getItem('book')==null){
    bookArray = []
}
else{
    bookArray = JSON.parse(localStorage.getItem('book'))
}
creatBook()
 localStorage.setItem('book', JSON.stringify(bookArray));
})
// CREATE THE BOOK OBJECT
 function creatBook(){
    let bookObj = {}
    
    bookObj.title = title.value
    bookObj.pgnumber = pgnumber.value
    bookObj.complete = false
    bookArray.push(bookObj)
    }

    