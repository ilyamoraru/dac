var element = document.getElementById('check');

var markersData = [
        {
            lat: 59.852763,
            lng: 30.301639,
            name: "Термосервис-Нева",
            address: "Боровая ул., дом 47, корп.2, лит. В",
            cite: 'smk-wik@yandex.ru'
        },
        {
            lat: 59.852761,
            lng: 30.311740,
            name: "Термосервис-Нева",
            address: "Боровая ул., дом 47, корп.2, лит. В",
            cite: 'smk-wik@yandex.ru'
        },
        {
            lat: 59.972046,
            lng: 30.388006,
            name: 'Название компании',
            address: 'Кондратьевский пр., 48',
            cite: 'random-site@mail.ru'
        },
        {
            lat: 59.918333,
            lng: 30.466606,
            name: 'Название компании',
            address: 'ул. Коллонтай, 21 корпус 1, Санкт-Петербург, 193231',
            cite: 'cite-name@mail.ru'
        }
    ];

var infoWindow;
var map;
    

//инициализация карты
function initMap() {

    if(!element) {
        var map = new google.maps.Map(document.getElementById('mapNew'), {
        center: {lat: 59.883589, lng: 30.348106},
        zoom: 14,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        gestureHandling: 'cooperative',
        styles: [
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": "20"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": "17"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "1.2"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "gamma": "1.74"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": "20"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": "21"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "21"
            },
            {
                "gamma": "1.00"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "29"
            },
            {
                "gamma": "1.00"
            },
            {
                "weight": "0.2"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "18"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "16"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": "17"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    }
]
        }); 
        
        var marker1 = new google.maps.Marker({
        position: {lat: 59.883157, lng: 30.338779},
        map: map,
        icon: {
            url: '../img/mapmarker.png',
            size: new google.maps.Size(18,33),
        }
    });
        
    } else {
    
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: new google.maps.LatLng(59.942969,30.377976),
        disableDefaultUI: true,
        scrollwheel: false,
//        draggable: !("ontouchend" in document),
//        gestureHandling: 'cooperative',
        styles: [
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": "20"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": "17"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "1.2"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "gamma": "1.74"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": "20"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": "21"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "21"
            },
            {
                "gamma": "1.00"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "29"
            },
            {
                "gamma": "1.00"
            },
            {
                "weight": "0.2"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "18"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": "16"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": "17"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#b3a17b"
            }
        ]
    }
]
    });
    
    //обратный отклик со списка адресов на карту
        
    var geocoder = new google.maps.Geocoder();
        
    document.getElementById('submit-adres').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
        
    function geocodeAddress(geocoder, resultMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: {
                        url: '../img/mapmarker.png',
                        size: new google.maps.Size(18,33),
                    }
                });
                var contentString = '<div id="content">' +
                                    '<h3 class="info-name">' + name + '</h3>' +
                                    '<p class="address-info">' + address + '</p>' +
                                    '<a href="#" class="info-link">' + cite + '</a>' +
                                    '</div>';
                infoWindow.setContent(contentString);
                // Показываем информационное окно
                infoWindow.open(map, marker);
                
            } else  {
                return false;
            }
        })
    }
        
   infoWindow = new google.maps.InfoWindow();
    
    google.maps.event.addListener(map,'click',function() {
        infoWindow.close();
    });
    
    var bounds = new google.maps.LatLngBounds();
    
    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        var cite = markersData[i].cite;
        // Добавляем маркер с информационным окном
        addMarker(latLng, name, address, cite);
        bounds.extend(latLng);
    }   
//    подгоняем размер карты под маркеры
    map.fitBounds(bounds);
    
    google.maps.event.addDomListener(window, "load", initMap);
    // Функция добавления маркера с информационным окном
    function addMarker(latLng, name, address, cite) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: name,
            icon: {
                url: '../img/mapmarker.png',
                size: new google.maps.Size(18,33),
            }
    });
    // Отслеживаем клик по маркеру
    google.maps.event.addListener(marker, "click", function() {
        //содержимое информационного окна.
        var contentString = '<div id="content">' +
                                '<h3 class="info-name">' + name + '</h3>' +
                                '<p class="address-info">' + address + '</p>' +
                                '<a href="#" class="info-link">' + cite + '</a>' +
                            '</div>';
        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);
        // Показываем информационное окно
        infoWindow.open(map, marker);
    });
}
    }
}
   
$(document).ready(function() {
    
    //maps control
    
    $('.address-item').click(function() {
        var a = $(this).find('.address');
        var b = a.text();
        $('#address').val(b);
        $('#submit-adres').click();
        
    });
    
    $('#submit-adres').on('click', function() {
        $('#content').parent().parent().parent().siblings().remove();
    })
    
    //scroll on buy
    if(window.matchMedia('(min-width: 440px)').matches) { 
        $('.address-list').mCustomScrollbar({
            theme: 'rounded',
        });
    };
    
    //скрываем bg у infowindow, ибо белый 
    
     if(window.matchMedia('(max-width: 440px)').matches) { 
        $('#map, body, .address-item, html, .page-content , div').on('click touchstart touch',function() {
            setTimeout(Hide, 100);
            function Hide() {
              var a = $('#content').parent().parent().parent().siblings();
              a.css('display','none');
            } 
        });
    } else {
        $('#map, body, .address-item, html, .page-content , div').on('click touchstart',function() {
            setTimeout(Hide, 10);
            function Hide() {
                $('#content').parent().parent().parent().siblings().remove();
            }
        });
    };
    
    //search form header 
    
    $('.form').click(function() {
        $('.header-nav').css('display', 'none');
        $('.header-search').css('display', 'flex');
        
        if(window.matchMedia('(max-width: 440px)').matches) {
            $('.header-logo').css('display','none');
            $('.burger-menu').css('display','none');
            $('.form').css('display','none');
        };
    });
    
    $('.mdi-window-close').click(function() {
        $('.header-search').css('display','none');
        $('.header-nav').css('display','flex');
        
        if(window.matchMedia('(max-width: 440px)').matches) {
            $('.header-search').css('display','none');
            $('.header-logo').css('display','block');
            $('.burger-menu').css('display','block');
            $('.form').css('display','block');  
        };
    });
    
    //burger-menu 
    
    $('.burger-icon').click(function() {
       if($('.burger-icon').hasClass('burger-icon-close')) {
           $('.burger-icon-close').removeClass('burger-icon-close');
           $('.burger-icon').addClass('burger-icon-show');
           $('.header-menu').addClass('header-menu-show');
           $('html, body').css('overflow','hidden');
           $('.hidden-head-text').css('display','none');
           $('.header').css('top','0');
       } else {
           $('.burger-icon').removeClass('burger-icon-show');
           $('.burger-icon').addClass('burger-icon-close');
           $('.header-menu').removeClass('header-menu-show');
           $('html, body').css('overflow','auto');
       }
    });
    
    //opacity header
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 67) {
            $('.header-top').css('background','rgba(50,50,50,0.8)');     
        } else {
            $('.header-top').css('background','rgba(50,50,50,1)');
        };
    });
    
    //оборудование popup десктоп
    
    //оборудование popup десктоп
    
    $('.product-button').click(function() {
        $('.product-button').addClass('this-nav');
        $('.hidden-head-text').css('display','none');
        $('.header').css('top', '0');
        $('.header').toggleClass('header-scoll');
        $('.header-bottom_icons').removeClass('header-close');
        $('.header-bottom_icons').addClass('header-show');
        $('html,body').css('overflow','hidden');
    });
    
    $('.icon-item').click(function() {
        $('.icon-item').removeClass('this-desc');
        $(this).addClass('this-desc');
        $('.header-bottom_products').removeClass('header-close');
        $('.header-bottom_products').addClass('header-show');
    });
    
    //close
    
     $('.close-products').click(function() {
        $('.product-button').removeClass('this-nav');
        $('.header').toggleClass('header-scoll');
        $('.header-bottom_icons').addClass('header-close');
        $('.header-bottom_products').addClass('header-close');
        $('html,body').css('overflow','auto');
    });
    
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            $('.product-button').removeClass('this-nav');
            $('.header').toggleClass('header-scoll');
            $('.header-bottom_icons').addClass('header-close');
            $('.header-bottom_products').addClass('header-close');
            $('html,body').css('overflow','auto');
        }
     });
    
    //sliders
    
    $('.index-slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.index-slider2,.index-sliderNav,.pag-top',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    $('.index-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.index-slider1,.index-sliderNav,.pag-top',
        fade: true,
        responsive: [
            {
                breakpoint: 440,
                settings: {
                    dots: true,
                }
            }
        ]
    });
    
    $('.index-sliderNav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: '.index-slider2,.index-slider1,.pag-top',
        centerMode: true,
        focusOnSelect: true,
    });
    
    $('.pag-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.index-slider2,.index-slider1,.index-sliderNav',
    });
    
    //события для кругов
    
    if($('section').hasClass('index-block1')) {
        $('#cicrle-black').circleProgress({
        value: 1,
        size: 60,
        fill: {
            gradient: ['#000000', 'rgba(0,0,0,0.5)']
        }
    });
    
        $('.circle-gold').circleProgress({
            value: 1,
            size: 60,
            fill: {
                gradient: ['#C7A663', '#DEB96F']
            }
        });
    };
    
    $('.index-slider2').on('beforeChange', function(event, slick, currentSlide) {
        $('#cicrle-black').circleProgress({
            value: 0,
            size: 60,
            fill: 'black',
        });
    });
    
    $('.index-slider2').on('afterChange', function(event, slick, currentSlide) {
        $('#cicrle-black').circleProgress({
            value: 1,
            size: 60,
            fill: {
                gradient: ['#000000', 'rgba(0,0,0,0.5)']
            }
        });
    });
    
    $('.index-block4_slider').on('beforeChange', function(event, slick, currentSlide) {
        $('.circle-gold').circleProgress({
            value: 0,
            size: 60,
            fill: {
                gradient: ['#C7A663', '#DEB96F']
            }
        });
    });
    
    $('.index-block4_slider').on('afterChange', function(event,slick,currentSlide) {
        $('.circle-gold').circleProgress({
            value: 1,
            size: 60,
            fill: {
                gradient: ['#C7A663', '#DEB96F']
            }
        });
    });
    
    $('.index-slider3').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 3500,
    });
    
    $('.index-page5-slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button id="prev" type="button" class="prev-btn">',
        nextArrow: '<button id="next" type="button" class="next-btn">',
        //mobileFirst: true,
        responsive: [
        {
          breakpoint: 1370,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }  
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 439,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    });
    
    $('.footer-top').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })
    
    //index slider3 images

    $('.index-slider3').on('beforeChange',function(event,slick,currentSlide) {
        if(currentSlide == 0) {
            $('.slide1-left-img').addClass('this-transform');
            $('.slide1-right-img').addClass('this-transformRight');
            $('.left-img, .right-img').removeClass('this-opacity');
            $('.slide2-left-img, .slide2-right-img').addClass('this-opacity');
            
        } else if (currentSlide == 1) {
            $('.slide2-left-img').addClass('this-transform');
            $('.slide2-right-img').addClass('this-transformRight');
            $('.left-img, .right-img').removeClass('this-opacity');
            $('.slide3-left-img, .slide3-right-img').addClass('this-opacity');
        } else if (currentSlide == 2) {
            $('.slide3-left-img').addClass('this-transform');
            $('.slide3-right-im').addClass('this-transformRight');
            $('.left-img, .right-img').removeClass('this-opacity');
            $('.slide1-left-img, .slide1-right-img').addClass('this-opacity');
        }
    });
    
    //index slider 2 number of slide
    
    $('.index-slider3').on('afterChange', function(event, slick, currentSlide) {
        $('.counter-block3').text('0' + (currentSlide + 1));
    });
    
    
    
    $('.index-block4_slider').slick({
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
        dots: true,
        appendDots: $('.block4-slider')
    });
    
    $('.index-block4_slider').on('afterChange', function(event, slick, direction) {
        console.log(direction);
        
        //var center = $('.index-block4_slider .slick-center');
        
        if(direction == 2) {
            $('.index-block4_slider .slick-dots li').removeClass('slick-active');
            $('.index-block4_slider .slick-dots li:nth-of-type(3)').addClass('slick-active');
        } if(direction == 1) {
            $('.index-block4_slider .slick-dots li').removeClass('slick-active');
            $('.index-block4_slider .slick-dots li:nth-of-type(2)').addClass('slick-active');
        }
    });
    
    //index slider1 pagination
    
    $('.slick-center').prev().addClass('small');
    
    function sliderSmall() {
        $('.slick-center').prev().addClass('small');
        $('.slick-center').next().removeClass('small');
    };
    
    $('.pag-top, .index-slider1, .index-sliderNav, .index-slider2').click(function() {
        sliderSmall();
    });
    
    $('.index-sliderNav').on('beforeChange',function(event,slick,direction){
        sliderSmall();
    });
    
    //alert's text
    
    $('.close-hidden-text').click(function() {
        $('.hidden-head-text').css('display','none');
        $('.header').css('top', '0');
    });
    
    //slider product page
    //хз почему тут не отрабатывает свойство responsive. получился костыль ниже
    
    if(window.matchMedia('(max-width: 440px)').matches) { 
        $('.model-slider1').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button id="prev" type="button" class="prev-btn">',
            nextArrow: '<button id="next" type="button" class="next-btn">',
        });
    } else {
        $('.model-slider1').slick({
            arrows: true,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button id="prev" type="button" class="prev-btn">',
            nextArrow: '<button id="next" type="button" class="next-btn">',
        });
    };
    
    
    
//    $('.model-slider1').slick({
//        arrows: true,
//        dots: true,
//        slidesToShow: 2,
//        slidesToScroll: 1,
//        fade: false,
//        prevArrow: '<button id="prev" type="button" class="prev-btn">',
//        nextArrow: '<button id="next" type="button" class="next-btn">',
//        //mobileFirst: true,
//        responsive: [
//            {
//                breakpoint: 440,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    arrows: false,
//                }
//            }
//        ]
//    });
//    
    
    //страница товара моб.
    if(window.matchMedia('(max-width: 440px)').matches) { 
        $('.features-list').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        })
    };
    
    //страница товара десктоп
    
    $('.category-name').click(function() {
        
        var b = $(this).parent('.category-item');
        var a = b.find('.model-slider2');
        $('.category-item').removeClass('open-set');
        $('.model-slider2').removeClass('model-slider2_show');
        
        if(b.hasClass('open-set')) {
            b.removeClass('open-set');
            a.removeClass('model-slider2_show');
        } else {
            b.addClass('open-set');
            a.addClass('model-slider2_show');
            if($('.model-slider2_show').hasClass('slick-slider')) {
                console.log('lolo');
            } else {
                $('.model-slider2_show').slick({
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                    sliderToScroll: 1,
                    fade: true,
                }); 
            }
        }
    });
    
    
    
    
    $('.eq-slider').slick({
        slidesToShow: 1,
        sliderToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        //centerPadding: '60px',
    });
    
    if(window.matchMedia('(max-width: 440px)').matches) {
        $('.catalog-list').slick({
            arrows: false,
            dots: true,
            centerMode: true,
        });
    }
    
    //buy mobile
    
    if(window.matchMedia('(max-width: 440px)').matches) {
        $('.address-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: false,
            //verticalSwiping: true,
            vertical: false,
            
        });
    };
    
    //селектор страниц сверху
    
    var list = $('.slider-top_item');
    var progress = $('.slider-top_progress');
    
    $('.slider-top_item').click(function(){
        var index = list.index(this);
        $('.slider-top_item').removeClass('this-item');
        $(this).addClass('this-item');
        
        //заполнение div ниже
        
        if(index == 0) {
            progress.removeClass('before2');
            progress.removeClass('before3');
            progress.removeClass('before4');
            progress.removeClass('before5');
            progress.removeClass('before6');
            progress.removeClass('before1');
        }
        
        if(index == 2) {
            progress.removeClass('before2');
            progress.removeClass('before3');
            progress.removeClass('before4');
            progress.removeClass('before5');
            progress.removeClass('before6');
            progress.addClass('before1'); 
        }
        
        if(index == 3) {
            progress.removeClass('before1');
            progress.removeClass('before3');
            progress.removeClass('before4');
            progress.removeClass('before5');
            progress.removeClass('before6');
            progress.addClass('before2');
        }
        
        if(index==6) {
            progress.removeClass('before2');
            progress.removeClass('before1');
            progress.removeClass('before4');
            progress.removeClass('before5');
            progress.removeClass('before6');
            progress.addClass('before3');
        }
        
        if(index==8) {
            progress.removeClass('before2');
            progress.removeClass('before3');
            progress.removeClass('before1');
            progress.removeClass('before5');
            progress.removeClass('before6');
            progress.addClass('before4');
        }
        
        if(index==10) {
            progress.removeClass('before2');
            progress.removeClass('before3');
            progress.removeClass('before4');
            progress.removeClass('before1');
            progress.removeClass('before6');
            progress.addClass('before5');
        }
        
        if(index==12) {
            progress.removeClass('before2');
            progress.removeClass('before3');
            progress.removeClass('before4');
            progress.removeClass('before5');
            progress.removeClass('before1');
            progress.addClass('before6');
        }
    
    });
    
    //breadscrumbs in docs
    
    //вниз по дереву
    
   
    
    $('.doc-list  .doc-item  p').click(function() {
        //скрываем первый уровень
        $('.first-level').css('display','none');
        
        //моб крошки
        if(window.matchMedia('(max-width: 440px)').matches) {
            $('.bread-mobile').css('display','block');
        }
        
        //2 уровень
        if(!$('.bread-item:nth-of-type(2)').hasClass('opened')) {
            $('.this-folder').removeClass('this-folder');
            $('.this-folder .doc-list_inner').addClass('not-open');
            $('.bread-item:nth-of-type(2)').empty();
            //сбрасываем текст
            $('.doc-list  .doc-item  p').removeClass('open');
            //показываем какой текст перезаписать в крошки
            $(this).addClass('open');
            var text = $('.open').text();
            //перезаписываем
            $('.bread-item:nth-of-type(2)').html(text);
            $('.bread-item:nth-of-type(2)').removeClass('not-active');
            $('.bread-item:nth-of-type(2)').removeClass('not-open');
            $('.bread-item:nth-of-type(2)').addClass('opened');
            //подсвечиваем предыдущий
            $('.bread-item:first-of-type').addClass('not-active');
            //открываем внутреннюю директорию
            $(this).parent('.doc-item').addClass('this-folder');
            $('.this-folder .doc-list_inner').removeClass('not-open');
            $('.second-level').css('display','block');
            //3 уровень
        } else if ($('.bread-item:nth-of-type(2)').hasClass('opened') && !$('.bread-item:nth-of-type(3)').hasClass('opened')){
            $('.this-folder .inner-docs-list').addClass('not-open');
            $('.bread-item:nth-of-type(3)').empty();
            $('.doc-list  .doc-item  p').removeClass('open');
            //подсвечиваем
            $('.bread-item:nth-of-type(2)').addClass('not-active');
            $('.bread-item:nth-of-type(3)').addClass('opened');
            //скрываем 2 уровень
            $('.second-level').css('display','none');
            $('.third-level').css('display','flex');
            $('.this-folder').removeClass('this-folder');
            //меняем текст на 3 крошке и показываем
            $(this).addClass('open-in')
            var text1 = $('.open-in').text();
            $('.bread-item:nth-of-type(3)').html(text1);
            $('.bread-item:nth-of-type(3)').removeClass('not-open');
            $('.bread-item:nth-of-type(3)').removeClass('not-active');
            $(this).addClass('open');
            $(this).parent('.doc-item').addClass('this-folder');
            $('.this-folder .inner-docs-list').removeClass('not-open');
        }        
        if($('.bread-item:nth-of-type(3)').hasClass('opened')) {
            $('.second-level').css('display','none');  
        };
        
        if($('.bread-item:nth-of-type(4)').hasClass('opened')) {
            $('.second-level').css('display','none');  
            $('.third-level').css('display','none');
        }
    });
    
    //4 уровень
    
    $('.third-level').click(function() {
        //хлебные крошки
        $('.bread-item:nth-of-type(4)').empty();
        $('.bread-item:nth-of-type(3)').addClass('not-active');
        $('.bread-item:nth-of-type(4)').addClass('opened');
        $('.bread-item:nth-of-type(4)').removeClass('not-open');
        $('.bread-item:nth-of-type(4)').removeClass('not-active');
        $(this).addClass('open-in-in');
        var text2 = $('.open-in-in').text();
        $('.bread-item:nth-of-type(4)').html(text2);
        //папки
        
        //открываем внутреннюю директории
        $('.this-folder').removeClass('this-folder');
        $(this).parent('.inner-docs-item').addClass('this-folder');
        $('.this-folder .fourth-level_list').removeClass('not-open');
        
        $('.third-level').css('display','none');
        $('.fourth-level').css('display','flex');         
    });
    
    //вверху по дереву
    
    //3 уровень
    
    $('.bread-item:nth-of-type(3)').click(function() {
        //хлебные крошки
        $('.bread-item:nth-of-type(4)').addClass('not-active');
        $('.bread-item:nth-of-type(3)').removeClass('not-active');
        $('.bread-item:nth-of-type(4)').removeClass('opened');
        $('.bread-item:nth-of-type(4)').addClass('not-open');
        $('.bread-item:nth-of-type(3)').addClass('opened');
        $('.bread-item:nth-of-type(4)').empty();
        //дерево
        
        $('.fourth-level').css('display','none');
        $('.third-level').css('display','flex');
        
        $('.third-level').removeClass('open');
        $('.doc-list  .doc-item  p').removeClass('open-in');
        $('.third-level').removeClass('open-in-in');
        $('.this-folder .fourth-level_list').addClass('not-open');
        $('.this-folder').removeClass('this-folder');
    });
    
    //2уровень
    
    $('.bread-item:nth-of-type(2)').click(function() {
        //хлебные крошки
        $('.bread-item:nth-of-type(4)').addClass('not-active');
        $('.bread-item:nth-of-type(4)').removeClass('opened');
        $('.bread-item:nth-of-type(4)').addClass('not-open');
        $('.bread-item:nth-of-type(4)').empty();
        
        $('.bread-item:nth-of-type(3)').addClass('not-active');
        $('.bread-item:nth-of-type(2)').removeClass('not-active');
        $('.bread-item:nth-of-type(3)').removeClass('opened');
        $('.bread-item:nth-of-type(3)').addClass('not-open');
        $('.bread-item:nth-of-type(2)').addClass('opened');
        $('.bread-item:nth-of-type(3)').empty();
        //дерево
        $('.third-level').css('display','none');
        $('.fourth-level').css('display','none');
        $('.second-level').css('display','block');
        
        $('.doc-list  .doc-item  p').removeClass('open');
        $('.doc-list  .doc-item  p').removeClass('open-in');
        $('.third-level').removeClass('open-in-in');
        $('.this-folder .doc-list_inner').removeClass('not-open');
        //$('.this-folder').removeClass('this-folder');
        
        $('.doc-list  .doc-item  p').removeClass('open-in');
        
        $('.this-folder .fourth-level_list').addClass('not-open');
        $('.this-folder .inner-docs-list').addClass('not-open');
        $('.this-folder').removeClass('this-folder');
        
        if(!$('.inner-docs-list').parent('.doc-item').hasClass('this-folder')) {
            $('.inner-docs-list').addClass('not-open');
        }
    });
    
    //1 уровень
    
    $('.bread-item:first-of-type').click(function() {
        
        $('.bread-item:nth-of-type(4)').addClass('not-active');
        $('.bread-item:nth-of-type(4)').removeClass('opened');
        $('.bread-item:nth-of-type(4)').addClass('not-open');
        $('.bread-item:nth-of-type(4)').empty();
        //хлебные крошки
        $('.bread-item:nth-of-type(3)').addClass('not-active');
        $('.bread-item:nth-of-type(3)').removeClass('opened');
        $('.bread-item:nth-of-type(3)').addClass('not-open');
        $('.bread-item:nth-of-type(2)').addClass('not-active');
        $('.bread-item:nth-of-type(2)').removeClass('opened');
        $('.bread-item:nth-of-type(2)').addClass('not-open');
        $('.bread-item:first-of-type').removeClass('not-active');
        $('.bread-item:nth-of-type(3)').empty();
        $('.bread-item:nth-of-type(2)').empty();
        //дерево
        $('.fourth-level').css('display','none');
        $('.third-level').css('display','none');
        $('.second-level').css('display','none');
        $('.first-level').css('display','block');
        
        $('.doc-list  .doc-item  p').removeClass('open');
        $('.doc-list  .doc-item  p').removeClass('open-in');
        
        if(!$('.doc-list_inner').parent('.doc-item').hasClass('this-folder')) {
            $('.doc-list_inner').addClass('not-open');
        }
        
        if(!$('.inner-docs-list').parent('.doc-item').hasClass('this-folder')) {
            $('.inner-docs-list').addClass('not-open');
        }
        $('.third-level').removeClass('open');
        $('.doc-list  .doc-item  p').removeClass('open-in');
        $('.third-level').removeClass('open-in-in');
        $('.this-folder .fourth-level_list').addClass('not-open');
        $('.this-folder .doc-list_inner').addClass('not-open');
        $('.this-folder .inner-docs-list').addClass('not-open');
        $('.this-folder').removeClass('this-folder');
    });
    
    //mobile 
    
    $('.back-button').click(function() {
        
        if($('.bread-item:nth-of-type(4)').hasClass('opened')) {
            //$('.bread-mobile').css('display','none');
            $('.bread-item:nth-of-type(3)').addClass('opened')
            //хлебные крошки
            $('.bread-item:nth-of-type(4)').addClass('not-active');
            $('.bread-item:nth-of-type(4)').removeClass('opened');
            $('.bread-item:nth-of-type(4)').addClass('not-open');
            $('.bread-item:nth-of-type(4)').empty();
            //хлебные крошки
            $('.bread-item:nth-of-type(3)').addClass('not-active');
            $('.bread-item:nth-of-type(3)').removeClass('opened');
            $('.bread-item:nth-of-type(3)').addClass('not-open');
            $('.bread-item:nth-of-type(2)').addClass('not-active');
            $('.bread-item:nth-of-type(2)').removeClass('opened');
            $('.bread-item:nth-of-type(2)').addClass('not-open');
            $('.bread-item:first-of-type').removeClass('not-active');
            $('.bread-item:nth-of-type(3)').empty();
            $('.bread-item:nth-of-type(2)').empty();
            $('.bread-item:nth-of-type(3)').addClass('opened')
            //дерево 
            
            $('.fourth-level').css('display','none');
            $('.third-level').css('display','block');
            
            $('.doc-list  .doc-item  p').removeClass('open');
            $('.doc-list  .doc-item  p').removeClass('open-in');
            $('.third-level').removeClass('open-in-in');
            
            $('.this-folder .fourth-level_list').removeClass('not-open');
            $('.this-folder').removeClass('this-folder');
        }
        
       if($('.bread-item:nth-of-type(3)').hasClass('opened')) {
           //хлебные крошки
            $('.bread-item:nth-of-type(3)').addClass('not-active');
            $('.bread-item:nth-of-type(2)').removeClass('not-active');
            $('.bread-item:nth-of-type(3)').removeClass('opened');
            $('.bread-item:nth-of-type(3)').addClass('not-open');
            $('.bread-item:nth-of-type(2)').addClass('opened');
            $('.bread-item:nth-of-type(3)').empty();
            $('.bread-item:nth-of-type(4)').addClass('not-active');
            $('.bread-item:nth-of-type(4)').removeClass('opened');
            $('.bread-item:nth-of-type(4)').addClass('not-open');
            $('.bread-item:nth-of-type(4)').empty();
            //дерево
            $('.third-level').css('display','none');
            $('.second-level').css('display','block');

            $('.doc-list  .doc-item  p').removeClass('open');
            $('.doc-list  .doc-item  p').removeClass('open-in');
            $('.third-level').removeClass('open-in-in');
            $('.this-folder .doc-list_inner').removeClass('not-open');
            //$('.this-folder').removeClass('this-folder');

            $('.doc-list  .doc-item  p').removeClass('open-in');

            $('.this-folder .inner-docs-list').addClass('not-open');
            $('.this-folder').removeClass('this-folder');
       };
        
        if($('.bread-item:nth-of-type(2)').hasClass('opened')) {
            $('.bread-mobile').css('display','none');
            //хлебные крошки
            $('.bread-item:nth-of-type(3)').addClass('not-active');
            $('.bread-item:nth-of-type(3)').removeClass('opened');
            $('.bread-item:nth-of-type(3)').addClass('not-open');
            $('.bread-item:nth-of-type(2)').addClass('not-active');
            $('.bread-item:nth-of-type(2)').removeClass('opened');
            $('.bread-item:nth-of-type(2)').addClass('not-open');
            $('.bread-item:first-of-type').removeClass('not-active');
            $('.bread-item:nth-of-type(3)').empty();
            $('.bread-item:nth-of-type(2)').empty();
            $('.bread-item:nth-of-type(4)').addClass('not-active');
            $('.bread-item:nth-of-type(4)').removeClass('opened');
            $('.bread-item:nth-of-type(4)').addClass('not-open');
            $('.bread-item:nth-of-type(4)').empty();
            //дерево
            $('.third-level').css('display','none');
            $('.second-level').css('display','none');
            $('.first-level').css('display','block');

            $('.doc-list  .doc-item  p').removeClass('open');
            $('.doc-list  .doc-item  p').removeClass('open-in');

            if(!$('.doc-list_inner').parent('.doc-item').hasClass('this-folder')) {
                $('.doc-list_inner').addClass('not-open');
            }
            
            $('.this-folder .doc-list_inner').addClass('not-open');
            $('.this-folder .inner-docs-list').addClass('not-open');
            $('.this-folder').removeClass('this-folder');    
        } 
    });
    
    //показать фильтры на карте планшет
    
    $('.desctop-hidden_show').click(function() {
        if($('.desctop-hidden_show').hasClass('close')) {
            $('.desctop-hidden_show').removeClass('showed');
            $('.filter-wrap').removeClass('filter-wrap-show');
            $('.filter-wrap').addClass('filter-wrap-hidden');
            $('.desctop-hidden_show').removeClass('close');
        } else {
            $('.desctop-hidden_show').addClass('showed');
            $('.filter-wrap-hidden').addClass('filter-wrap-show');
            $('.filter-wrap-hidden').removeClass('filter-wrap-hidden');
            $('.desctop-hidden_show').addClass('close');
        }
    });
    
    //страница товара описание 
    
    $('.open-info').click(function() {
        if($('.open-info').hasClass('opened')) {
            $('.open-info').removeClass('opened');
            $('.info').removeClass('info-open');
        } else {
            $('.info').addClass('info-open');
            $('.open-info').addClass('opened');
        }
    });
    
   //увеличение img
    
    $('.modal-img').click(function() {        
        if($(this).hasClass('img-open')) {
            $('.modal-overlay').css('display','none');
            $('.header').css('display','flex');
            $('.modal-img').removeClass('img-open');
            $('body,html').removeClass('body-scroll');
        } else {
            $('body,html').addClass('body-scroll');
            $('.modal-overlay').css('display','block');
            $('.header').css('display','none');
            $(this).addClass('img-open');
        }
    });
    
    $('.modal-overlay').click(function() {
        $('.modal-overlay').css('display','none');
        $('.header').css('display','flex');
        $('.modal-img').removeClass('img-open');
        $('body,html').removeClass('body-scroll');
    });                            
});