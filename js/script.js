$(function() {

    $(".btn-home").on("click", function() {
        $("html, body").animate({scrollTop: 0}, 550);
        $(".header_menu_burger").trigger("click");
    });

    $(".btn-about-us").on("click", function() {
        $("html, body").animate({scrollTop: $(".about_us").offset().top}, 550);
        $(".header_menu_burger").trigger("click");
    });

    $(".btn-services").on("click", function() {
        $("html, body").animate({scrollTop: $(".services").offset().top + 2}, 550);
        $(".header_menu_burger").trigger("click");
    });

    $(".btn-portfolio").on("click", function() {
        $("html, body").animate({scrollTop: $(".portfolios").offset().top + 2}, 550);
        $(".header_menu_burger").trigger("click");
    });

    $(".btn-contact").on("click", function() {
        $("html, body").animate({scrollTop: $(".contact").offset().top  + 2}, 550);
        $(".header_menu_burger").trigger("click");
    });

    $(".header_slider_action>.btn-red").on("click", function() {
        $("html, body").animate({scrollTop: $(".about_us").offset().top}, 550);
    });

    $(".header_slider_action>.btn:first-child, .header_portfolio .btn").on("click", function() {
        $("html, body").animate({scrollTop: $(".portfolios").offset().top + 2}, 550);
    });

    $(".header_carousel").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        slideTransition: "ease-in-out",
        smartSpeed: 700,
        nav: true,
        navText: ["\u003C", "\u003E"],
        navElement: "div",
        navContainer: ".owl-carousel",
        dotsEach: true
    });

    $(".header_menu_burger").click(function() {
        $(this).toggleClass("menu_burger_cross");
        $(".overlay_menu").fadeToggle();
    });

    var project_items;

    function adjustFunc(items) {
        project_items = $(items);
        var count = 0;
        if ($(window).outerWidth() > 991.98) {
            if (project_items.length > 8) {
                for (var i = 0; i < project_items.length; i++) {
                    count++;
                    if (count < 9) {
                        $(project_items[i]).css("display", "block");
                    } else {
                        $(project_items[i]).css("display", "none");
                    }
                }
                $(".load_more").css("display", "inline-block");
            } else {
                for (var i = 0; i < project_items.length; i++) {
                    $(project_items[i]).css("display", "block");
                }
                $(".load_more").css("display", "none");
            }
            $(".load_more").one("click", loadMore);
        } else if ($(window).outerWidth() < 991.98) {
            if (project_items.length > 6) {
                for (var i = 0; i < project_items.length; i++) {
                    count++;
                    if (count < 7) {
                        $(project_items[i]).css("display", "block");
                    } else {
                        $(project_items[i]).css("display", "none");
                    }
                }
                $(".load_more").css("display", "inline-block");
            } else {
                for (var i = 0; i < project_items.length; i++) {
                    $(project_items[i]).css("display", "block");
                }
                $(".load_more").css("display", "none");
            }
            $(".load_more").one("click", loadMore);
        }
    }
    adjustFunc(".project_item");

    $(window).on("resize", function() {
        $(".load_more").off("click", loadMore);
        adjustFunc(".project_item");
        $(".portfolios_lable_item").eq(0).addClass("lable_item_active").siblings().removeClass("lable_item_active");
    });

    function loadMore() {
        project_items.fadeIn({
            duration: 500,
            easing: "easeInCirc"
        });
        $(".load_more").css("display", "none");
    }

    $(".portfolios_lable_item").click(function() {
        $(".load_more").off("click", loadMore);
        $(this).addClass("lable_item_active");
        $(this).siblings().removeClass("lable_item_active");
        var filter = $(this).attr("data-filter");
        $(".project_item").css("display", "none");
        if (filter === "all") {
            $(".project_item").fadeIn({
                duration: 500,
                easing: "easeInCirc"
            });
            adjustFunc(".project_item");
        } else {
            $("." + filter).fadeIn({
                duration: 500,
                easing: "easeInCirc"
            });
            adjustFunc("." + filter);
        }
    });

    $("#accordion").accordion({
        heightStyle: "content",
        icons: {
            "header": "ui-icon-plus",
            "activeHeader": "ui-icon-minus"
        }
    });

    $(".learn_more_btn").click(function() {
        $(this).closest(".team_member").find(".learn_more").dialog({
            create: function() {
                $(".ui-dialog").addClass("learn_more_width");
            },
            open: function() {
                $(".ui-dialog-titlebar-close").html("X")
            },
            show: {
                effect: "blind",
                duration: 700
            },
            resizable: false,
            draggable: false,
            modal: true,
            hide: {
                effect: "clip",
                duration: 700
            },
            close: function() {
                $("body > .ui-dialog").remove();
            }
        });
    });

    $(".send_message_button").click(function() {
        $(this).closest(".contact").find(".message_form").dialog({
            create: function() {
                $(".ui-dialog").addClass("message_form_width");
            },
            open: function() {
                $(".ui-dialog-titlebar-close").html("X")
            },
            show: {
                effect: "blind",
                duration: 700
            },
            resizable: false,
            draggable: false,
            modal: true,
            hide: {
                effect: "clip",
                duration: 700
            },
            close: function() {
                $("body > .ui-dialog").remove();
            }
        });
    });

    $(".drop_cv input[type=file]").change(function() {
        $(".drop_cv").css({
            "color": "#E74C3C",
            "outline-color": "#E74C3C"
        }).find(".icomoon-User + span").text("Has Been Dropped!");
        setTimeout(function() {
            $(".drop_cv form").trigger("submit");
        }, 1000);
    });

    var canvas = document.getElementsByClassName("learn_more_canvas");
    for (var i = 0; i < canvas.length; i++) {
        var ctx = canvas[i].getContext("2d");
        var percent = canvas[i].getAttribute("data-percent");
        var deg = percent * 3.6;
        var rad = (deg * Math.PI / 180) + (Math.PI * 1.5);
        ctx.beginPath();
        ctx.lineWidth = "8";
        ctx.strokeStyle = "#eeeeee";
        ctx.arc(40, 40, 35, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#ec6659";
        ctx.arc(40, 40, 35, Math.PI * 1.5, rad);
        ctx.stroke();
    }

    var interval = false;
    var item_width = $(".opinions_carousel-item").outerWidth();

    $(".opinions_carousel-button-left").on("click", left_carusel);
    $(".opinions_carousel-button-right").on("click", right_carusel);

    function itemDesign(n) {
        $(".opinions_carousel-item").css({
            "height": "45px",
            "width": "60px",
            "opacity": 0.5
        });
        $(".opinions_carousel-item").eq(n).css({
            "height": "80px",
            "width": "95px",
            "opacity": 1
        });
        $(".opinions_carousel-item").eq(n).prev().css({
            "height": "60px",
            "width": "75px",
            "opacity": 0.7
        });
        $(".opinions_carousel-item").eq(n).next().css({
            "height": "60px",
            "width": "75px",
            "opacity": 0.7
        });
        var clientOpinion = $(".opinions_carousel-item").eq(n).attr("data-client");
        $(".client_opinion_item").css("display", "none");
        $("#" + clientOpinion).fadeIn(500);
    }
    itemDesign(2);


    function left_carusel() {
        if (interval) {
            return false;
        }
        $(".opinions_carousel-item").eq(-1).clone().prependTo($(".opinions_carousel-container"));
        $(".opinions_carousel-container").css({
            "left": "-" + item_width + "px"
        });
        $(".opinions_carousel-item").eq(-1).remove();
        itemDesign(2);
        $(".opinions_carousel-container").animate({
            left: "0px"
        }, 300);
        interval = true;
        setTimeout(function() {
            interval = false;
        }, 400);
    }

    function right_carusel() {
        if (interval) {
            return false;
        }
        itemDesign(3);
        $(".opinions_carousel-container").animate({
            left: "-" + item_width + "px"
        }, 300, function() {
            $(".opinions_carousel-item").eq(0).clone().appendTo($(".opinions_carousel-container"));
            $(".opinions_carousel-item").eq(0).remove();
            $(".opinions_carousel-container").css({
                "left": "0px"
            });
        });
        interval = true;
        setTimeout(function() {
            interval = false;
        }, 400);
    }


    function auto_right_carusel() {
        if (!$(".client_opinion_item").is(".hover-carousel") && !$(".opinions_carousel").is(".hover-carousel")) {
            right_carusel();
        }
    }

    var auto_right_interval = setTimeout(function caruselInterval() {
        auto_right_carusel();
        auto_right_interval = setTimeout(caruselInterval, 3000)
    }, 3000);

    $(".client_opinion_item").on("mouseenter", function() {
        $(this).addClass("hover-carousel")
    });
    $(".opinions_carousel").on("mouseenter", function() {
        $(this).addClass("hover-carousel")
    });
    $(".client_opinion_item").on("mouseleave", function() {
        $(this).removeClass("hover-carousel")
    });
    $(".opinions_carousel").on("mouseleave", function() {
        $(this).removeClass("hover-carousel")
    });

    AOS.init({
        once: true,
        duration: 1150
    });

});

function initMap() {
    var styleMap = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 27
            }]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 20
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e6e6e6"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#BFBFBF"
            }, {
                "lightness": 21
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#BFBFBF"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#acacac"
            }, {
                "lightness": 17
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": 29
            }, {
                "weight": 0.2
            }, {
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#929292"
            }, {
                "lightness": 10
            }, {
                "weight": 9
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "weight": 5
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4F4F4F"
            }, {
                "lightness": 10
            }, {
                "weight": 0.2
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [{
                "color": "#000000"
            }]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "labels.icon",
            "stylers": [{
                "color": "#ff0000"
            }]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [{
                "color": "#000000"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#C7C7C7"
            }, {
                "lightness": 17
            }]
        }
    ];

    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 51.563785,
            lng: -0.279127
        },
        zoom: 15.1,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: styleMap
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 51.561785,
            lng: -0.279127
        },
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: "img/marker.png"
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}

google.maps.event.addDomListener(window, 'load', initMap);
