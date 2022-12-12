/* EQUAL INDICADORES */

var heights = $(".equalHeightIndicadores").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".equalHeightIndicadores").height(maxHeight);
/* ============================================================= */
/* =========== AJUSTES AL LOGIN AGO 04 2018 ==================== */
/* ============================================================= */

/* PLACEHOLDER QUE CAMBIA */

$(document).ready(function() {
    $('#o1').change(function() {
        if (this.checked)
            $('#digitosCliente').attr('placeholder', 'Usuario');
        else
            $('#digitosCliente').attr('placeholder', 'No. de Contrato')

    });
});

$(document).ready(function() {
    $('#o2').change(function() {
        if (this.checked)
            $('#digitosCliente').attr('placeholder', 'No. de Contrato');
        else
            $('#digitosCliente').attr('placeholder', 'Usuario')

    });
});
/* PLACEHOLDER QUE CAMBIA MOBILE */
$(document).ready(function() {
    $('#o1M').change(function() {
        if (this.checked)
            $('#digitosClienteM').attr('placeholder', 'Usuario');
        else
            $('#digitosClienteM').attr('placeholder', 'No. de Contrato')

    });
});
$(document).ready(function() {
    $('#o2M').change(function() {
        if (this.checked)
            $('#digitosClienteM').attr('placeholder', 'No. de Contrato');
        else
            $('#digitosClienteM').attr('placeholder', 'Usuario')

    });
});

/* CLIC EN RADIOS NO CIERRA CUADRO LOGIN */
$("#btnLogin").click(function() {
    $("#ingresoRadio").toggle();
    $("#logOpen").toggle();
    $("#logClose").toggle();

});
$("#btnLogin").click(function() {

    $("#caretCambio").toggleClass('ingresoCaret');
    $("#fondoG").toggleClass('bgGris');
});
/* ABRIR CONTACTO TAMBIEN CIERRA LOGIN */
function closeLog() {
    document.getElementById("ingresoRadio").style.display = "none";
    document.getElementById("logOpen").style.display = "none";
    document.getElementById("logClose").style.display = "inline";
    document.getElementById("caretCambio").className = "caretAfm";
    document.getElementById("fondoG").className = "";
}

/* CLIC AUTOMATICO EN LOGIN EN HOME =================update 12/12/2018==========*/

var mediaquery = window.matchMedia("(max-width: 767px)");
if (mediaquery.matches) {
    $("#btnMobile").click();
} else {
    $("#btnLogin").click();
    $("#btnMobile").fadeToggle("slow");
}


/* ============================================================= */
/* ========= FIN AJUSTES AL LOGIN AGO 04 2018 ================== */
/* ============================================================= */


$(window).resize(function() {
    $("#logOpen").hide();
    $("#logClose").show();
    $("#fondoG").removeClass("bgGris");
    $("#caretCambio").removeClass("ingresoCaret");
})


/* MOSTRAR AFIRMENET EN HOME */
$(".dropdown1").click(function() {
    $(".contIngresar").fadeToggle('fast');
    if ($(this).children("a").children(".img1").css("display") == "none") {
        $(this).children("a").children(".img1").css("display", "block");
        $(this).children("a").children(".img2").css("display", "none");
        $(".flechaLogin").css('background', "url('.resources/statics/images/icnCaretOpen.svg') no-repeat");

    } else {
        $(this).children("a").children(".img1").css("display", "none");
        $(this).children("a").children(".img2").css("display", "block");
        $(".flechaLogin").css('background', "url('.resources/statics/images/icnCaretClose.svg') no-repeat");


    }
});

/*BUSCADOR*/

$(".contBuscador").click(function() {
    $(".showBuscador").fadeToggle("fast");
    if ($(this).children("a").children(".img1-B").css("display") == "none") {
        $(this).children("a").children(".img1-B").css("display", "block");
        $(this).children("a").children(".img2-B").css("display", "none");

    } else {
        $(this).children("a").children(".img1-B").css("display", "none");
        $(this).children("a").children(".img2-B").css("display", "block");
    }
});

/* AYUDA */
$(".contAyuda").click(function() {
    $(".showAyuda").fadeToggle("slow");
    if ($(this).children("a").children(".img1-A").css("display") == "none") {
        $(this).children("a").children(".img1-A").css("display", "block");
        $(this).children("a").children(".img2-A").css("display", "none");
        $("span.flechaLogin-ayuda").css('transform', 'rotate(0deg)');

    } else {
        $(this).children("a").children(".img1-A").css("display", "none");
        $(this).children("a").children(".img2-A").css("display", "block");
        $("span.flechaLogin-ayuda").css('transform', 'rotate(0deg)');
    }
});

/* CANCELAR DROPDOWN MENU */
if ($(window).width() >= 1024) {
    $(function() {

        $('.dropdown.hoverActive').hover(function() {
                $(this).addClass('open');

            },
            function() {
                $(this).removeClass('open');
            });
    });
}

/*  MENSAJE INTERNET EXPLORER */
$("#hide").click(function() {
    $(".mensajeIE").fadeOut('slow');
});

/* EQUAL PASOS H01 */

var heights = $(".height01").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".height01").height(maxHeight);

/* EQUAL PASOS H02 */

var heights = $(".height02").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".height02").height(maxHeight);

/* EQUAL PASOS H03 */

var heights = $(".height03").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".height03").height(maxHeight);

/* EQUAL PASOS H04 */

var heights = $(".height04").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".height04").height(maxHeight);

/* FORMATO DE NUMERO */
if ($("#telefono").length > 0) {
    $(function() {
        $('#telefono').mask("#", {
            reverse: true
        });
    });
}
if ($("#celular").length > 0) {
    $(function() {
        $('#celular').mask("#", {
            reverse: true
        });
    });
}
/* MOSTRAR OCULTAR DIV */

$(".btnCalcular").click(function() {
    //$("#EsquemasSimuladorCredito").fadeIn();
    $("#EsquemasSimuladorCredito").fadeIn(1000);
});
/*EQUAL REQUISITOS*/

var heights = $(".requisitosHeight").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);

$(".requisitosHeight").height(maxHeight);

/* CONTACTO */
$(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation()
})
/*  CUENTAS  */
jQuery(function() {
    jQuery(".lnkInfoCuentas").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkInfoCuentas").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

/*SCROOL TO TOP*/
if ($("#myBtn").length > 0) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        $("html, body").animate({
            scrollTop: "0px"
        }, 2000);
    }
}

/*ANCLA FILTO*/

$(document).ready(function() {

    $('.anclas').on('click', function() {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table section').css('display', 'none');
            $('.table section[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table section').css('display', 'none').fadeIn('slow');
        }
    });
});


/*ANCLAS*/


$('.ancla').click(function() {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
    return false;
});

/*FILTRO*/


$(document).ready(function() {

    $('.btn-filter').on('click', function() {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table section').css('display', 'none');
            $('.table section[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table section').css('display', 'none').fadeIn('slow');
        }
    });
});
/* TABLAS */
var heights = $(".fila").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".fila").height(maxHeight);

var heights = $(".filaAlt").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".filaAlt").height(maxHeight);
/*CATEGORIAS*/
var heights = $(".eqaulCat").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".eqaulCat").height(maxHeight);

/* EQUAL ELEMENT HOME */

var heights = $(".equalElement").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalElement").height(maxHeight);

/*EQUAL MODAL*/

var heights = $(".modalHeight").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".modalHeight").height(maxHeight);

/*EQUAL TÍTULOS*/

var heights = $(".linkBlanco").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".linkBlanco").height(maxHeight);



/*EQUAL ICONOS VALORES*/

var heights = $(".icnValores").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".icnValores").height(maxHeight);

/*EQUAL SOLUCIONES*/

var heights = $(".icnVerde").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".icnVerde").height(maxHeight);

/*EQUAL ICONOS BENEFICIOS*/

var heights = $(".imgIcnCtn").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".imgIcnCtn").height(maxHeight);

/**/
/* EQUAL HEIGHT TITLE */
var heights = $(".equalHeightTtl").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalHeightTtl").height(maxHeight);

/* EQUAL HEIGHT TEXT */
var heights = $(".equalHeightTxt").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalHeightTxt").height(maxHeight);

/**/
var heights = $(".ttlPagVisitadas").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".ttlPagVisitadas").height(maxHeight);

var heights = $(".txtIcn").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".txtIcn").height(maxHeight);

/**/
var heights = $(".EqualAltura").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".EqualAltura").height(maxHeight);
/**/

/*Texto Height*/

var heights = $(".EqualAlturaTxt").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".EqualAlturaTxt").height(maxHeight);

/**/

var heights = $(".equal").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equal").height(maxHeight);

/**/
var heights = $(".equalNo").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalNo").height(maxHeight);

/**/

var heights = $(".BGWhiteCtn").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".BGWhiteCtn").height(maxHeight);
/**/
var heights = $(".equalH6").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalH6").height(maxHeight);

/**/

var heights = $(".contWhite").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".contWhite").height(maxHeight);

/* EQUAL COTIZAR */
var heights = $(".elementCotizar").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".elementCotizar").height(maxHeight);

/* EQUAL INFO */
var heights = $(".equalHeight").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalHeight").height(maxHeight);


/* EQUAL HEIGHT TITLE */

var heights = $(".equalHeightTtl").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalHeightTtl").height(maxHeight);

/* EQUAL HEIGHT TEXT */

var heights = $(".equalHeightTxt").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
$(".equalHeightTxt").height(maxHeight);

/*   INVERSIONES-PERSONAS  */
jQuery(function() {
    jQuery(".lnkInfoInversion").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkInfoInversion").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

/*  ANTICIPO DE NÓMINA  */
jQuery(function() {
    jQuery(".lnkInfoAnticipo").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkInfoAnticipo").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

/* RESULTADOS Y PREGUNTAS FRECUENTES*/
$(document).ready(function() {
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

/* TARJETAS DE CREDITO */
jQuery(function() {
    jQuery(".lnkInfoTC").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkInfoTC").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});
var altomax = 0;
$('.EqualAltura').each(function() {
    if ($(this).height() > altomax) {
        altomax = $(this).height();
    }
});
$('.EqualAltura').height(altomax);

/*TARJETA ORO*/
jQuery(function() {
    jQuery(".lnkInfoOro").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkInfoOro").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

/*VER MÁS TABLA CATEGORIAS */

jQuery(function() {
    jQuery(".lnkTabla").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkTabla").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});
/*VER MÁS TABLA 2 */

jQuery(function() {
    jQuery(".lnkTablaAlt").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ver Menos" ? "Ver más" : "Ver Menos");
        $(".lnkTablaAlt").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});
/* VER MAS DETALLE DE CUENTA*/
jQuery(function() {
    jQuery(".lnkInfoTarjetaOro").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ocultar" ? "Ver más" : "Ocultar");
        $(".lnkInfoTarjetaOro").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

jQuery(function() {
    jQuery(".lnkInfoTarjetaVerde").bind("click", function() {
        jQuery(this).text(jQuery(this).text() == "Ocultar" ? "Ver más" : "Ocultar");
        $(".lnkInfoTarjetaVerde").toggleClass("vermas verMenos");
        jQuery(this).prev().slideToggle();
    });
});

/*CREAR, OBTENER COOKIE PARA RECORDAR SELECCION EN LOGIN*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function GetradioValue() {
    var clienteRadio = document.getElementsByName('cliente');
    var clienteValue;
    for (var i = 0; i < clienteRadio.length; i++) {
        if (clienteRadio[i].checked) {
            clienteValue = clienteRadio[i].value;
        }
    }
    return clienteValue;
}

function SetClienteValue(clienteValue) {
    var clienteRadio = document.getElementsByName('cliente');
    for (var i = 0; i < clienteRadio.length; i++) {
        if (clienteRadio[i].value == clienteValue) {
            clienteRadio[i].checked = true;
        }
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$(document).ready(function() {
    SetClienteValue(getCookie("CookieLogin"));
});

function guardar() {
    nameCookie = "CookieLogin"
    nameValorCookie = GetradioValue();
    setCookie(nameCookie, nameValorCookie, 5)
}

/*MODAL ALERTA SALIDA DEL SITIO*/
$("a").click(function(event) {

    if ($(this).attr("id") === "buscador") {
        return true;
    }

    event.preventDefault();

    var url = $(this).attr("href");
    var target = $(this).attr("target");
    var securityPopUp = $(this).data("security-popup");
    var domain = window.location.host;
    var domainRegEx = new RegExp(domain);
    var idModal = $(this).attr("id");

    var variables = {
        url: url,
        target: target,
        securityPopUp: securityPopUp,
        domain: domain,
        idModal: idModal
    };

    if (!url) {
        console.error("URL not valid", variables);
        return false;
    }

    if (url.slice(0, 1) == "#") {
        return true;
    }

    if (typeof idModal !== "undefined" && idModal === "modalAlertSalidaSitioHref") {
        openWindowByUrl(url, target);
    } else if (url.slice(0, 3) === "tel" || url.slice(0, 6) === "mailto" || url.slice(0, 10) === "javascript") {
        openWindowByUrl(url, "_self");
    } else if (typeof securityPopUp === "undefined" || securityPopUp === "hide" || domainRegEx.test(url) || url.slice(0, 1) === "/") {
        openWindowByUrl(url, target);
    } else {
        $("#modalAlertSalidaSitio").modal("show");
        $("#modalAlertSalidaSitioHref").attr("href", url);
        $("#modalAlertSalidaSitioHref").attr("target", target);
    }

});

function openWindowByUrl(url, mode) {

    var win = null;

    if (mode) {
        win = window.open(url, mode);
    } else {
        win = window.open(url, '_self');
    }

    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Allow pop-ups for this website');
    }

}