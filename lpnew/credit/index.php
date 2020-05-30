<?
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");?>
	<div class="form-wrapper">
<?}

$APPLICATION->IncludeComponent(
	"idesigning:idform.result.new",
	"landing-credit",
	Array(
		"SEF_MODE" => "N",
		"WEB_FORM_ID" => "3",
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
);

if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'):
?>
<!--<script language="javascript" src="https://www.everestjs.net/static/st.v2.js"></script>-->
<!---->
<!--<script type="text/javascript">-->
<!---->
<!--function parseHTML(html, idStr){-->
<!--  var root = document.createElement("div");-->
<!--  root.innerHTML = html;-->
<!--  var allChilds = root.childNodes;-->
<!--  for (var i = 0; i < allChilds.length; i++) {-->
<!--    if (allChilds[i].id && allChilds[i].id == idStr) {-->
<!--      return allChilds[i];-->
<!--    }-->
<!--  }-->
<!--  return false;-->
<!--}-->
<!---->
<!--if($("input.mphone").length){-->
<!--	$.mask.definitions['~']='[49]';-->
<!--	$("input.mphone").mask("8(~99) 999-99-99");-->
<!--}-->
<!---->
<!--$('#callbackSubmit').click(function(){-->
<!---->
<!--	var queryString;-->
<!--	var wrong = false;-->
<!---->
<!--	$('input[name="form_text_51"], input[name="form_text_52"]').each(function(){-->
<!--		if($(this).val()=='') wrong = true;-->
<!--	});-->
<!---->
<!--	if(!wrong) {-->
<!---->
<!--		var fancyContent = '#fancybox-content';-->
<!--		if(!$(fancyContent).length) fancyContent = '.fancybox-inner';-->
<!--		queryString = 'sessid='+$(fancyContent+' input[name="sessid"]').val()+'&WEB_FORM_ID='+$(fancyContent+' input[name="WEB_FORM_ID"]').val()+'&form_text_51='+$(fancyContent+' input[name="form_text_51"]').val()+'&form_text_52='+$(fancyContent+' input[name="form_text_52"]').val()+'&form_dropdown_SIMPLE_QUESTION_281='+$(fancyContent+' select#form_dropdown_SIMPLE_QUESTION_281').val()+'&web_form_submit='+$(fancyContent+' #callbackSubmit').val();-->
<!---->
<!--		$.ajax({-->
<!--			type	: 'POST',-->
<!--			cache	: false,-->
<!--			url		: '/callback/ajax.php',-->
<!--			data	: queryString,-->
<!--			dataType: 'html',-->
<!--			complete: function(data){-->
<!---->
<!--				var resultHTML = 'Спасибо, Ваша заявка принята!';-->
<!--				var fancyHeight = $(fancyContent).height();-->
<!--				$(fancyContent).css('height', fancyHeight);-->
<!--				$(fancyContent).append('<table width="100%" height="'+fancyHeight+'px" style="position:absolute;z-index:0;display:none"><tr><td style="text-align:center; vertical-align:middle; padding:0">'+resultHTML+'</td></tr></table>');-->
<!--				setTimeout("$('"+fancyContent+" form').fadeOut('fast'); $('"+fancyContent+" table').fadeIn('slow');", 500);-->
<!--				setTimeout('$.fancybox.close();', 2000);-->
<!---->
<!--				// _gaq.push(['_trackEvent', 'callback', 'send']);-->
<!---->
<!--                ga('send', 'event', 'callback', 'send');-->
<!---->
<!--                var ef_event_type="transaction";-->
<!--				var ef_transaction_properties = "ev_Callbacks=1&ev_transid=<img id='bxid_891826' src='/bitrix/images/fileman/htmledit2/php.gif' border='0'  />";-->
<!--				var ef_segment = "";-->
<!--				var ef_search_segment = "";-->
<!--				var ef_userid="3672";-->
<!--				var ef_pixel_host="pixel.everesttech.net";-->
<!--				var ef_fb_is_app = 0;-->
<!--				var ef_allow_3rd_party_pixels = 1;-->
<!--				effp();-->
<!---->
<!---->
<!--				yaCounter20136814.reachGoal('CallBack');-->
<!--			}-->
<!--		});-->
<!---->
<!--	} else {-->
<!--		$('#error').css('display', 'block');-->
<!--		setTimeout("$('#error').fadeOut();", 2000);-->
<!--	}-->
<!---->
<!--	return false;-->
<!--});-->
<!--</script>-->
<!--<noscript><img src="https://pixel.everesttech.net/3672/t?ev_Callbacks=1&ev_transid=--><?//=time().mt_rand(1,99)?><!--" width="1" height="1" /></noscript>-->
    </div>
<?
endif;