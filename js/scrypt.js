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


// function checkCity() {
//     if (cities.length == 0) {
//         cities.push(citiesInput.value.toLowerCase());
//         citiesInput.value = ''
//     } else {
//         for (let i of cities) {
//             if (i == citiesInput.value.toLowerCase()) {
//                 messageOutput.innerHTML = `Город <p class="city__name">${i}</p> уже был. Введите другой.`
//                 console.log('here')

//             } else {
//                 cities.push(citiesInput.value.toLowerCase());
//                 citiesInput.value = ''
//                 break
//             }
//         }
//     }
// }

// const e = 'Москва';

// console.log(cities.includes('Москва'))

function checkCity2() {
    var lastWord;
    var lastLetter;
    // var preLastLetter;
    if (cities.length == 0) {
        cities.push(citiesInput.value.toLowerCase());
        messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`
        setTimeout(() => messageOutput.innerHTML = '', 900)
        citiesInput.value = ''
    } else {
        lastWord = cities[cities.length - 1]
        lastLetter = lastWord[lastWord.length - 1];
        // preLastLetter = lastWord[lastWord.length - 2];
        if (lastLetter == 'ы' || lastLetter == 'ь' || lastLetter == 'ъ' || lastLetter == 'й') {
            lastLetter = lastWord[lastWord.length - 2];
        }
        if (cities.includes(citiesInput.value.toLowerCase())) {
            incorrectInput()
            messageOutput.innerHTML = `Город <p class="city__name">${citiesInput.value}</p> уже был.<br> Введите другой.`
        } else if (citiesInput.value.toLowerCase()[0] != lastLetter) {
            incorrectInput()
            messageOutput.innerHTML = `Введите город с буквы ${lastLetter}. Город был <p class = "city__name">${lastWord}</p>`
        } else {
            cities.push(citiesInput.value.toLowerCase());
            // lastWord = cities[cities.length - 1]
            // lastLetter = lastWord[lastWord.length - 1];
            // preLastLetter = lastWord[lastWord.length - 2];
            messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`
            setTimeout(() => messageOutput.innerHTML = '', 900)
            citiesInput.value = ''
        }
    }
}

// if (citiesInput.value.toLowerCase()[0] != cities[cities.length - 1][cities[cities.length - 1].length - 1]) {
//     incorrectInput()
//     messageOutput.innerHTML = `Город должен начинаться с буквы ${cities[cities.length - 1][cities[cities.length - 1].length - 1]}. Введите другой.`
// }

// const test = ['Вася', 'Коля', 'Вписка', 'Фууу', 'уебаш', 'гандоны']
// console.log(test[test.length - 1][test[test.length - 1].length - 1])

function incorrectInput() {
    citiesInput.classList.add('_incorrect');
    setTimeout(() => citiesInput.classList.remove('_incorrect'), 310)
}

// for (let k of cities){
//     console.log('cotu')
// }



