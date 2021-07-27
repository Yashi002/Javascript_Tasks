document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(lazyload, {
    threshold: 0.5;
  });

  var images = document.querySelectorAll('img');
  for(var i = 0; i < images.length; i++) {
    observer.observe(images[i]);
  }
});
