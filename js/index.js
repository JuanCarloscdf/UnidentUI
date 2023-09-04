

/* 🅢🅣🅐🅡🅣 🅲🅰🆁🆁🆄🆂🅴🅻 - 🅲🅾🅼🅿🅾🅽🅴🅽🆃 */
//before to use you must to create a div element and give them id=containerId
// CarruselComponent(containerId,arr,index)
//containerId is id where you want keep the component example id:'my_id'
//arr = objects array to show [{id:'0',title: "General",image:"./images/services1.jpg",message: "Todo lo..."}...],
//index = int
////////////aux functions/////////////

const getIndexes = (index,arr)=>{
  const validIndexes = [];
  for (let i = -1; i <= 1; i++) {
    let idx = (index + i + arr.length) % arr.length;
    validIndexes.push(idx);
  }
  return validIndexes;
}
const addCard =(indexes,arr,cardElement,titleColor='black',cardBgColor='rgba(0, 0, 0, 0.603)')=>{
    for (let j = 0; j < indexes.length; j++) {
        const card = document.createElement('article')
        card.style.justifySelf='center'
        card.innerHTML = `
            <h2 style='color:${titleColor}; text-align:center'>${arr[indexes[j]].title} ${arr[indexes[j]].id}</h2>
            <div style="border-radius: 1rem 1rem 0 0;display: flex; flex-direction: column-reverse; width: 300px; height: 430px; background-image: url('${arr[indexes[j]].image}'); background-size: cover;">
                <div style=" padding: 10px; width: 100%;height: 40%; background-color: ${cardBgColor};">
                    <p style="color: white; font-size:1.2rem; padding-top:5px">${arr[indexes[j]].message}</p>
                </div>
            </div>`;
        cardElement.appendChild(card)
        if(window.innerWidth < 812){
            break
        }
        if(window.innerWidth > 812 && window.innerWidth<1110 && j == 1){
            break
        }   
    }
}
const CarruselComponent = (containerId,arr,index,titleColor,cardBgColor)=>{

    //get main container
    const carruselContainer = document.getElementById(`${containerId}`)
    carruselContainer.innerHTML=''
    //creating elements
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('carousel-card-container')
    const leftButton = document.createElement('button')
    leftButton.classList.add('carousel-button')
    leftButton.textContent = '《'
    const rightButton = document.createElement('button')
    rightButton.classList.add('carousel-button')
    rightButton.textContent = '》'
    //button functions
    leftButton.addEventListener('click',()=>{
        index = (index - 1 + arr.length) % arr.length;
        CarruselComponent(containerId,servicesMock,index,titleColor,cardBgColor)
    })
    rightButton.addEventListener('click',()=>{
        index = (index + 1) % arr.length;
        CarruselComponent(containerId,servicesMock,index,titleColor,cardBgColor)
    })
    const indexes = getIndexes(index,arr)
    addCard(indexes,arr,cardContainer,titleColor,cardBgColor)
    //bulding carousel    
    carruselContainer.appendChild(leftButton)
    carruselContainer.appendChild(cardContainer)
    carruselContainer.appendChild(rightButton)
}
/**🅔🅝🅓 🅲🅰🆁🆁🆄🆂🅴🅻 - 🅲🅾🅼🅿🅾🅽🅴🅽🆃  */


/* 🅢🅣🅐🅡🅣 🅲🅰🆁🆁🆄🆂🅴🅻 2 - 🅲🅾🅼🅿🅾🅽🅴🅽🆃 */

const CarruselDragComponent = (arr, containerId, containerStyles, cardStyles) => {
  let isPressed = false;
  let startPosition = 0;
  let finalPosition = 0;
  let translatePosition = 0;
  const cardWidth = 270;
  const cardSpacing = 20;
  const maxDistance = (arr.length * (cardWidth + cardSpacing)) - cardSpacing;
  
  const container = document.getElementById(containerId);
  container.classList.add(containerStyles);

  // Crear las tarjetas y agregarlas al contenedor
  arr.forEach(element => {
    const card = createCard(element);
    container.appendChild(card);
  });

  // Event listeners para el arrastre
  container.addEventListener('mousedown', handleMouseDown);
  container.addEventListener('mouseup', handleMouseUp);
  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);
  
  // Función para crear una tarjeta
  function createCard(element) {
    const card = document.createElement('article');
    card.classList.add(cardStyles);
    card.style.userSelect = "none";
    card.innerHTML = `
      <div style="border-radius: 0 20px 0 0; background-image: url(${element.image}); background-size: cover; width: 100%; height: 50%;"></div>
      <div style="background-color: #266880c2; border: 2px solid white; padding: 12px; font-size: 0.9rem; font-weight: bold; border-radius: 0 0 0 15px; height: 50%;">
        <p style="height: 75%">${element.message}</p>
        <hr style="border-width: 80%; padding-bottom: 0; margin-bottom: 5px;">
        <h5>${element.userName}</h5>
      </div>
    `;
    return card;
  }

  // Manejadores de eventos
  function handleMouseDown(event) {
    isPressed = true;
    startPosition = event.clientX;
  }

  function handleMouseUp() {
    isPressed = false;
    startPosition = 0;
    finalPosition = 0;
  }

  function handleMouseMove(event) {
    if (isPressed) {
      finalPosition = event.clientX;
      const distance = finalPosition - startPosition;
      startPosition = finalPosition;

      translatePosition += distance;
      translatePosition = Math.min(0, Math.max(-maxDistance + container.clientWidth, translatePosition));

      container.style.transform = `translateX(${translatePosition}px)`;
    }
  }

  function handleMouseLeave() {
    isPressed = false;
  }
};

/**🅔🅝🅓 🅲🅰🆁🆁🆄🆂🅴🅻 2- 🅲🅾🅼🅿🅾🅽🅴🅽🆃  */

/* start 🅽🅾🆃🅸🅲🅴🆂 */
const renderNotices = (containerId,arr,cardStyle,containerStyles,colorCards)=>{
  const container = document.getElementById(containerId)
  container.classList.add(containerStyles)
  arr.forEach((element,index)=>{
    const card = document.createElement('article')
    card.classList.add(cardStyle)
    card.style.backgroundColor = colorCards[index].bgColor
    card.style.color = colorCards[index].fontColor
    card.innerHTML = `
      <p>${element.message}</p>
    `;
    container.appendChild(card)
  })

  console.log('notices funcionando')

}
/* ensd 🅽🅾🆃🅸🅲🅴🆂 */

/** 🇺​​​​​🇮​​​​​*/
/*🅢🅔🅡🅥🅘🅒🅔🅢*/
const servicesMock = [
  {
      id:'0',
      title: "General",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'1',
      title: "Cosmetico",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'2',
      title: "Cirugia",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'3',
      title: "Productos",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'4',
      title: "Cirugia",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'5',
      title: "Productos",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  }
]
let servIdex = 1
const containerId = 'carrusel-test'
CarruselComponent(containerId,servicesMock,servIdex,'black')
/* 🅡🅔🅥🅘🅔🅦🅢 test new */
const mockReviews = [
  {
      id:'0',
      userName: "Juan Carlos",        
      image: "./images/services1.jpg",
      message: "Atencion de primera con buen trato humano, la doctora siempre esta pendiente del umral del dolor y esta siempre procurando tu comodidad, ademas de realizar un trabajo de primera :)"
  },
  {
      id:'1',
      userName: "Cosme fulanito",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'2',
      userName: "Patricia polanski",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'3',
      userName: "Rob Van Dame",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'4',
      userName: "Anatola Blanco",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'5',
      userName: "Midu Dev",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'6',
      userName: "Anatola Blanco",        
      image: "./images/services1.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  },
  {
      id:'7',
      userName: "Midu Dev",        
      image: "./images/services2.jpg",
      message: "Todo lo que esperabas y mas, los empastes y las radiogrfias son solo el comienzo"
  }]
const elementId = 'carousel-content-1'  
/* arr,containerId,containerStyles,cardId */
CarruselDragComponent(mockReviews,'crousel-container','carousel-content-1','card-test-1')
/*  🅽🅾🆃🅸🅲🅴🆂 */
const noticesMock = [
  {
    id:'1',
    message: 'el dia 6 de julio no se atendera debido a los bloqueos en la zona del consultorio, los pascientes agendados ese dia seran transladados al 16 de julio porfavor tomar en cuenta. disculpen las molestias'
  },
  {
    id:'1',
    message: 'el dia 6 de julio no se atendera debido a los bloqueos en la zona del consultorio, los pascientes agendados ese dia seran transladados al 16 de julio porfavor tomar en cuenta. disculpen las molestias'
  },
  {
    id:'1',
    message: 'el dia 6 de julio no se atendera debido a los bloqueos en la zona del consultorio, los pascientes agendados ese dia seran transladados al 16 de julio porfavor tomar en cuenta. disculpen las molestias'
  },
  {
    id:'1',
    message: 'el dia 6 de julio no se atendera debido a los bloqueos en la zona del consultorio, los pascientes agendados ese dia seran transladados al 16 de julio porfavor tomar en cuenta. disculpen las molestias'
  }
]
const noticesContainer = 'notices-container'
const cardNoticeStyle = 'card-notice'
const containerNoticeStyles = 'container-notice'
const colorCards = [
  {
    fontColor:'white',
    bgColor:'black'
  },
  {
    fontColor:'black',
    bgColor:'aqua'

  },
  {
    fontColor:'black',
    bgColor:'brown'

  },
  {
    fontColor:'black',
    bgColor:'#e07026'

  }
]
renderNotices(noticesContainer,noticesMock,cardNoticeStyle,containerNoticeStyles,colorCards)
/* 🅦🅘🅝🅓🅞🅦 🅕🅤🅝🅒🅣🅘🅞🅝🅢*/
window.addEventListener("resize", () => {
    CarruselComponent(containerId,servicesMock,servIdex)
});
