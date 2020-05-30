jQuery(document).ready(function($) {

    // if ($(window).width() > 1024) {
    //     $('.banks').owlCarousel({
    //         loop: true,
    //         margin: 60,
    //         nav: true,
    //         navText: ["<img src='./img/arrow-left-white.png'><img src='./img/arrow-left.png'>", "<img src='./img/arrow-right-white.png'><img src='./img/arrow-right.png'>"],
    //         dots: false,
    //         responsive: {
    //             0: {
    //                 items: 3
    //             },
    //             481: {
    //                 items: 4
    //             },
    //             1025: {
    //                 items: 6
    //             },
    //             1441: {
    //                 items: 8
    //             }
    //         }
    //     });
    // } else if ($(window).width() > 768) {


    $("body").css("width", $(window).width() + "px");
    $(window).resize(function (el) {
        $("body").css("width", $(window).width() + "px");
    });

    $('.banks').owlCarousel({
        loop: true,
            margin: 40,
            navText: ["<img src='./img/arrow-left-white.png'><img src='./img/arrow-left.png'>", "<img src='./img/arrow-right-white.png'><img src='./img/arrow-right.png'>"],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            responsive: {
                0: {
                    items: 3,
                    nav: false
                },
                481: {
                    items: 4
                },
                1025: {
                    items: 6,
                    nav: true
                },
                1200: {
                    items: 8,
                    nav: true
                }
            }
        });
    
    $('.reviews').owlCarousel({
        loop: true,
        margin: 60,
        nav: true,
        navText: ["<img src='./img/arrow-left-white.png'><img src='./img/arrow-left.png'>", "<img src='./img/arrow-right-white.png'><img src='./img/arrow-right.png'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // $('.banks').css({
    //     left: ($(window).width() - $('.banks').width()) / 2
    // });

    // Calculator

    var calcOutput = $('.credit-calc-output .flex p strong');
    calcOutputFunc();

    // Sliders
    // Sum slider

    function calcOutputFunc() {
        calcOutput.html(($("input#creditCalcSum").val() * (($("input#creditCalcPercent").val().replace('%', '') / 100 / 12) / (1 - Math.pow(1 + ($("input#creditCalcPercent").val().replace('%', '') / 100 / 12), $("input#creditCalcTime").val() * -1)))).toFixed(2));
    }

    $("#sliderSum").slider({
        value: 400000,
        min: 100000,
        max: 12000000,
        step: 100000,
        range: "min",
        slide: function(event, ui) {
            $("input#creditCalcSum").val(ui.value);
            calcOutputFunc();
        }
    });

    $("input#creditCalcSum").change(function() {
        var $this = $(this);
        $("#sliderSum").slider("value", $this.val());
        calcOutputFunc();
    });

    // Time slider

    $("#sliderTime").slider({
        value: 60,
        min: 6,
        max: 300,
        step: 1,
        range: "min",
        slide: function(event, ui) {
            $("input#creditCalcTime").val(ui.value);
            calcOutputFunc();
        }
    });

    $("input#creditCalcTime").change(function() {
        var $this = $(this);
        $("#sliderTime").slider("value", $this.val());
        calcOutputFunc();
    });

    // Percent slider

    $("#sliderPercent").slider({
        value: 7,
        min: 7,
        max: 30,
        step: 1,
        range: "min",
        slide: function(event, ui) {
            $("input#creditCalcPercent").val(ui.value + "%");
            calcOutputFunc();
        }
    });

    $("input#creditCalcPercent").change(function() {
        var $this = $(this);
        if ($this.val().replace('%', '') < 7) {
            $("#sliderPercent").slider("value", $this.val().replace('%', ''));
            $this.val('7%');
            calcOutputFunc();
        } else if ($this.val().replace('%', '') > 30) {
            $("#sliderPercent").slider("value", $this.val().replace('%', ''));
            $this.val('30%');
            calcOutputFunc();
        } else if ($this.val().replace('%', '') >= 7 && $this.val().replace('%', '') <= 30) {
            if ($this.val().replace('%', '') % 1 != 0) {
                $("#sliderPercent").slider("value", $this.val().replace('%', ''));
                $this.val(Math.round($this.val().replace('%', '')) + '%');
                calcOutputFunc();
            } else {
                $("#sliderPercent").slider("value", $this.val().replace('%', ''));
                $this.val($this.val().replace('%', '') + '%');
                calcOutputFunc();
            }
        }
    });

    // Popups
    // Main

    $('.agree-popup .popup-close').click(function(event) {
        event.preventDefault();
        $(this).parents('.popup').removeClass('open');
        $('html').removeClass('no-scroll');
    });

    $('.info-popup .popup-close').click(function(event) {
        event.preventDefault();
        $(this).parents('.popup').removeClass('open');
        $('html').removeClass('no-scroll');
    });

    $('body').on('click', '.popup-credit .popup-close, .popup-callback .popup-close', function(event) {
        event.preventDefault();
        $(this).parents('.form-wrapper').remove();
        $('html').removeClass('no-scroll');
    });

    $('body').on('click', '.credit .credit-form-agree label p a', function(event) {
    	event.preventDefault();
    	$('.agree-popup').toggleClass('open');
    	$('html').toggleClass('no-scroll');
    });


    // Callback popup

    $('.callback p').click(function(event) {
    	event.preventDefault();
        $.get('/landing-test/callback/', function(html) {
            $('body').append(html);

            //Вешаем на форму обработчики
            $('[name=SIMPLE_FORM_9]').validate({
                rules: {
                    form_text_51: 'required',
                    form_text_52: 'required',
                    rights_agree_callback: {
                        required: true
                    }
                },
                messages: {
                    form_text_51: "Поле Имя обязательно для заполнения",
                    form_text_52: "Поле Телефон обязательно для заполнения",
                    rights_agree_callback: "Необходимо принять условия передачи информации"
                },
                // errorPlacement: function(error, element) {
                //     element.val(error.text());
                // },
            });

            $('#landingCallbackAgreeCheckbox').click(function() {
                if($('#landingCallbackAgree')[0].checked == true) {
                    $('#landingCallbackAgree')[0].checked = false;
                } else {
                    $('#landingCallbackAgree')[0].checked = true;
                    $('#rights_agree_callback-error').remove();
                }
            });

            $("#landingCallbackPhone").mask("8(999) 999-99-99");
        });
        // $('.popup-callback').parent().toggleClass('open');
        $('html').toggleClass('no-scroll');
    });

    $('body').on('submit', 'form[name=SIMPLE_FORM_9]', function(event) {
        event.preventDefault();
        var data = $('#landingCallbackPopup').parent('form').serializeArray();
        data.push({name: $('#landingCallbackPopup input[type=submit]').prop('name'), value: $('#landingCallbackPopup input[type=submit]').prop('value')});
        $.ajax({
            type: 'POST',
            url: '/landing-test/callback/',
            data: data,
            dataType: 'html',
            success: function(html) {
                $('.form-wrapper').remove();
                $('body').append(html);

                //Предположительно для ERP
                

                var ef_event_type="transaction";
                var ef_transaction_properties = "ev_Callbacks=1&ev_transid=<img id='bxid_891826' src='/bitrix/images/fileman/htmledit2/php.gif' border='0'  />";
                var ef_segment = "";
                var ef_search_segment = "";
                var ef_userid="3672";
                var ef_pixel_host="pixel.everesttech.net";
                var ef_fb_is_app = 0;
                var ef_allow_3rd_party_pixels = 1;
                effp();

                ga('send', 'event', 'callback', 'callback LP');
                yaCounter20136814.reachGoal('CallbackLP');
            }
        });
    });

    // Credit popup

    $('.button-credit').click(function(event) {
    	event.preventDefault();
        $.get('/landing-test/credit-popup/', function(html) {
            $('body').append(html);

            //Вешаем на форму обработчики
            $('#landingCreditPopupWrapper [name=SIMPLE_FORM_3]').validate({
                rules: {
                    form_text_5: 'required',
                    form_text_7: 'required',
                    form_text_11: {
                        required: true,
                        number: true,
                        min: 100000,
                        max: 999999999
                    },
                    rights_agree_credit: {
                        required: true
                    }
                },
                messages: {
                    form_text_5: "Поле Имя обязательно для заполнения",
                    form_text_7: "Поле Телефон обязательно для заполнения",
                    form_text_11: "Сумма кредита может быть от 100 000 до 999 999 999",
                    rights_agree_credit: "Необходимо принять условия передачи информации"
                },
                // errorPlacement: function(error, element) {
                //     element.val(error.text());
                // },
            });

            $('#landingCreditAgreeCheckbox').click(function() {
                if($('#landingCreditAgree')[0].checked == true) {
                    $('#landingCreditAgree')[0].checked = false;
                } else {
                    $('#landingCreditAgree')[0].checked = true;
                    $('#rights_agree_credit-error').remove();
                }
            });

            $("#landingCreditPhone").mask("8(999) 999-99-99");
        });
        $('html').toggleClass('no-scroll');
    });

    $('body').on('submit', '#landingCreditPopupWrapper form[name=SIMPLE_FORM_3]', function(event) {
        event.preventDefault();
        var data = $(this).serializeArray();
        data.push({name: $('#landingCreditPopup input[type=submit]').prop('name'), value: $('#landingCreditPopup input[type=submit]').prop('value')});
        $.ajax({
            type: 'POST',
            url: '/landing-test/credit-popup/',
            data: data,
            dataType: 'html',
            success: function(html) {
                $('.form-wrapper').remove();
                $('body').append(html);
            
            ga('send', 'event', 'Заявка',  'Заявка на кредит LP', 'Оформить кредит');
            yaCounter20136814.reachGoal('CreditLP');

            }
        });
    });

    //credit form
    //Вешаем на форму обработчики
    $('#creditForm').validate({
        rules: {
            form_text_5: 'required',
            form_text_7: 'required',
            form_text_11: {
                required: true,
                number: true,
                min: 100000,
                max: 999999999
            },
            rights_agree_credit_form: {
                required: true
            }
        },
        messages: {
            form_text_5: "Поле Имя обязательно для заполнения",
            form_text_7: "Поле Телефон обязательно для заполнения",
            form_text_11: "Сумма кредита может быть от 100 000 до 999 999 999",
            rights_agree_credit_form: "Необходимо принять условия передачи информации"
        },
        // errorPlacement: function(error, element) {
        //     element.val(error.text());
        // },
        submitHandler: function (form) {
            event.preventDefault();
            var data = $(form).serializeArray();
            $.ajax({
                type: 'POST',
                url: '/landing-test/credit-popup/',
                data: data,
                dataType: 'html',
                success: function(html) {
                    $('.form-wrapper').remove();
                    $('body').append(html);
                    $('#creditForm').trigger('reset');

               ga('send', 'event', 'Заявка',  'Заявка на кредит LP', 'Оформить кредит');
               yaCounter20136814.reachGoal('CreditLP');
                }
            });
        }
    });

    $('#creditFormAgreeCheckbox').click(function() {
        console.log('Кликнули по согласию');
        if($('#creditFormAgree')[0].checked == true) {
            console.log('Убираем согласие');
            $('#creditFormAgree')[0].checked = false;
            console.log($('#creditFormAgree')[0].checked);
        } else {
            console.log('Ставим согласие');
            $('#creditFormAgree')[0].checked = true;
            console.log($('#creditFormAgree')[0].checked);
            $('#rights_agree_credit_form-error').remove();
        }
    });

    $("#creditFormTel").mask("8(999) 999-99-99");

    // Scrolling

    $('.toCredit').click(function(event) {
        $('html, body').animate({
            scrollTop: $('.screen-2').offset().top - 120
        }, 300);
    });

    $('.toCalc').click(function(event) {
        $('html, body').animate({
            scrollTop: $('.credit-calc').offset().top - 40
        }, 300);
    });

    $('.toAbout').click(function(event) {
        $('html, body').animate({
            scrollTop: $('.screen-3').offset().top
        }, 300);
    });

    $('.toMap').click(function(event) {
        $('html, body').animate({
            scrollTop: $('.screen-5').offset().top
        }, 300);
    });

    // Maps

    $('.button-path').click(function(event) {
        event.preventDefault();
    });
});