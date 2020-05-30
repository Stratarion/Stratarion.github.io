jQuery(document).ready(function($) {
    $('body').on('click', '.credit-form-agree a', function(event) {
        event.preventDefault();
        $(this).parents('.popup-form').find('.terms').toggleClass('open');
    });

    $('.banks .item').click(function(event) {
        var infoPopup = $('.info-popup');

        if ($(this).attr('id') == $('.info-popup').attr('id')) {
            infoPopup.toggleClass('open');
        } else {
            var top = $(this).offset().top,
                left = $(this).offset().left,
                leftFin,
                id = $(this).attr('id'),
                height;

            if ($(window).width() > 812) {
                if (left < 20) {
                    leftFin = 20;
                } else if (left > $(window).width() - 330) {
                    leftFin = $(window).width() - 330
                } else {
                    leftFin = left;
                }
            } else {
                if (left < 20) {
                    leftFin = 20;
                } else if (left > $(window).width() - 300) {
                    leftFin = $(window).width() - 300
                } else {
                    leftFin = left;
                }
            }

            switch (id) {
                case 'alpha':
                    infoPopup.find('.info-popup-inner').html('Альфа-банк — советский и российский крупный частный коммерческий банк. По данным рейтингов РБК и Forbes на конец 2010 года — седьмой в России банк по объёму активов. Номер лицензии: № 1326');
                    break;
                case 'uralsib':
                    infoPopup.find('.info-popup-inner').html('Банк УРАЛСИБ — российский коммерческий банк. Входит в ТОП-30 крупнейших банков страны. Проходит санацию с 4 ноября 2015 года под контролем Владимира Когана, расходы государства на финансовое оздоровление УРАЛСИБА оцениваются в 81 млрд рублей.');
                    break;
                case 'citi':
                    infoPopup.find('.info-popup-inner').html('Ситибанк — крупнейший международный банк, основанный в 1812 году как City Bank of New York, затем First National City Bank of New York. Сейчас Citibank — подразделение Citigroup, гигантской международной корпорации в области финансовых услуг. Номер лицензии: № 2557');
                    break;
                case 'loko':
                    infoPopup.find('.info-popup-inner').html('«Локо-банк» — универсальный российский коммерческий банк с участием иностранного капитала. Работает на финансовом рынке с 1994 года. Головной офис расположен в Москве. Номер лицензии: № 2707');
                    break;
                case 'raiffaisen':
                    infoPopup.find('.info-popup-inner').html('Райффайзенбанк — российский коммерческий банк. Полное наименование — Акционерное общество «Райффайзенбанк». Штаб-квартира находится в Москве. Номер лицензии: № 3292');
                    break;
                case 'rosselkhoz':
                    infoPopup.find('.info-popup-inner').html('Российский Сельскохозяйственный банк — российский коммерческий банк. Головной офис расположен в Москве. Один из 30-ти крупнейших банков России. Номер лицензии: № 3349');
                    break;
                case 'sber':
                    infoPopup.find('.info-popup-inner').html('ПАО «Сбербанк» — российский универсальный коммерческий банк, крупнейший банк России, Центральной и Восточной Европы. Контролируется Центральным банком Российской Федерации, которому принадлежат более 52 % акций. Номер лицензии: № 1481');
                    break;
                case 'unicredit':
                    infoPopup.find('.info-popup-inner').html('ЮниКредит Банк — советский и российский коммерческий банк, один из крупнейших в стране. Полное наименование банка — Акционерное общество «ЮниКредит Банк». Головной офис — в Москве. Номер лицензии: № 1');
                    break;
                case 'vtb24':
                    infoPopup.find('.info-popup-inner').html('ВТБ 24 — один из крупнейших российских коммерческих банков. Является дочерним банком Банка ВТБ, специализируется на розничных операциях и кредитовании малого и среднего бизнеса. Номер лицензии: № 1623');
                    break;
                default:
                	infoPopup.find('.info-popup-inner').html('Bla');
                	break;
            }

            height = infoPopup.height();

            infoPopup.css({
                top: top - height,
                left: leftFin
            }).addClass('open').attr('id', id);

            var a = left - leftFin + ($(this).width() - 8) / 2;

            infoPopup.find('.info-popup-pointer').css({
            	left: a
            });
        }
    });

    $('.screen-2 ul li').click(function(event) {
    	var infoPopup = $('.info-popup');

        if ($(this).attr('id') == $('.info-popup').attr('id')) {
            infoPopup.toggleClass('open');
        } else {
            var top = $(this).offset().top,
                left = $(this).offset().left,
                leftFin,
                id = $(this).attr('id');

            if (left < 20) {
                leftFin = 20;
            } else if (left > $(window).width() - 330) {
                leftFin = $(window).width() - 330
            } else {
            	leftFin = left;
            }

            switch (id) {
                case 'adv-cash':
                    infoPopup.find('.info-popup-inner').html('Деньги, выдаваемые банком на любые цели в сумме до 12 миллионов рублей по ставке от 11,7% годовых от одного дня при минимуме документов.');
                    break;
                case 'adv-business':
                    infoPopup.find('.info-popup-inner').html('Покоряйте новые рынки и развивайтесь, используя выгодные предложения кредитования под 11,7%, решения без залога.');
                    break;
                case 'adv-ipo':
                    infoPopup.find('.info-popup-inner').html('Купите себе хороший дом или квартиру, оформив ипотеку в лучших банках страны по ставке от 7% годовых при минимальном первом взносе.');
                    break;
                case 'adv-cards':
                    infoPopup.find('.info-popup-inner').html('Не только спасают когда заканчиваются наличные, но и являются самым удобным способ оплаты, приносящий приятные бонусы.');
                    break;
                case 'adv-auto':
                    infoPopup.find('.info-popup-inner').html('Под залог автомобиля быстро и без лишних вопросов поможем получить необходимую сумму по ставке от 11% годовых');
                    break;
                case 'adv-house':
                    infoPopup.find('.info-popup-inner').html('Под залог квартиры быстро и без лишних вопросов поможем получить необходимую сумму по ставке от 13,75% годовых');
                    break;
                default:
                	infoPopup.find('.info-popup-inner').html('Bla');
                	break;
            }

            height = infoPopup.height();

            var gap = 225;

            if($(window).width() <= 812){
                gap = 125;
            }

            infoPopup.css({
                top: top - gap,
                left: leftFin
            }).addClass('open').attr('id', id);

            var a = left - leftFin + ($(this).width() - 8) / 2;

            infoPopup.find('.info-popup-pointer').css({
            	left: a
            });
        }
    });

    $('.info-popup .popup-close').click(function(event) {
        $(this).parent().toggleClass('open');
    });
});