import img1 from './img/736b099af99263a30aef971d380af1c0.jpg'
import img2 from './img/img-0753.jpg'
import img3 from './img/47c20619df0156a48cab91aec0e79e1d.jpg'
import img4 from './img/3reduce.jpg'
import img5 from './img/e078e04dfc0fc82df663c27bcd53d791.jpg'
import img6 from './img/5dfeb722e0cd80928b32b7efc0881898.jpeg'
import img7 from './img/1-ganbei-001.jpg'
import img8 from './img/6acbd110cbe8c886f35f07ce88a640291537e084.jpeg'
import img9 from './img/IPtbdLNVwkF_D65W67ZEzpE-nOpYAMhr.jpg'
import img10 from './img/20161215-tam-kav-08.jpg'
import img11 from './img/img-1625.jpg'
import img12 from './img/caption.jpg'
import img13 from './img/lido_20180420_shuk_tutby_phsl_6942.jpg'
import img14 from './img/il_patio_galleria_minsk_1.jpg'
import img15 from './img/imgonline-com-ua-Resize-Hq8ZrkHjcDs18Qt.jpg'
import img16 from './img/bba23949-c701-4998-9c9d-f1fe2b5b391d.png'
import img17 from './img/caption_1.jpg'
import img18 from './img/8.jpg'
import img19 from './img/8reduce.jpg'
import img20 from './img/73b6b0d77423b580adeb9297b4944592.jpg'
import img21 from './img/-bCwg1jhVtakFoAss0vOTbR426RJooXo.jpg'
import img22 from './img/ROBINSON-4.jpg'
import img23 from './img/XXXL.jpeg'
import img24 from './img/4061ef7082fe366b4d9b0d2be89a3df3.jpg'

const data = [
    {
        "name": "Ресторан 'Катюша'",
        "address": "Минск, пр-т Независимости,196",
        "timeWork": "11:00-23:00",
        "description": "Ресторан русско-белорусской кухни с использованием аутентичных продуктов, необычными коктейлями и комплексными обедами",
        "deliver": true,
        "chiliPepper": true,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская"],
        "img": img1,
        "bill": "$$$"
    },
    {
        "name": "Квартира №3",
        "address": "Минск, ул. Кульман, 3",
        "timeWork": "12:00-06:00",
        "description": "Вкусно и весело 24 часа в сутки! Вечеринки каждую ночь!",
        "deliver": true,
        "chiliPepper": true,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская"],
        "img": img2,
        "bill": "$$"
    },
    {
        "name": "Wood & Fire",
        "address": "Минск, ул. Ф. Скорины, 1",
        "timeWork": "12:00-00:00",
        "description": "Европейский модерн, стейки на раскаленном мраморе и DJ-этаж недалеко от Национальной библиотеки",
        "deliver": true,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Фьюжн"],
        "img": img3,
        "bill": "$$$"
    },
    {
        "name": "Раздолле",
        "address": "3-й км трассы Р23 Минск-Слуцк",
        "timeWork": "12:00-00:00",
        "description": "Загородный эко-ресторан с домашней едой и каминным залом",
        "deliver": true,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Белорусская"],
        "img": img4,
        "bill": "$$$$"
    },
    {
        "name": "BOLSHOY",
        "address": "Минск, ул. Я. Купалы, 25",
        "timeWork": "08:00-00:00",
        "description": "Мультиресторанный комплекс BOLSHOY — самый большой ресторан в центре Минска",
        "deliver": true,
        "chiliPepper": false,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Фьюжн"],
        "img": img5,
        "bill": "$$"
    },
    {
        "name": "Gan Bei",
        "address": "Минск, ул. Притыцкого, 156",
        "timeWork": "11:00-23:00",
        "description": "Сеть ресторанов паназиатской и европейской кухни с качественными продуктами, вкусными блюдами, профессиональной командой",
        "deliver": true,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Морская(Дары моря)","Фьюжн"],
        "img": img6,
        "bill": "$$$"
    },
    {
        "name": "Gan Bei",
        "address": "Минск, пр-т Победителей, 9",
        "timeWork": "11:00-23:00",
        "description": "Сеть ресторанов паназиатской и европейской кухни с качественными продуктами, вкусными блюдами, профессиональной командой",
        "deliver": false,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Морская(Дары моря)","Фьюжн"],
        "img": img7,
        "bill": "$$"
    },
    {
        "name": "Вестфалия",
        "address": "Минск, пр-т Газеты Правда, 11",
        "timeWork": "10:00-23:00",
        "description": "Три банкетных зала и внутренний дворик для любителей немецкой кухни",
        "deliver": true,
        "chiliPepper": false,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская"],
        "img": img8,
        "bill": "$$"
    },
    {
        "name": "Усадьба",
        "address": "Минск, ул. Филимонова, 24",
        "timeWork": "12:00-00:00",
        "description": "Ресторан, созданный для людей c искушенным вкусом, что бы вы ни попробовали, вы выбираете блюда премиум-качества.",
        "deliver": false,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Белорусская"],
        "img": img9,
        "bill": "$$$"
    },
    {
        "name": "T.G.I.FRIDAYS",
        "address": "Минск, пр-т Независимости, 22",
        "timeWork": "12:00-00:00",
        "description": "Американский ресторан, в котором всегда пятница",
        "deliver": true,
        "chiliPepper": true,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Морская(Дары моря)"],
        "img": img10,
        "bill": "$$"
    },
    {
        "name": "Шикари",
        "address": "Минск, пр-т Независимости, 18",
        "timeWork": "12:00-00:00",
        "description": "Цветастый ресторан паназиатской кухни от крупной российской сети в самом центре города",
        "deliver": false,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Фьюжн"],
        "img": img11,
        "bill": "$$"
    },
    {
        "name": "СВОИ",
        "address": "Минск, пр-т Независимости, 22",
        "timeWork": "12:00-00:00",
        "description": "Белорусский колорит в свежей современной интерпретации на «Купаловской»",
        "deliver": true,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Белорусская",],
        "img": img12,
        "bill": "$$"
    },
    {
        "name": "ЛИДО",
        "address": "Минск, ул. Немиге, 5",
        "timeWork": "10:00-21:00",
        "description": "Ресторан-бистро домашней белорусской кухни на площади Якуба Коласа",
        "deliver": true,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":false,
        "parking":false,
        "cuisine":["Белорусская",],
        "img": img13,
        "bill": "$"
    },
    {
        "name": "IL Патио",
        "address": "Минск, пр-т Победителей, 9",
        "timeWork": "10:00-23:00",
        "description": "Ресторан итальянской кухни с широким выбором блюд, комфортной и по-настоящему семейной обстановкой",
        "deliver": true,
        "chiliPepper": true,
        "leaf": false,
        "wiFi":false,
        "parking":false,
        "cuisine":["Европейская","Морская(Дары моря)"],
        "img": img14,
        "bill": "$$"
    },
    {
        "name": "Гранд Кушавель",
        "address": "Минск, пр-т Победителей, 104",
        "timeWork": "11:30-23:30",
        "description": "Гастрономический курорт Минска",
        "deliver": true,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Морская(Дары моря)","Фьюжн","Белорусская"],
        "img": img15,
        "bill": "$$$$"
    },
    {
        "name": "Друзья",
        "address": "Минск, ул. Кульман, 40",
        "timeWork": "12:00-02:00",
        "description": "Ресторан-пивоварня в двухуровневом отдельном здании с биргарденом, сценой и танцполом",
        "deliver": true,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Белорусская"],
        "img": img16,
        "bill": "$$$$"
    },
    {
        "name": "Дубровъ",
        "address": "д. Раубичи ул. Янтарная, 2",
        "timeWork": "12:00-00:00",
        "description": "Уютный ресторан на берегу Дубровского водохранилища в Раубичах",
        "deliver": true,
        "chiliPepper": false,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Белорусская"],
        "img": img17,
        "bill": "$$$$"
    },
    {
        "name": "BierKeller",
        "address": "Минск, пер. Войсковой, 12",
        "timeWork": "12:00-00:00",
        "description": "Немецкий пивной погребок с аутентичной атмосферой, отменными хмельными напитками и сытными блюдами немецкой кухни",
        "deliver": true,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская",],
        "img": img18,
        "bill": "$$$$"
    },
    {
        "name": "Underworld",
        "address": "Минск, ул. Л. Украинки, 22",
        "timeWork": "03:00-03:00",
        "description": "Ресторан-клуб в классических интерьерах",
        "deliver": true,
        "chiliPepper": false,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Морская(Дары моря)","Фьюжн",],
        "img": img19,
        "bill": "$$$$"
    },
    {
        "name": "Вильна",
        "address": "Минск, ул. Мирошниченко, 1а",
        "timeWork": "12:00-00:00",
        "description": "Пивной ресторан недалеко от Цнянского водохранилища",
        "deliver": true,
        "chiliPepper": true,
        "leaf": false,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Белорусская"],
        "img": img20,
        "bill": "$$$$"
    },
    {
        "name": "Гаштет",
        "address": "Минск, ул. Комсомольская, 9",
        "timeWork": "12:00-00:00",
        "description": "Пивной ресторан в центре Минска – с крафтом, немецкой и чешской кухней, сытными бизнес-ланчами и демократичными ценами",
        "deliver": false,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Белорусская"],
        "img": img21,
        "bill": "$$$$"
    },
    {
        "name": "Robinson Club",
        "address": "Минский р-н",
        "timeWork": "12:00-00:00",
        "description": "Загородный клуб с видом на Минское море, летней террасой, причалом и беседками",
        "deliver": false,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Морская(Дары моря)","Фьюжн","Белорусская"],
        "img": img22,
        "bill": "$$$$"
    },
    {
        "name": "Подворье",
        "address": "Минск, ул. Червякова, 23",
        "timeWork": "12:00-23:00",
        "description": "Щедрая украинская душа на Червякова",
        "deliver": false,
        "chiliPepper": false,
        "leaf": false,
        "wiFi":true,
        "parking":true,
        "cuisine":["Европейская","Белорусская"],
        "img": img23,
        "bill": "$$$$"
    },
    {
        "name": "Fabriq",
        "address": "Проспект Победителей 1, Минск, Беларусь",
        "timeWork": "12:00-00:00",
        "description": "Просторный лофт на примерно 600 квадратах посадочной площади, разбитый на зоны отдыха и банкетные випки за звукопоглощающей шторой. ",
        "deliver": false,
        "chiliPepper": true,
        "leaf": true,
        "wiFi":true,
        "parking":false,
        "cuisine":["Европейская","Морская(Дары моря)","Фьюжн"],
        "img": img24,
        "bill": "$$$"
    }
]

export default data