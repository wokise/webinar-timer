<script>

// Функция получения времени
function getTime() {
  var data = new Date();
  return data;
}

// Функция получения минут
function getMinutes() {
  var data = getTime();
  var getMinutes = data.getMinutes();
  return getMinutes;
}

// Функция получения секунд
function getSecond() {
  var data = getTime();
  var getSecond = data.getSeconds();
  return getSecond;
}

// Функция сверки времени
function reverseTimeMin() {
  var reverseMin;
  var minutes = getMinutes();
  var seconds = getSecond();

  if (minutes < 15) {
    reverseMin = 14 - minutes;
  } else if (minutes < 30) {
    reverseMin = 29 - minutes;
  } else if (minutes < 45) {
    reverseMin = 44 - minutes;
  } else if (minutes <= 59) {
    reverseMin = 59 - minutes;
  }
  if (minutes == 0 && seconds == 0) {
    location.reload();
  } else if (minutes == 15 && seconds == 0) {
    location.reload();
  } else if (minutes == 30 && seconds == 0) {
    location.reload();
  } else if (minutes == 45 && seconds == 0) {
    location.reload();
  }
  return reverseMin;
}

// Функция сверки секунд
function reverseTimeSec() {
  var seconds = 59 - getSecond();
  return seconds;
}

// Функция обновления времени на блоках
// id #minutesVal - минуты
// id #secondVal - секунды
function timeOut() {
  var oneTimeMin = reverseTimeMin();
  var outerMinutes = document.querySelector('#minutesVal');
  outerMinutes.textContent = oneTimeMin;
  var oneTimeSec = reverseTimeSec();
  var outerSecond = document.querySelector('#secondVal');
  outerSecond.textContent = oneTimeSec;
}

// Запускаем функцию timeOut каждую секунду
var timerId = setInterval(function() { 
	timeOut(); 
}, 1000);

// Функция получения времени по Москве
function getMoscowDate() {
    var offset = +3;
    return new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
}

// Функция обновления времени начала вебинара
// id my_timer_date - дата, день месяца и день недели начала вебинара
// id my_timer_time - время начала вебинара
$(function() {

    var updateTime = function() {

    		// Получаем текущие время и дату
        var now = new Date(new Date().getTime() - 4 * 3600 * 1000);
        var date = now.getDate();
        var month = now.getMonth();
        var day = now.getDay();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        // Массивы для дней месяцев и дней недели на русском
        var week_days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        var months_days = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

        // Определяем в минутах время начала вебинара
			  if (minutes < 15) minutes = 15; 
			  else if (minutes >= 15 & minutes < 30) minutes = 30; 
			  else if (minutes >= 30 & minutes < 45) minutes = 45; 
			  else if (minutes >= 45) {
			  	minutes = '00'; 
			  	hours += 1;
			  }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (hours === 24) {
            hours = "00";
        }

        // Выводим 
        $("#my_timer_date").html(date + " " + months_days[month] + ", " + week_days[day]);
        $("#my_timer_time").html(hours + ":" + minutes);

    }

    updateTime();
    setInterval(function() {
        updateTime();
    }, 60000);

});


// Функция для определения буквы на основе времени
// Пример, время 0:15 - буква a, 0:30 - b и т.д.
function getLetter(thisTime) {
	var times = new Map([

	  ['0:15', 'a'],
	  ['6:15', 'a'],
	  ['12:15', 'a'],
	  ['18:15', 'a'],

	  ['0:30', 'b'],
	  ['6:30', 'b'],
	  ['12:30', 'b'],
	  ['18:30', 'b'],

	  ['0:45', 'c'],
	  ['6:45', 'c'],
	  ['12:45', 'c'],
	  ['18:45', 'c'],

	  ['1:00', 'd'],
	  ['7:00', 'd'],
	  ['13:00', 'd'],
	  ['19:00', 'd'],


	  ['1:15', 'e'],
	  ['7:15', 'e'],
	  ['13:15', 'e'],
	  ['19:15', 'e'],

	  ['1:30', 'f'],
	  ['7:30', 'f'],
	  ['13:30', 'f'],
	  ['19:30', 'f'],

	  ['1:45', 'g'],
	  ['7:45', 'g'],
	  ['13:45', 'g'],
	  ['19:45', 'g'],

	  ['2:00', 'h'],
	  ['8:00', 'h'],
	  ['14:00', 'h'],
	  ['20:00', 'h'],


	  ['2:15', 'i'],
	  ['8:15', 'i'],
	  ['14:15', 'i'],
	  ['20:15', 'i'],

	  ['2:30', 'j'],
	  ['8:30', 'j'],
	  ['14:30', 'j'],
	  ['20:30', 'j'],

	  ['2:45', 'k'],
	  ['8:45', 'k'],
	  ['14:45', 'k'],
	  ['20:45', 'k'],

	  ['3:00', 'l'],
	  ['9:00', 'l'],
	  ['15:00', 'l'],
	  ['21:00', 'l'],


	  ['3:15', 'm'],
	  ['9:15', 'm'],
	  ['15:15', 'm'],
	  ['21:15', 'm'],

	  ['3:30', 'n'],
	  ['9:30', 'n'],
	  ['15:30', 'n'],
	  ['21:30', 'n'],

	  ['3:45', 'j'],
	  ['9:45', 'j'],
	  ['15:45', 'j'],
	  ['21:45', 'j'],

	  ['4:00', 'p'],
	  ['10:00', 'p'],
	  ['16:00', 'p'],
	  ['22:00', 'p'],


	  ['4:15', 'q'],
	  ['10:15', 'q'],
	  ['16:15', 'q'],
	  ['22:15', 'q'],

	  ['4:30', 'r'],
	  ['10:30', 'r'],
	  ['16:30', 'r'],
	  ['22:30', 'r'],

	  ['4:45', 's'],
	  ['10:45', 's'],
	  ['16:45', 's'],
	  ['22:45', 's'],

	  ['5:00', 't'],
	  ['11:00', 't'],
	  ['17:00', 't'],
	  ['23:00', 't'],


	  ['5:15', 'u'],
	  ['11:15', 'u'],
	  ['17:15', 'u'],
	  ['23:15', 'u'],

	  ['5:30', 'v'],
	  ['11:30', 'v'],
	  ['17:30', 'v'],
	  ['23:30', 'v'],

	  ['5:45', 'w'],
	  ['11:45', 'w'],
	  ['17:45', 'w'],
	  ['23:45', 'w'],

	  ['6:00', 'x'],
	  ['12:00', 'x'],
	  ['18:00', 'x'],
	  ['00:00', 'x']

	]);  
	return times.get(thisTime);
}

// Функция обновления ссылки на кнопках
// Вставляем кнопку на форму, добавляем в капельке якорь #vebinar_link
function getLink() {
	// Получение текущего времени по МСК
  var now = new Date(new Date().getTime() - 4 * 3600 * 1000);
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Определяем времени начала вебинара в минутах
  // Требуется для функции getLetter
  if (minutes < 15) minutes = 15; 
  else if (minutes >= 15 & minutes < 30) minutes = 30; 
  else if (minutes >= 30 & minutes < 45) minutes = 45; 
  else if (minutes >= 45) {
  	minutes = '00'; 
  }

  // Генерирование ссылки и её подставление в код страницы
  host = 'https://start.bizon365.ru/room/7089';
	var link = host + '/' + getLetter(hours + ':' + minutes);
	document.querySelector('#vebinar_link a').href = link;
}

// Генерируем ссылку при загрузке страницы
getLink();
</script>