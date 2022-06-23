"use strict"

const messageOutput = document.querySelector('.cities__message');
const citiesInput = document.querySelector('.cities__input');
const cities = [];


citiesInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        checkCity2()
        console.log(cities)
    }
})


function checkCity() {
    if (cities.length == 0) {
        cities.push(citiesInput.value.toLowerCase());
        citiesInput.value = ''
    } else {
        for (let i of cities) {
            if (i == citiesInput.value.toLowerCase()) {
                messageOutput.innerHTML = `Город <p class="city__name">${i}</p> уже был. Введите другой.`
                console.log('here')

            } else {
                cities.push(citiesInput.value.toLowerCase());
                citiesInput.value = ''
                break
            }
        }
    }
}

// const e = 'Москва';

// console.log(cities.includes('Москва'))

function checkCity2() {
    if (cities.length == 0) {
        cities.push(citiesInput.value.toLowerCase());
        messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`
        setTimeout(() => messageOutput.innerHTML = '', 900)
        citiesInput.value = ''
    } else {
        if (cities.includes(citiesInput.value.toLowerCase())) {
            incorrectInput()
            messageOutput.innerHTML = `Город <p class="city__name">${citiesInput.value}</p> уже был.<br> Введите другой.`
        } else {
            cities.push(citiesInput.value.toLowerCase());
            messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`
            setTimeout(() => messageOutput.innerHTML = '', 900)
            citiesInput.value = ''
        }
    }
}

function incorrectInput(){
    citiesInput.classList.add('_incorrect');
    setTimeout(()=>citiesInput.classList.remove('_incorrect'), 310)
}

// for (let k of cities){
//     console.log('cotu')
// }