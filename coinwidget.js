if(position == 1) {
    document.write( '<style>\n' );
    document.write( '.float {\n' );
    document.write( '    right: 20px;\n' );
    document.write( '}\n' );
    document.write( '.tj {\n' );
    document.write( '    right: 10px;\n' );
    document.write( '}\n' );
    document.write( '</style>' );
}
if(position == 2) {
    document.write( '<style>\n' );
    document.write( '.float {\n' );
    document.write( '    left: 20px;\n' );
    document.write( '}\n' );
    document.write( '.tj {\n' );
    document.write( '    left: 10px;\n' );
    document.write( '}\n' );
    document.write( '</style>' );
}

var myurl = "https://tinyjar.com";
var pic_url = "";
var bg = "black";
if(style == 1) {
    var base = 110;
    if(position == 1) {
        document.write( '    <div class=\"body--widget-position--right\">\n' );
        document.write( '		<div id=\"holder\" class=\"m-fadeOut\">\n' );
        document.write( '			<div id=\"thanks\" class=\"float\" style=\" opacity: 1;\">\n' );
        document.write( '				<img src=\"https://tinyjar.b-cdn.net/thanks.svg\" alt=\"TinyJar Thanks\" style=\"width: 64px;\" class=\"btn\">\n' );
        document.write( '            </div>\n' );

        document.write( '            <div id=\"paypal\" class=\"float\" style=\"bottom:250px; display: none;\">\n' );
        document.write( '                <a href=\"https://www.paypal.com\" rel=\"nofollow\" id=\"ppurl\" target=\"_blank\">\n' );
        document.write( '                    <img src=\"https://tinyjar.b-cdn.net/paypal.svg\" alt=\"PayPal\" style=\"width: 50px;border-radius: 100px;\">\n' );
        document.write( '                </a>\n' );
        document.write( '            </div>\n' );
        document.write( '			<div id=\"patreon\" class=\"float\" style=\" display: none;\">\n' );
        document.write( '			   <a href=\"https://www.patreon.com\" rel=\"nofollow\" id=\"paturl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/patreon.svg\" alt=\"Patreon\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"bmc\" class=\"float\" style=\"bottom:190px; display: none;\">\n' );
        document.write( '			   <a href=\"https://www.buymeacoffee.com\" rel=\"nofollow\" id=\"bmcurl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/bmc.svg\" alt=\"BuyMeACoffee\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"kofi\" class=\"float\" style=\"bottom:130px; display: none;\">\n' );
        document.write( '			   <a href=\"https://ko-fi.com\" rel=\"nofollow\" id=\"kofiurl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/kofi.svg\" alt=\"ko-fi\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"me\" class=\"float\" style=\"bottom:50px;\">\n' );
        document.write( '			   <a href=\"https://tinyjar.com\" rel=\"nofollow\" id=\"meurl\" target=\"_blank\">\n' );
        document.write( '				   <img id=\"meimg\" src=\"https://tinyjar.b-cdn.net/tinyjar-logo.svg\" alt=\"user\" style=\"width: 50px; border-radius: 100px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '		   </div>\n' );

        document.write( '		</div> \n' );
        document.write( '		 <div class=\"widget-button\" id=\"js-widget-button\" onclick=\"tinyjar()\"> \n' );
        document.write( '			<div class=\"widget-button__image-wrap\">\n' );
        document.write( '			   <div class=\"tinyjar-header  tinyjar-header--overlapped   tinyjar-header--size-24 \">\n' );
        document.write( '				  <div class=\"tinyjar-header__makers\">\n' );
        document.write( '					 <div id=\"bg\" class=\"tinyjar-header__image\" style=\"background-image: url(https://tinyjar.b-cdn.net/tinyjar-logo.svg);background-color: black;\"></div>\n' );
        document.write( '				  </div>\n' );
        document.write( '			   </div>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"text\" class=\"widget-button__text\">\n' );
        document.write( '			   by TinyJar\n' );
        document.write( '			</div>\n' );
        document.write( '		 </div>\n' );
        document.write( '	</div>' );

    }
    if(position == 2) {
        document.write( '    <div class=\"body--widget-position--left\">\n' );
        document.write( '		<div id=\"holder\" class=\"m-fadeOut\">\n' );
        document.write( '			<div id=\"thanks\" class=\"float\" style=\" opacity: 1;\">\n' );
        document.write( '				<img src=\"https://tinyjar.b-cdn.net/thanks.svg\" alt=\"TinyJar Thanks\" style=\"width: 64px;\" class=\"btn\">\n' );
        document.write( '            </div>\n' );

        document.write( '            <div id=\"paypal\" class=\"float\" style=\"bottom:250px; display: none;\">\n' );
        document.write( '                <a href=\"https://www.paypal.com\" rel=\"nofollow\" id=\"ppurl\" target=\"_blank\">\n' );
        document.write( '                    <img src=\"https://tinyjar.b-cdn.net/paypal.svg\" alt=\"PayPal\" style=\"width: 50px;border-radius: 100px;\">\n' );
        document.write( '                </a>\n' );
        document.write( '            </div>\n' );
        document.write( '			<div id=\"patreon\" class=\"float\" style=\" display: none;\">\n' );
        document.write( '			   <a href=\"https://www.patreon.com\" rel=\"nofollow\" id=\"paturl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/patreon.svg\" alt=\"Patreon\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"bmc\" class=\"float\" style=\"bottom:190px; display: none;\">\n' );
        document.write( '			   <a href=\"https://www.buymeacoffee.com\" rel=\"nofollow\" id=\"bmcurl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/bmc.svg\" alt=\"BuyMeACoffee\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"kofi\" class=\"float\" style=\"bottom:130px; display: none;\">\n' );
        document.write( '			   <a href=\"https://ko-fi.com\" rel=\"nofollow\" id=\"kofiurl\" target=\"_blank\">\n' );
        document.write( '				   <img src=\"https://tinyjar.b-cdn.net/kofi.svg\" alt=\"ko-fi\" style=\"width: 50px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"me\" class=\"float\" style=\"bottom:50px;\">\n' );
        document.write( '			   <a href=\"https://tinyjar.com\" rel=\"nofollow\" id=\"meurl\" target=\"_blank\">\n' );
        document.write( '				   <img id=\"meimg\" src=\"https://tinyjar.b-cdn.net/tinyjar-logo.svg\" alt=\"user\" style=\"width: 50px; border-radius: 100px;\">\n' );
        document.write( '			   </a>\n' );
        document.write( '		   </div>\n' );

        document.write( '		</div> \n' );
        document.write( '		 <div class=\"widget-button\" id=\"js-widget-button\" onclick=\"tinyjar()\"> \n' );
        document.write( '			<div class=\"widget-button__image-wrap\">\n' );
        document.write( '			   <div class=\"tinyjar-header  tinyjar-header--overlapped   tinyjar-header--size-24 \">\n' );
        document.write( '				  <div class=\"tinyjar-header__makers\">\n' );
        document.write( '					 <div id=\"bg\" class=\"tinyjar-header__image\" style=\"background-image: url(https://tinyjar.b-cdn.net/tinyjar-logo.svg);background-color: black;\"></div>\n' );
        document.write( '				  </div>\n' );
        document.write( '			   </div>\n' );
        document.write( '			</div>\n' );
        document.write( '			<div id=\"text\" class=\"widget-button__text\">\n' );
        document.write( '			   by TinyJar\n' );
        document.write( '			</div>\n' );
        document.write( '		 </div>\n' );
        document.write( '	</div>' );
    }

    document.getElementById("text").innerHTML = txt;
    document.getElementById("meurl").href = myurl;
    document.getElementById("js-widget-button").style.background = bg;
    document.getElementById("js-widget-button").style.cursor = "pointer";
}
if(style == 2){
    var base = 85;
    document.write( '<div id=\"holder\" class=\"m-fadeOut\">\n' );
    document.write( '            <div id=\"thanks\" class=\"float\" style=\"bottom:300px; opacity: 1;\">\n' );
    document.write( '                <img src=\"support.svg\" alt=\"\" style=\"width: 64px;\" class=\"btn\">\n' );
    document.write( '            </div>\n' );

    document.write( '            <div id=\"paypal\" class=\"float\" style=\"bottom:250px; display: none;\">\n' );
    document.write( '                <a href=\"https://www.paypal.com\" rel=\"nofollow\" id=\"ppurl\" target=\"_blank\">\n' );
    document.write( '                    <img src=\"https://tinyjar.b-cdn.net/paypal.svg\" alt=\"\" style=\"width: 50px;border-radius: 100px;\">\n' );
    document.write( '                </a>\n' );
    document.write( '            </div>\n' );
    document.write( '            <div id=\"patreon\" class=\"float\" style=\"bottom:250px; display: none;\">\n' );
    document.write( '                <a href=\"https://www.patreon.com\" rel=\"nofollow\" id=\"paturl\" target=\"_blank\">\n' );
    document.write( '                    <img src=\"https://tinyjar.b-cdn.net/patreon.svg\" alt=\"\" style=\"width: 50px;\">\n' );
    document.write( '                </a>\n' );
    document.write( '            </div>\n' );
    document.write( '            <div id=\"bmc\" class=\"float\" style=\"bottom:190px; display: none;\">\n' );
    document.write( '                <a href=\"https://www.buymeacoffee.com\" rel=\"nofollow\" id=\"bmcurl\" target=\"_blank\">\n' );
    document.write( '                    <img src=\"https://tinyjar.b-cdn.net/bmc.svg\" alt=\"\" style=\"width: 50px;\">\n' );
    document.write( '                </a>\n' );
    document.write( '            </div>\n' );
    document.write( '            <div id=\"kofi\" class=\"float\" style=\"bottom:85px; display: none;\">\n' );
    document.write( '                <a href=\"https://www.ko-fi.com\" rel=\"nofollow\" id=\"kofiurl\" target=\"_blank\">\n' );
    document.write( '                    <img src=\"https://tinyjar.b-cdn.net/kofi.svg\" alt=\"\" style=\"width: 50px;\">\n' );
    document.write( '                </a>\n' );
    document.write( '            </div>\n' );
    document.write( '            \n' );
    document.write( '        </div>\n' );
    document.write( '        <div id=\"tinyjar\" onclick=\"tinyjar()\" style=\"display: block;\">\n' );
    document.write( '            <div id=\"me\" class=\"float\" style=\"bottom:25px; opacity: 1;\">\n' );
    document.write( '                <img id=\"meimg\" src=\"coin logo.svg\" alt=\"\"\n' );
    document.write( '                        style=\"width: 50px; border-radius: 100px;\">\n' );
    document.write( '            </div>\n' );
    document.write( '        </div> ' );

}

var mybutton = document.getElementById("tinyjar");
document.getElementById("meimg").style.cursor = "pointer";



if (pic_url != "") {
    document.getElementById("meimg").src = pic_url;
    if (style == 1) {
        document.getElementById("bg").style.backgroundImage = "url(" + pic_url + ")";
    }
}

if (kofi == 1) {
    document.getElementById("kofi").style.bottom = base + "px";
    document.getElementById("kofi").style.display = "block";
    document.getElementById("kofiurl").href = kofi_url;

    if (bmc == 1) {
        base = base + 60;
        document.getElementById("bmc").style.bottom = base + "px";
        document.getElementById("bmc").style.display = "block";
        document.getElementById("bmcurl").href = bmc_url;
    }
    if (patreon == 1) {
        base = base + 60;
        document.getElementById("patreon").style.bottom = base + "px";
        document.getElementById("patreon").style.display = "block";
        document.getElementById("paturl").href = pat_url;
    }
    base = base + 60;
    
}

if (kofi == 0 && bmc == 1) {
    document.getElementById("bmc").style.bottom = base + "px";
    document.getElementById("bmc").style.display = "block";
    document.getElementById("bmcurl").href = bmc_url;

    if (patreon == 1) {
        base = base + 60;
        document.getElementById("patreon").style.bottom = base + "px";
        document.getElementById("patreon").style.display = "block";
        document.getElementById("paturl").href = pat_url;
    }
    base = base + 60;
    
}

if (kofi == 0 && bmc == 0 && patreon == 1) {
    document.getElementById("patreon").style.bottom = base + "px";
    document.getElementById("patreon").style.display = "block";
    document.getElementById("paturl").href = pat_url;

    base = base + 60;
}

if(paypal == 1) {
    document.getElementById("paypal").style.bottom = base + "px";
    document.getElementById("paypal").style.display = "block";
    document.getElementById("ppurl").href = pp_url;

    base = base + 60;
}


document.getElementById("thanks").style.bottom = base + "px";

function tinyjar() {
    document.getElementById("holder").style.display = "block";
    if (document.getElementById("holder").className != "m-fadeIn") {
        document.getElementById("holder").className = "m-fadeIn";
    } else {
        document.getElementById("holder").className = "m-fadeOut";
    }
}
