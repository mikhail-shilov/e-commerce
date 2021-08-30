#Описание
##Страница 1. Главная - '/'

Содержит в себе заголовок
Любой текст #brand-name при клике на который переходит на главную
Ссылка с полем #order-count(внутри которого находится количство товаров в корзине) - /basket
3 кнопки USD | EUR | CAD. Которые должны переключать валюту товаров
Кнопки сортировки товаров - по цене(#sort-price)(от большего к меньшему)- по названию(#sort-name)(алфавитный порядок).
Общая сумма всех товаров в корзине
Содержит карточки товаров. Карточка с классом(.card)
картинка(.card__image)
цена(.card__price) (в текущей валюте)
валюта(.currency)
название товара(.card__title)
если этот товар есть в корзине в количестве н штук вывести количество товаров в корзине(.card__product-amount), если нет - ничего не выводить
кнопку добавить
Страница 2. Корзина - '/basket'

##Заголовок из предыдущей задачи
Таблица товаров (отсортированы по текущей сортировке цена/имя)
картинка товара(.product__image)
заголовок(.product__title)
цена за единицу(.product__price)
количество товаров в корзине(.product__amout)
цена за все товары(.product__total_price)
кнопка минус(.product__remove) - удаляет один товар из текущеего списка. Если количество товаров равно нуля, то он исчезачет
Строка, которая показывает всю сумму внизу страницы(#total-amount)
Страница 3. Логи - /logs
Каждое действие юзера должно быть записано на сервере и выведено в таблице логов
Варианты действий

change currency from ${currency1} to ${currency2}
add ${item-title} to the backet
remove ${item-title} from the backet
navigate to ${url} page
sort by ${title}
time of action in utc forma (+new Date())
Если обновить страницу, то логи должны сохраниться.

##Сервер

Для получения курсов валют используйте https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD
Добавьте юрл удалени всех логов (удаление фаила) delete /api/v1/logs
Api разрабатываете в соответсвии с требованиями сами, используя REST
Общие положения

Карточки - это прямоугольники определенного размера. Они должны подстараиваться од экран - добавьте контейнеру классы (flex flex-wrap)
Все цены должны быть округлены до двух порядков - используйте .toFixed(2)
Все запросы из браузера должны идти только на ваш сервер с префиксом /api (и только с вашего сервера на стронее апи)
Все данные на клиенте хранятся в редаксе и меняются через dispatch
