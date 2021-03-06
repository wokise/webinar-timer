# webinar-timer
Таймер вебинаров для конструктора сайтов "Платформа LP".  

Согласно расписанию устанавливает ту или иную ссылку на вебинар, обновляет время до его начала.

# Использование скрипта

Перейти в настройки сайта > раздел «Метрика и скрипты» > добавить плагин > произвольный код. Название - любое, произвольный код BODY - вставить содержимое файла script.js > сохранить.

# Доступные компоненты

При подключении скрипта, вы можете использовать 3 компонента:
1.	my_timer_date - текущая дата и дата начала вебинара в формате: «Число месяц, день недели», например: «16 Июня, Воскресенье».
2.	my_timer_time - начало вебинара по московскому времени в формате «Часы:Минуты», например «15:00»
3.	vebinar_link - ссылка на вебинар, меняющаяся в зависимости от времени

# Использование компонентов
Для того, чтобы заменить какое - либо содержимое страницы содержимым компонентов, необходимо:
1.	Добавить любой блок на страницу с помощью конструктора
2.	Навести на него мышь, нажать на «Настройки виджета» (иконка - капля)
3.	Перейти на вкладку «Параметры» (в настройках виджета)
4.	Указать ID виджета. В качестве ID виджета используются названия компонентов.

# Примеры
1.	Добавляем из конструктора на форму текст, указываем ID виджета - my_timer_date, сохраняем и открываем страницу - на ней вывелась текущая дата.
2.	Добавляем из конструктора на форму текст, указываем ID виджета - my_timer_time, сохраняем и открываем страницу - на ней вывелась текущее время.
3.	Добавляем из конструктора на форму кнопку, указываем ID виджета - vebinar_link, сохраняем и открываем страницу - появилась кнопка, при нажатии на которую, мы перейдем на вебинар. Ссылка будет меняться автоматически.
4.	Добавляем из конструктора на форму текст, вводим любое предложение, например «Вебинар состоится в ...». Открываем html код данного текста (нажимаем на текст и выбираем “Просмотр HTML-кода”), находим 3 точки и заменяем их на <span id="my_timer_time”></span>, сохраняем. Открываем страницу и видим, что текущее время заменилось на время начала вебинара.

# Таймер обратного отсчета
Помимо этого, на страницу можно вывести таймер с отсчетом времени до начала вебинара, считающий время, часы и минуты. Для того, чтобы его добавить, необходимо в конструкторе добавить на страницу компонент HTML-код и в его настройке вставить содержимое файла html_timer.html.
