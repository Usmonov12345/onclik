// let videoItem = document.querySelector("#videoItem")
let videoList = document.querySelector("#videoList")
let videopl = document.querySelector("#videopl")
let izohBtn = document.querySelector("#izohBtn")
let izohInput = document.querySelector("#izohInput")
let izohText = document.querySelector("#izohText")
let videoSection =  document.querySelector(".videoection")
let modalClose =  document.querySelector(".modal-close")
let eyeIcons = document.querySelectorAll("#eyeIcon")
let change = {
  inscomplate: false,
}
// console.log(modalClose);

izohBtn.addEventListener('click', () => {
    izohText.innerHTML +=  izohInput.value + " "
    })

    modalClose.addEventListener( 'click', () => {
        izohInput.value = " "
    })
let vidArr = [ 
    {   
       id: 1 ,
       videoUrl: "https://www.youtube.com/embed/0oqPIlIVKVY",
       title: "YouTube video",
       text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus molestiae blanditiis voluptatem quod, corporis atque saepe incidunt officiis fugit."
    },
    {   
        id: 2,
        videoUrl: "https://www.youtube.com/embed/0oqPIlIVKVY",
        title: "YouTube video",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus molestiae blanditiis voluptatem quod, corporis atque saepe incidunt officiis fugit."
     },
     {   
        id: 3,
        videoUrl: "https://www.youtube.com/embed/0oqPIlIVKVY",
        title: "YouTube video",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus molestiae blanditiis voluptatem quod, corporis atque saepe incidunt officiis fugit."
     },
     {   
        id: 4,
        videoUrl: "https://www.youtube.com/embed/0oqPIlIVKVY",
        title: "YouTube video",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus molestiae blanditiis voluptatem quod, corporis atque saepe incidunt officiis fugit."
     },
]
let newArr;
function addVideo(){
    let result = ""
    for (let i = 0; i <vidArr.length; i++) {
        result +=  `
        <li class="video__item" id="videoItem">
        <iframe src="${vidArr[i].videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen  class="video__item__videoO" id="videoO" ></iframe>
        <h2 class="video__item__title">
            ${vidArr[i].title}
            ${vidArr[i].id}
        </h2>
        <p class="video__item__text">
        ${vidArr[i].text}
        </p>
        <div class="video__item__content">
        <button type="button" class="js-modal" data-modal="#modal_1">
        <i class="fa fa-comment-dots iconComment"></i>
        </button>

        <i class="fa-sharp fa-solid fa-expand  eyeIcon" id="eyeIcon"></i>
        </div>
        <i class="fa-solid fa-xmark iconX" id="iconX"></i>
        <div class="coment" id="comentCard">
        <h3 class="coment__title">Izoh qoldiring!!!</h3>
        <hr>
        <p class="coment__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus temporibus architecto, officiis assumenda magnam atque recusandae explicabo magni doloremque. Facilis omnis, inventore amet magni odit incidunt ipsam iure dolorum.</p>
        <hr>
        <div class="coment__carf">
            <input type="text" name="coment" id="comentInput" placeholder="izoh qoldiring!!!">
            <button id="jonatishBtn">Submit</button>
        </div>
    </div>
    </li>
        `
        newArr = vidArr[i].id
    }
    videoList.innerHTML = result
    eyeIcons = document.querySelectorAll('#eyeIcon')
    iconX = document.querySelectorAll('#iconX')
    videoO = document.querySelectorAll('#videoO')
    addEyeTogglers()
}
addVideo()
eyeIcons = document.querySelectorAll("#eyeIcon")
addEyeTogglers()
function addEyeTogglers() {
  eyeIcons.forEach(icon => {
    icon.addEventListener("click",  (e) => {
      e.target.offsetParent.classList.add('woll')
  })
  })

  iconX.forEach(iconX => {
    iconX.addEventListener("click", (e) => {
      e.target.offsetParent.classList.remove('woll')
    })
  })
  eyeIcons.forEach(eyeIcons => {
    eyeIcons.addEventListener("click",  (e) => {
  //yeIcons.style.opacity = "0"
  })
  })
  eyeIcons.forEach(iconX  => {
    iconX.addEventListener("click", (e) => {
      console.log("salom");
      e.target.offsetParent.style.opacity ="1"
      
    })
  })
  
}


let jonatishBtn = document.querySelector('#jonatishBtn')
let comentInput = document.querySelector('#comentInput')
let comentCard = document.querySelector('#comentCard')
let coment__text = document.querySelector('.coment__text')
let iconComent1 = document.querySelectorAll('#iconComent1')
let jonatishBtn1 = document.querySelector('#jonatishBtn1')
let videoItemText = document.querySelector('.coment__text')
let textEan = document.querySelector('.textEkran')
let inputArr = [];
jonatishBtn.addEventListener('click', () => {
    let nevObj  = {
        discaribtion: comentInput.value,
    } 
    inputArr.unshift(nevObj)
    console.log(inputArr);
    console.log(nevObj);
    textEkran();
})
jonatishBtn1.addEventListener('click', () => {
comentInput.value = " "
} )
function textEkran(){
    let result = "" 
    for (let i = 0; i <inputArr.length; i++) {
    result += `
        <p>${inputArr[i].discaribtion}</p>
    `
    }
    coment__text.innerHTML = result
}



   
   




// if(e === e.target.offsetParent.classList.add('active')){
//   e.target.offsetParent.classList.add('active')
// }
// else{
//   e.target.offsetParent.classList.remov('active')
// }
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];



// document.getElementById("videoItem").addEventListener('click' , () => {
//     return this.vidArr.map(getFullName)
// }) 
// function getFullName(item) {


// let vidBox = vidArr.filter(vid => {
//         for (let i = 0; i <vidArr.length ; i++){
            
            // if (vid.id === item.id) {
            //     console.log("Polat")
            // }
            // else{
            // }
        // }
    // })

    // const card = vidArr.id == id 
//   return;


// }













// modal

(function() {
    "use strict";
  
    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);
  
    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest('.js-modal');
      if (modalBtnOpen) { // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
      }
  
      const modalBtnClose = evt.target.closest('.modal-close');
      if (modalBtnClose) { // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest('.modal-window'));
      }
  
      if (evt.target.matches('#modal-backdrop')) { // backdrop click
        hideModal(document.querySelector('.modal-window.show'));
      }
    }
  
    function showModal(modalElem) {
      modalElem.classList.add('show');
      backdrop.classList.remove('hidden');
    }
  
    function hideModal(modalElem) {
      modalElem.classList.remove('show');
      backdrop.classList.add('hidden');
    }
  })();
  







// let vidBox = vidArr.filter(vid => {
//     return id;
//     })
//     const card = vidArr.id == id 
//     for (let i = 0; i <vidArr.length ; i++){
//         if (vidArr[i].id == id) {
//             console.log("Polat")
//         }
//         else{
//             console.log("nemati")
//         }
// }

