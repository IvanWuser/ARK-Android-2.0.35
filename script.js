let currentSlide = 0; // Поточний слайд
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; 
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
  updateSlides();
}

function updateSlides() {
  const offset = -currentSlide * 100; 
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}



function showAlert() {
  alert("МЕНІ ЩОСЬ ЗДАЄТЬСЯ ВИ КОРИСТУВАЧІ ДУЖЕ НАГЛІТЕ! СКАЧАТИ ЗАРАЗ? А ЧО НЕ ПОТІМ?");
}
function showAlert2() {
  alert("У вас недостатньо місця!");
}



const messages = [
    { type: 'alert', text: "ОК, щоб підтримати Байдена" },
    { type: 'alert', text: "У вас залишилося 30 секунд, щоб скористатися знижкою!" },
    { type: 'alert', text: "Fatal Error:" },
    { type: 'alert', text: "В Temu знижки на товари! Всього 9.90$ за мультиварку S клас! Пропозиція діє до 2084.01.05, вспій забрати!" },
    { type: 'alert', text: "Наший сайт!" },
    { type: 'alert', text: "Наші умови: Якщо ваший пристрій зарежеться шкідливим програмним забезпеченням то ми не беремо ніякої відповідальності на себе!" },
    { type: 'alert', text: "Всі права захищені!" },
    { type: 'alert', text: "Катя 200м от вас" },
    { type: 'alert', text: "Ніколи не пізно заглянути на нау сторінку в Facebook!" },
    { type: 'alert', text: "Рекомендуємо дізнатися про нашу політику конфедеційності" },
    { type: 'alert', text: "Звяжітся з нашими адміністраторами по адресі barebuh@gmail.com" },
    { type: 'confirm', text: "Приймете cookie?" },
    { type: 'confirm', text: "Удача на вашому боці! Супер! Ваш виграш $500 готовий до виведення!" },
    { type: 'confirm', text: "Ви покидаєте сайт? Отримайте знижку 10% на платні товари перед виходом!" },
    { type: 'confirm', text: "Дозвольте нам надсилати вам повідомлення, щоб бути в курсі всіх новин" },
    { type: 'confirm', text: "Хочеш вступити в ЗСУ?" },
    { type: 'confirm', text: "Вам більше 18 років?" },
    { type: 'prompt', text: "[Опитування] - Чому ви вибрали наший сайт:" },
    { type: 'prompt', text: "Скільки раз на день ви їсте:" },
    { type: 'prompt', text: "Ваша орієнтація:" },
    { type: 'prompt', text: "Вам сподобався наш сайт? Дайте оцінку від 1 до 5!" },
  ];
  
  function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
  
    // Якщо це confirm повідомлення, використовуємо confirm
    if (message.type === 'confirm') {
      const confirmed = confirm(message.text);
      if (confirmed) {
        alert("Підтверджено!");
      } else {
        alert("Не підтверджено.");
      }

    } else if (message.type === 'prompt') {
        prompt(message.text);
    } else {
      alert(message.text);
    }
  
}
  
// Запускаємо функцію при завантаженні сторінки
setInterval(showRandomMessage, 5500);


const adImages = [
  "pics/AD1.webp",
  "pics/AD3.webp",
  "pics/AD4.webp",
  "pics/AD5.webp",
  "pics/AD6.webp",
  "pics/AD7.webp",
  "pics/AD2.jpg" 
];

function getRandomAdImage() {
  const randomIndex = Math.floor(Math.random() * adImages.length);
  return adImages[randomIndex]; // Вибирає рандомне зображення з масиву
}

function showAd() {
  const Adpic = document.getElementById("ADid");
  Adpic.src = getRandomAdImage();

  document.getElementById("adPopup").style.display = "block";
}

function closeAd() {
  document.getElementById("adPopup").style.display = "none";
}

setInterval(showAd, 20000);