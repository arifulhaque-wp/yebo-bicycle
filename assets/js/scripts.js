

var slider = tns({
  container: '.testimonial__active',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  navPosition: 'bottom',
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    700: {
      gutter: 30,
      items: 1
    },
    900: {
      items: 1
    }
  }
});