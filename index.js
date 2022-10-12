const reviews = [
    {
        id:1,
        name: "Covin Essuman",
        job: "Graphic Designer",
        img:
        "first.jpg" ,
        text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat reprehenderit eum velit aperiam, modi ex. Soluta culpa iste incidunt quam! First"
    },
    {
        id:2,
        name: "Marthy Wilson",
        job: "Web developer",
        img:
        "second.jpg" ,
        text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat reprehenderit eum velit aperiam, modi ex. Soluta culpa iste incidunt quam! Second"
    },
    {
        id:3,
        name: "Lisa Willies",
        job: "Intern",
        img:
        "third.jpg" ,
        text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat reprehenderit eum velit aperiam, modi ex. Soluta culpa iste incidunt quam! Third"
    },
    {
        id:4,
        name: "Collins Bills",
        job: "Project Manager",
        img:
        "fourth.jpg" ,
        text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat reprehenderit eum velit aperiam, modi ex. Soluta culpa iste incidunt quam! Hello "
    }
]
// select items
const img = document.getElementById('person-img')
const author = document.getElementById('Author')
const job = document.querySelector('.job')
const info  = document.getElementById('info')

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const randomBtn = document.querySelector('#random')

// set starting item
let currentItem =0;
//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})
// show person 
function showPerson(){
    const item = reviews[currentItem]
    img.src =item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
//Next Button
nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem>reviews.length -1){
        currentItem=0;
    }
    showPerson()
})
//prev button
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem= reviews.length -1
    }
    showPerson()
})
//random
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log('random clicked')
    showPerson()
})
