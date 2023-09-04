/* constants */
let dateToSearch = new Date()
/* getting data  */

const url = `http://localhost:3500/appointment/weekData/${dateToSearch.toISOString().split('T')[0]}`;
fetch(url).then(res => res.json())
    .then(data => {

        const toRender = createArrayToRender(dateToSearch, data)
        /* console.log(toRender) */
        renderAppointmentBoard('appointment-container', toRender, previusButtonHandler, nextButtonHandler)
    })
    .catch(error => {
        console.log(error)
    })

let mockAppointmets = [
    {
        "id": "0d2ad3dd-20e2-4074-9ae1-93a84afd7be7",
        "createdAt": "2023-07-21T18:44:07.275Z",
        "updateddAt": "2023-07-21T18:44:07.275Z",
        "date": "2023-08-14T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 2,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "juan van dames",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "4019a6b1-f71e-44cd-81ce-7bc5060f2be0",
        "createdAt": "2023-08-15T00:14:48.906Z",
        "updateddAt": "2023-08-15T00:14:48.906Z",
        "date": "2023-08-15T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 2,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "pedro van dames",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-17T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 3,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": " cacius van dames",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-17T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 1,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "pedro pascal ",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-18T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 3,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "chapulin coorado",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-17T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 10,
        "total": 500,
        "apptNumber": 6,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "matienso lima",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-17T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 7,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "van dames 3",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    },
    {
        "id": "f8c6a2ab-43b9-438f-82f2-210869e562de",
        "createdAt": "2023-08-15T00:16:08.016Z",
        "updateddAt": "2023-08-15T00:16:08.016Z",
        "date": "2023-08-20T04:00:00.000Z",
        "evaluation": "la caries es profundassssssss, se necesita un tratamiento de conducto",
        "hour": "08:00-08:45",
        "paid": 2,
        "total": 500,
        "apptNumber": 9,
        "user": {
            "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
            "createdAt": "2023-07-14T01:16:22.944Z",
            "updateddAt": "2023-07-14T01:16:22.944Z",
            "first_name": "van dames 4",
            "last_name": "kick boxer",
            "email": "juan@vandame.com",
            "cellphone": "730803722",
            "rol": "DEV",
            "image": ""
        }
    }
]

const createArrayToRender = (date, arr) => {
    const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    const toDateISOString = (date) => new Date(date).toISOString().split('T')[0];

    const isWeekend = (date) => {
        const dayOfWeek = new Date(date).getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    };

    const results = [];
    const startDate = new Date(date);

    for (let index = 0; index < 7; index++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + index);

        if (isWeekend(currentDate)) {
            continue;
        }

        const formattedDate = toDateISOString(currentDate);
        const appointments = arr.filter(element => toDateISOString(element.date) === formattedDate);
        results.push({
            formattedDate,
            weekDay: weekdays[currentDate.getDay()],
            appointments
        });
    }
    return results;
}
const renderAppointmentBoard = (conatinerId, toRender, previusButtonHandler, nextButtonHandler) => {


    /* html element id where to render the coponent */
    const container = document.getElementById(conatinerId)
    container.innerHTML = ''
    /* constants */
    const appoinmentSlot = ['8:00-8:45', '8:45-9:30', '9:30-10:15', '10:15-11:00', '11:00-11:45', '14:00-14:45', '14:45-15:30', '15:30-16:15', '16:15-17:00', '17:00-17:45']

    /* adding buttons */
    const nextButton = document.createElement('button')
    nextButton.innerHTML = ">"
    nextButton.style.cssText = "background-color:#224586; color:white; border:none; border-radius: 0 1rem 1rem 0"
    const previusButton = document.createElement('button')
    previusButton.innerHTML = "<"
    previusButton.style.cssText = "background-color:#224586; color:white; border:none; border-radius:  1rem 0 0 1rem "
    container.appendChild(previusButton)
    /* button functions */
    previusButton.addEventListener('click', () => {
        previusButtonHandler()
    })
    nextButton.addEventListener('click', () => {
        nextButtonHandler()
    })

    toRender.forEach(element => {

        const dayContainer = document.createElement('div')
        const cardDay = document.createElement('div')
        cardDay.style.cssText = "text-align: center; font-weight: bolder; background-color:  rgb(34, 110, 176);;color : white; border-radius:.5rem";

        const columnHeader = `${element.weekDay} </br> ${element.formattedDate.split('T')[0]}`
        cardDay.innerHTML = columnHeader
        dayContainer.appendChild(cardDay)
        for (let i = 0; i < 10; i++) {
            const card = document.createElement('div')

            card.style.margin = "6px 0"
            let cardData = {
                "id": "0d2ad3dd-20e2-4074-9ae1-93a84afd7be7",
                "date": element.formattedDate,
                "appoinment": i,
                "user": {
                    "id": "2e402d5e-9163-4a5e-8c1c-441cf997b0cf",
                    "createdAt": "2023-07-14T01:16:22.944Z",
                    "updateddAt": "2023-07-14T01:16:22.944Z",
                    "first_name": "Disponible",
                }
            }
            const existInToToRender = element.appointments.some(element => element.apptNumber === i)

            cardData = existInToToRender ? element.appointments.filter(element => element.apptNumber === i)[0] : cardData

            const isFreeSchedule = cardData.user.first_name === 'Disponible'
            const bgColor = isFreeSchedule ? 'rgba(94, 82, 82, 0.555);' : 'rgb(108, 216, 153);';
            const title = isFreeSchedule ? '<button style="margin:0;padding:0; width:100%; background-color:tomato;border-radius:10px;font-weight:bolder; font-size:.7rem">agendar</button>' : `<h6 style="text-align:center;margin:0;padding:0;font-weight:bolder ">${cardData.user.first_name}</h6>`
            card.innerHTML = `
                    <div style="background-color:${bgColor};  min-width: 120px; min-height:40px;flex-shrink: 0; border-radius:.4rem">
                        ${title}
                        <p style="margin:0;padding:0;text-align:center">${appoinmentSlot[i]}</p>
                    </div>
                `;
            if (isFreeSchedule) {
                card.addEventListener('click', () => {
                    console.log(cardData);
                })
            } else {
                card.addEventListener('click', () => {
                    console.log('dasda', cardData.user.first_name, cardData.id)
                })
            }
            dayContainer.appendChild(card)
        }

        container.appendChild(dayContainer)
    });

    container.appendChild(nextButton)

}
const previusButtonHandler = () => {

    const previusDay = new Date(dateToSearch)
    previusDay.setDate(previusDay.getDate() - 1)
    if (previusDay.getDay() === 0) {
        previusDay.setDate(previusDay.getDate() - 2)
    }
    dateToSearch = new Date(previusDay)
    const url = `http://localhost:3500/appointment/weekData/${dateToSearch.toISOString().split('T')[0]}`;
    fetch(url)
        .then(res => res.json())
        .then(response => {
            const toRender = createArrayToRender(dateToSearch, response)
            renderAppointmentBoard('appointment-container', toRender, previusButtonHandler, nextButtonHandler)
        })
}
const nextButtonHandler = () => {

    const nextDay = new Date(dateToSearch)
    nextDay.setDate(nextDay.getDate() + 1)
    if (nextDay.getDay() === 6) {
        nextDay.setDate(nextDay.getDate() + 2)
    }
    dateToSearch = new Date(nextDay)
    const url = `http://localhost:3500/appointment/weekData/${dateToSearch.toISOString().split('T')[0]}`;
    fetch(url)
        .then(res => res.json())
        .then(response => {
            const toRender = createArrayToRender(dateToSearch, response)
            renderAppointmentBoard('appointment-container', toRender, previusButtonHandler, nextButtonHandler)
        })
}

