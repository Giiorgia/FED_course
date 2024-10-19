$(document).ready(function(){
    $('.my_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    lightGallery(document.getElementById('my-gallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
      })
  })
 