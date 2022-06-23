"use strict"

const messageOutput = document.querySelector('.cities__message');
const citiesInput = document.querySelector('.cities__input');
const cities = []; // для всех городов

// const allCities = ['Москва', 'Киев', 'Минск', 'Куршавель', 'Липецк', 'Варшава', 'Луганск', 'Кушадасы', 'Орел', 'Лисабон',
//     'Норильск', 'Гродно', 'Гомель', 'Оренбург', 'Венеция', 'Вильнюс', 'Рига', 'Лондон', 'Барселона', 'Торжок', 'Санк-Петербург',
//     'Архангельск', 'Кутузов', 'Винница', 'Антананариву', 'Ульяновск'] 

const austriaCity = 'Айзенштадт Амштеттен Ансфельден Бад Ишль Бад-Фёслау Бишофсхофен Блуденц Браунау-на-Инне Брегенц Брук-на-Муре Брун-ам-Гебирге Вайдхофен-на-Ибсе Вальс-Зиценхайм Вельс Вена Вёргль Винер-Нойштадт Вольфсберг Гётцис Лустенау Мархтренк Мёдлинг Мистельбах-ан-дер-Цайа Нойнкирхен Перхтольдсдорф Гмунден Грац Дорнбирн Зальфельден Зальцбург Инсбрук Капфенберг Кёфлах Клагенфурт Клостернойбург Ранквайль Рид Санкт-Андре Санкт-Йохан Санкт-Пёльтен Санкт-Файт-ан-дер-Глан Тельфс Терниц Трайскирхен Траун Книттельфельд Корнойбург Кремс Куфштайн Леобен Леондинг Лиенц Линц Тульн-на-Дунае Фельдкирх Фельдкирхен Филах Халлайн Халль-ин-Тироль Хард Холлабрун Хоэнемс Цветль Швац Швехат Шпитталь Штайр Штоккерау Фёклабрук Фёлькермаркт Энс';
const austriaCityArr = austriaCity.split(' ');

const belarusCity = 'Бобруйск Брест Витебск Гомель Гродно Минск Могилёв Полоцк Слуцк';
const belarusCityArr = belarusCity.split(' ');

const spainCity = 'Аликанте Барселоона Бадалона Бильбао Валенсия Вальядолид Виго Витория Гранада Картахена Кордова Ла-Корунья Лас-Пальмас-де-Гран-Канария Мадрид Малага Мостолес Мурсия Овьедо Оспиталет-де-Льобрегат Пальма Санта-Крус-де-Тенерифе Сарагоса Севилья Хихон Эльче';
const spainCityArr = spainCity.split(' ');

const italyCity = 'Анкона Бари Бергамо Болонья Больцано Брешиа Венеция Верона Виченца Генуя Джульяно-ин-Кампанья Кальяри Катания Латина Ливорно Мессина Милан Модена Монца Неаполь Новара Падуя Палермо Парма Перуджа Пескара Прато Пьяченца Равенна Реджо-ди-Калабрия Реджо-Эмилия Рим Римини Салерно Сассари Сиракуза Таранто Терни Тренто Триест Турин Феррара Флоренция Форли';
const italyCityArr = italyCity.split(' ');

const polandCity = 'Белосток Бельско-Бяла Быдгощ Бытом Вальбжих Варшава Влоцлавек Вроцлав Гданьск Гдыня Кельце Кошалин Гливице Гожув-Велькопольский Домброва-Гурнича Жешув Забже Зелёна-Гура Калиш Катовице Радом Руда-Слёнска Краков Легница Лодзь Люблин Ольштын Ополе Плоцк Познань Рыбник Слупск Сосновец Тарнув Торунь Тыхы Хожув Ченстохова Щецин Эльблонг Явожно';
const polandCityArr = polandCity.split(' ');

const czechCity = 'Брно Гавиржов Градец-Кралове Дечин Злин Йиглава Карвина Карловы-Вары Кладно Либерец Млада-Болеслав Мост Оломоуц Опава Острава Пардубице Табор Теплице Тршинец Пльзень Прага Простеёв Пршеров Тршебич Усти-над-Лабем Фридек-Мистек Хомутов Ческа-Липа Ческе-Будеёвице Яблонец-над-Нисоу';
const czechCityArr = czechCity.split(' ');

const ukraineCity = 'Алчевск Армянск Бахчисарай Белая-Церковь Белогорск Бердянск Винница Горловка Днепродзержинск Днепропетровск Донецк Евпатория Житомир Запорожье Кривой-Рог Ливадия Луганск Луцк Ивано-Франковск Инкерман Казантип Каменецк-Подольский Киев Кировоград Краматорск Красноперекопск Кременчуг Львов Мариуполь Массандра Мелитополь Николаев Никополь Одесса Павлоград Полтава Ровно Саки Северодонецк Славянск Тернополь Ужгород Форос Харьков Херсон Хмельницкий Черкассы Чернигов Черновцы';
const ukraineCityArr = ukraineCity.split(' ');

const allCities = [...austriaCityArr, ...belarusCityArr, ...spainCityArr, ...italyCityArr, ...polandCityArr, ...czechCityArr, ...ukraineCityArr]; // города бота

console.log(allCities)

citiesInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        checkCity2()
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
        messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`;
        setTimeout(() => messageOutput.innerHTML = '', 900);
        citiesInput.value = '';
        citySpliceBot();
        setTimeout(aiTurn, 910);
    } else {
        lastWord = cities[cities.length - 1];
        lastLetter = lastWord[lastWord.length - 1];
        // preLastLetter = lastWord[lastWord.length - 2];
        if (lastLetter == 'ы' || lastLetter == 'ь' || lastLetter == 'ъ' || lastLetter == 'й') {
            lastLetter = lastWord[lastWord.length - 2];
        }
        if (cities.includes(citiesInput.value.toLowerCase())) {
            incorrectInput();
            messageOutput.innerHTML = `Город <p class="city__name">${citiesInput.value}</p> уже был.<br> Введите другой.`;
        } else if (citiesInput.value.toLowerCase()[0] != lastLetter) {
            incorrectInput();
            messageOutput.innerHTML = `Введите город с буквы ${lastLetter}. Город был <p class = "city__name">${lastWord}</p>`;
        } else {
            cities.push(citiesInput.value.toLowerCase());
            // lastWord = cities[cities.length - 1]
            // lastLetter = lastWord[lastWord.length - 1];
            // preLastLetter = lastWord[lastWord.length - 2];
            messageOutput.innerHTML = `<div class="city__success">${citiesInput.value}</div>`;
            setTimeout(() => messageOutput.innerHTML = '', 900);
            citySpliceBot(); // очистить массив робота от города игрока(если он есть)
            citiesInput.value = '';
            setTimeout(aiTurn, 910);
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
/*---------------AI----------------*/
function aiTurn() {
    var lastCityBot = cities[cities.length - 1];
    // console.log(lastCity)
    var lastLetterBot = lastCityBot[lastCityBot.length - 1];
    if (lastLetterBot == 'ы' || lastLetterBot == 'ь' || lastLetterBot == 'ъ' || lastLetterBot == 'й') {
        lastLetterBot = lastCityBot[lastCityBot.length - 2];
    }
    // console.log(lastLetter)
    // console.log('AI thinking', lastCityBot, lastLetterBot)
    for (let k of allCities) {
        if (k.startsWith(lastLetterBot.toUpperCase())) {
            cities.push(k.toLowerCase());
            // console.log(cities)
            // console.log(k)
            // console.log(allCities)
            // delete allCities[allCities.indexOf(k)];
            // console.log(allCities.indexOf(k))
            allCities.splice(allCities.indexOf(k), 1);
            messageOutput.innerHTML = `Робот называет город ${k}`;
            // allCities.splice(allCities[allCities.indexOf(k)])
            break;
        } else {
            messageOutput.innerHTML = `Робот больше не знает городов. Вы победили.`;
        }
    }
}
function citySpliceBot() {
    for (let i of allCities) {
        if (i.toLowerCase() == cities[cities.length - 1].toLowerCase()) {
            allCities.splice(allCities.indexOf(i), 1);
        }
    }
}

