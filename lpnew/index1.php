<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
$APPLICATION->SetTitle("Столичный Центр Кредитования"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?$APPLICATION->ShowTitle();?></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" />
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" defer></script>
    <script src="js/script.js" defer></script>
    <script src="js/additional.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?$APPLICATION->ShowHead();?>
</head>

<body>
<?$APPLICATION->ShowPanel();?>
<div class="screen screen-1">
    <div class="mobile-header">
        <div class="container">
            <a href="#">
                <img src="img/logo-mobile.png" alt="logo">
            </a>
            <a href="tel:84956019000">+7 (495) 601-90-00</a>
        </div>
    </div>
    <div class="container clearfix">
        <div class="screen-left">
            <nav class="nav">
                <ul>
                    <li><a href="#" id="toCredit">Кредиты</a></li>
                    <li><a href="#" id="toCalc">Калькулятор</a></li>
                    <li><a href="#" id="toAbout">О компании</a></li>
                    <li><a href="#" id="toMap">Контакты</a></li>
                </ul>
                <a href="#" class="logo"><img src="img/logo.png" alt="logo"></a>
            </nav>
            <div class="credit-info">
                <div class="credit-info-main">
                    <h3>Кредит<br>без залога</h3>
                    <p>до 12 000 000 руб</p>
                </div>
                <p>Ставки от 7% в более
                    <br>52 топовых банках-партнёрах</p>
                <a href="#" class="button button-credit">Оформить кредит</a>
            </div>
        </div>
        <div class="screen-right">
            <div class="callback">
                <a href="tel:84956019000">8 (495) 601-90-00</a>
                <div>
                    <p>Заказать обратный звонок</p>
                </div>
            </div>
            <div class="credit">
                <p>Мы оформим Вам кредит</p>
                <form action="#" class="credit-form">
                    <p>Оставить заявку</p>
                    <input type="text" name="name" id="creditFormName" placeholder="Имя">
                    <input type="phone" name="tel" id="creditFormTel" placeholder="Телефон">
                    <input type="text" name="creditSum" id="creditFormSum" placeholder="Сумма кредита">
                    <input type="submit" value="Оформить кредит">
                    <div class="credit-form-agree">
                        <input type="checkbox" id="creditFormAgree">
                        <label for="creditFormAgree">
                            <div class="credit-form-agree-checkbox"></div>
                            <p>Я принимаю <a href="#">условия передачи информации</a></p>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="banks-wrapper">
        <div class="owl-carousel owl-theme banks">
            <div class="item" id="alpha-bank"></div>
            <div class="item" id="sber"></div>
            <div class="item" id="bm"></div>
            <div class="item" id="loco-bank"></div>
            <div class="item" id="raiffaisen"></div>
            <div class="item" id="vtb24"></div>
            <div class="item" id="alpha-bank"></div>
            <div class="item" id="sber"></div>
            <div class="item" id="bm"></div>
            <div class="item" id="loco-bank"></div>
            <div class="item" id="raiffaisen"></div>
            <div class="item" id="vtb24"></div>
        </div>
    </div>
</div>
<div class="screen screen-2">
    <div class="container">
        <ul>
            <li id="adv-cash">
                <img src="img/credit-cash-white.png" alt="Наличные">
                <img src="img/credit-cash.png" alt="Наличные">
                <p>Кредит наличными</p>
            </li>
            <li id="adv-business">
                <img src="img/credit-business-white.png" alt="Бизнес">
                <img src="img/credit-business.png" alt="Бизнес">
                <p>Кредитование бизнеса</p>
            </li>
            <li id="adv-ipo">
                <img src="img/credit-ipo-white.png" alt="Ипотека">
                <img src="img/credit-ipo.png" alt="Ипотека">
                <p>Ипотечное кредитование</p>
            </li>
            <li id="adv-cards">
                <img src="img/cards-white.png" alt="Карты">
                <img src="img/cards.png" alt="Карты">
                <p>Кредитные карты</p>
            </li>
            <li id="adv-auto">
                <img src="img/credit-auto-white.png" alt="Залог авто">
                <img src="img/credit-auto.png" alt="Залог авто">
                <p>Кредит под залог автомобиля</p>
            </li>
            <li id="adv-house">
                <img src="img/credit-house-white.png" alt="Залог недвижимости">
                <img src="img/credit-house.png" alt="Залог недвижимости">
                <p>Кредит под залог недвижимости</p>
            </li>
        </ul>
        <form action="#" class="credit-calc">
            <h3>Кредитный калькулятор</h3>
            <div class="credit-calc-container">
                <div class="credit-calc-inputs">
                    <div class="flex">
                        <div class="credit-calc-sum">
                            <label for="#creditCalcSum">Сумма</label>
                            <input type="text" id="creditCalcSum" data-index="1" value="300000">
                            <div id="sliderSum"></div>
                        </div>
                        <div class="credit-calc-time">
                            <label for="#creditCalcTime">Срок, мес</label>
                            <input type="text" id="creditCalcTime" value="60">
                            <div id="sliderTime"></div>
                        </div>
                        <div class="credit-calc-percent">
                            <label for="#creditCalcPercent">Процентная ставка</label>
                            <input type="text" id="creditCalcPercent" value="7%">
                            <div id="sliderPercent"></div>
                        </div>
                    </div>
                </div>
                <div class="credit-calc-output">
                    <div class="flex">
                        <p>Ежемесячный платёж:</p>
                        <p><strong>13 550</strong></p>
                        <a href="#" class="button button-credit">Получить кредит</a>
                        <p class="credit-calc-disclaimer">*Расчёты кредитного калькулятора являются предварительными</p>
                    </div>
                </div>
                <p class="credit-calc-disclaimer">*Расчёты кредитного калькулятора являются предварительными</p>
            </div>
        </form>
    </div>
</div>
<div class="screen screen-3">
    <div class="container">
        <div class="screen-left">
            <h3>Поможем получить кредит даже в сложной ситуации</h3>
            <ul>
                <li>Плохая кредитная история</li>
                <li>Нет средств платить по имеющимся кредитам</li>
                <li>Нет работы или официального устройства</li>
                <li>Ранее взятые кредиты на невыгодных условиях</li>
                <li>Нужны деньги, но нет времени ждать</li>
                <li>При обращении в банки получаете отказ</li>
            </ul>
        </div>
        <div class="screen-right">
            <h3>Наши преимущества</h3>
            <ul>
                <li><img src="img/credit-100.png" alt="100 000">Кредиты от 100 000 до 100 000 000</li>
                <li><img src="img/credit-day.png" alt="1 день">Срок получения кредита от 1 дня</li>
                <li><img src="img/credit-long.png" alt="Долгий срок">Кредиты на долгий срок</li>
                <li><img src="img/pay-when-get.png" alt="Оплата по факту получения">Оплата по факту получения</li>
                <li><img src="img/52.png" alt="52 банка партнёра">52 банка партнёра</li>
                <li><img src="img/correct-docs.png" alt="Правильное заполнение документов">Правильно заполнение документов в банк</li>
                <li><img src="img/NBKI.png" alt="НБКИ">НБКИ и комплексная проверка</li>
                <li><img src="img/9-years.png" alt="Успешная работа с 2009г.">Успешная работа с 2009г.</li>
            </ul>
            <a href="#" class="button button-credit">Заявка на кредит</a>
        </div>
    </div>
    <div class="about-sck">
        <div class="container">
            <img src="img/logo-small.png" alt="СЦК">
            <p><strong><img src="img/logo-mobile.png" alt="logo">«Столичный центр кредитования»</strong> - финансовый консультант, с 2009 года
                <br> успешно оказывающий помощь в получении кредита и ипотеки в Москве и Московской области</p>
        </div>
    </div>
</div>
<div class="screen screen-4">
    <div class="container">
        <div class="reviews-wrapper">
            <h3>Отзывы о нас на YELL.RU</h3>
            <div class="owl-carousel owl-theme reviews">
                <div class="item">
                    <div class="review-left">
                        <img src="img/JZ.jpg" alt="Avatar">
                        <p><strong>Женя Захаров</strong></p>
                    </div>
                    <div class="review-right">
                        <p><strong>Женя Захаров</strong></p>
                        <p>Обращался в разные банки и получал отказы по непонятной мне причине. Столичный Центр
                            Кредитования полностью решил все мои финансовый вопросы. Сотрудники соблюдает все
                            правила работы с клиентами. Остался полностью доволен. Кредит получил за 2 дня под очень
                            низкий процент! Спаси Вам за работу. Обязательно буду Вас рекомендовать свои знакомым!</p>
                    </div>
                </div>
                <div class="item">
                    <div class="review-left">
                        <img src="img/Den Tuvin.jpg" alt="Avatar">
                        <p><strong>Den Tuvin</strong></p>
                    </div>
                    <div class="review-right">
                        <p><strong>Den Tuvin</strong></p>
                        <p>Оказался в сложной ситуации, сами знаете, как это бывает. Никак не мог получить необходимую
                            сумму, чтобы вырулить из финансового пике, но обратился в данный центр кредитования и
                            остался доволен уровнем качества и грамотным подходом. Еще раз большое спасибо за
                            оперативную помощь!</p>
                    </div>
                </div>
                <div class="item">
                    <div class="review-left">
                        <img src="img/Lika.jpg" alt="Avatar">
                        <p><strong>Наталия Шафак</strong></p>
                    </div>
                    <div class="review-right">
                        <p><strong>Наталия Шафак</strong></p>
                        <p>Рекомендую всем кто попал в затруднительное положение или по каким-то причинам не может
                            самостоятельно взять кредит! Компания обязательства свои выполнила на высоком уровне и в
                            сжатые сроки!</p>
                    </div>
                </div>
                <div class="item">
                    <div class="review-left">
                        <img src="img/Наталия ШафахNataliaа Маремук</strong></p>
                    </div>
                    <div class="review-right">
                        <p><strong>Лика Маремук</strong></p>
                        <p>Добрый вечер! Хочу поблагодарить Столичный центр кредитования. Долгое время не могла
                            получить кредит на раскрутку своего бизнеса, хотя у меня не было ни каких задолженностей.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="screen screen-5">
    <div class="map-form map-form-mobile">
        <div>
            <img src="img/logo-black.png" alt="logo">
        </div>
        <div class="map-form-inner">
            <div>
                <p class="map-inner-case">Телефон:</p>
                <p>+7 (495) 601-90-00</p>
            </div>
            <div>
                <p class="map-inner-case">Наш адрес:</p>
                <p>115054, Россия, г.Москва
                    <br> ул.Валовая, 8 стр.1, м.Павелецкая</p>
            </div>
            <div>
                <p class="map-inner-case">E-mail:</p>
                <p>info@clc-credit.ru</p>
            </div>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.5807402507585!2d37.63091941605922!3d55.73103800113775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1c10991523%3A0x1fba30db992e2b14!2z0JLQsNC70L7QstCw0Y8g0YPQuy4sIDgg0YHRgtGA0L7QtdC90LjQtSAxLCDQnNC-0YHQutCy0LAsIDExNTA1NA!5e0!3m2!1sru!2sru!4v1529950121004" frameborder="0" style="border:0" allowfullscreen></iframe>
    <div class="container">
        <div class="map-form">
            <div>
                <img src="img/logo-black.png" alt="logo">
            </div>
            <div class="map-form-inner">
                <div>
                    <p class="map-inner-case">Телефон:</p>
                    <p>+7 (495) 601-90-00</p>
                </div>
                <div>
                    <p class="map-inner-case">Наш адрес:</p>
                    <p>115054, Россия, г.Москва
                        <br> ул.Валовая, 8 стр.1, м.Павелецкая</p>
                </div>
                <div>
                    <p class="map-inner-case">E-mail:</p>
                    <p>info@clc-credit.ru</p>
                </div>
                <div class="map-form-buttons">
                    <a href="#" class="button button-path">Проложить маршрут</a>
                    <a href="#" class="button button-credit">Оформить кредит сейчас</a>
                </div>
            </div>
        </div>
        <div class="buttons-mobile">
            <div>
                <a href="#" class="button button-path">Проложить маршрут</a>
            </div>
            <div>
                <a href="#" class="button button-credit">Оформить кредит сейчас</a>
            </div>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="flex">
                <a href="#" class="footer-logo"><img src="img/logo.png" alt="logo"></a>
                <p>Мы поможем Вам получить кредит</p>
                <div class="callback">
                    <a href="tel:84956019000">8 (495) 601-90-00</a>
                    <div>
                        <p>Заказать обратный звонок</p>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Калькулятор</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
        <div class="footer-bottom flex">
            <div class="footer-bottom-left">
                <p>Быстрое получение кредита для физических лиц, индивидуальных предпринимателей, владельцев и руководителей бизнеса
                    <br>
                    <br> Срок погашения полученного кредита осуществляется не менее чем за 61 день. Максимальный срок погашения кредита может доходить до 25 лет, в зависимости от кредитной программы. Сумма ежемесячных выплат, риски и прочие договорные обязательства зависят от банка, с которым заключен договор на предоставление кредитных услуг.</p>
            </div>
            <div class="footer-bottom-right">
                <p>«Столичный Центр Кредитования» © 2009–2017</p>
                <br>
                <p>info@clc-credit.ru</p>
            </div>
        </div>
    </div>
</footer>
<?
$APPLICATION->IncludeComponent(
    "idesigning:idform.result.new",
    "landing-callback",
    Array(
        "SEF_MODE" => "N",
        "WEB_FORM_ID" => "9",
        "LIST_URL" => "",
        "EDIT_URL" => "",
        "SUCCESS_URL" => "",
        "CHAIN_ITEM_TEXT" => "",
        "CHAIN_ITEM_LINK" => "",
        "IGNORE_CUSTOM_TEMPLATE" => "N",
        "USE_EXTENDED_ERRORS" => "N",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "3600",
        "VARIABLE_ALIASES" => Array(
            "WEB_FORM_ID" => "WEB_FORM_ID",
            "RESULT_ID" => "RESULT_ID"
        )
    ),
    false
);?>
<div class="popup-wrapper">
    <div class="popup popup-credit">
        <a href="#" class="popup-close">Закрыть<img src="img/close.png" alt="close popup"></a>
        <div class="popup-face">
            <div class="popup-face-bg">
                <img src="img/girl-img.png" alt="girl">
            </div>
        </div>
        <div class="popup-form">
            <input type="text" id="creditCallbackName" placeholder="Имя">
            <input type="text" id="creditCallbackName" placeholder="Телефон">
            <input type="text" id="creditCallbackName" placeholder="Сумма кредита">
            <input type="submit" class="button" value="Отправить заявку">
            <div class="credit-form-agree">
                <input type="checkbox" id="creditPopupFormAgree">
                <label for="creditPopupFormAgree">
                    <div class="credit-form-agree-checkbox"></div>
                    <p>Я принимаю <a href="#">условия передачи информации</a></p>
                </label>
            </div>
            <div class="terms">
                <pre>
                    Согласие на обработку персональных данных
<br><br>
Настоящим подтверждаю свое согласие на обработку ООО «Столичный Центр Кредитования»,
115054 г. Москва, ул.Валовая, 8 стр.1 (далее по тексту - «Сайт») моих персональных данных и
подтверждаю, что, давая такое согласие, я действую своей волей и в своем интересе.
<br><br>
Согласие распространяется на следующую информацию: мои фамилия, имя, отчество, год, месяц,
день и место рождения, адрес, телефон, электронная почта, семейное, социальное,
имущественное положение, образование, профессия, доходы, другая информация, относящаяся к
моей личности.
<br><br>
Согласие на обработку персональных данных дается мною в целях получения услуг, оказываемых
Сайтом, в том числе рассмотрения вопроса о возможности предоставления мне кредита,
информации об услугах банка.
<br><br>
Согласие предоставляется на осуществление любых действий в отношении Персональных данных,
которые необходимы для достижения вышеуказанных целей, включая без ограничения: сбор,
систематизацию, накопление, хранение, уточнение (обновление, изменение), использование,
распространение (в том числе передача), обезличивание, блокирование, уничтожение, а также
осуществление любых иных действий с персональными данными в соответствии с действующим
законодательством.
<br><br>
Обработка персональных данных осуществляется Сайтом с использованием средств
автоматизации или без использования средств автоматизации (неавтоматизированная
обработка). При обработке персональных данных Сайт не ограничен в применении способов их
обработки.
<br><br>
Настоящим я признаю и подтверждаю, что в случае необходимости предоставления
персональных данных для достижения указанных выше целей третьему лицу (включая
некредитные и небанковские организации), а равно как при привлечении третьих лиц к оказанию
услуг в указанных целях, передаче Сайтом принадлежащих ему функций и полномочий иному
лицу, Сайт вправе в необходимом объеме раскрывать для совершения вышеуказанных действий
информацию обо мне лично таким третьим лицам, их агентам и иным уполномоченным ими
лицам, а также предоставлять таким лицам соответствующие документы, содержащие такую
информацию.
<br><br>
Также настоящим признаю и подтверждаю, что настоящее согласие считается данным мною
любым третьим лицам, указанным выше, с учетом соответствующих изменений, и любые такие
третьи лица имеют право на обработку персональных данных на основании настоящего согласия.
<br><br>
Настоящее согласие дается до истечения сроков хранения соответствующей информации или
документов, содержащих указанную выше информацию, определяемых в соответствии с
действующим законодательством Российской Федерации и нормативными документами Банка
России, после чего может быть отозвано посредством направления мною письменного
уведомления Сайта не менее чем за 1 (один) месяц до момента отзыва согласия.
                </pre>
            </div>
        </div>
    </div>
</div>
<div class="info-popup">
    <div class="info-popup-inner">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa suscipit tenetur laudantium, dolores reiciendis, quia eveniet delectus blanditiis commodi aperiam porro similique nihil quaerat ex, ducimus omnis labore provident veniam.
    </div>
    <div class="info-popup-pointer"></div>
</div>
</body>

</html>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");?>