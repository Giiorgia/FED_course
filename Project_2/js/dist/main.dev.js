"use strict";

$(document).ready(function () {
  $('.my_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
  });
});
document.addEventListener('DOMContentLoaded', function () {
  lightGallery(document.getElementById('my-gallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500
  });
});
var map = L.map('map').setView([40.668391, -73.920258], 13);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png	', {
  maxZoom: 19
}).addTo(map);