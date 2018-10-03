document.addEventListener("DOMContentLoaded", function() {

  var main = document.querySelector('.main');
  addMoreClickHandler();
  addDarkModeClickHandler();

  function addMoreClickHandler() {
    var handleMoreClick = function (e) {
      var expandable = e.target.closest('.expandable');
      var more = expandable.getElementsByClassName('more')[0];
      var moreLink = expandable.getElementsByClassName('more-link')[0];
      toggleClass(more, 'hide');
      toggleClass(moreLink, 'hide');
    };
    main.addEventListener('click', function (e) {
      if (e.target.classList.contains('more-link')) handleMoreClick(e);
    });
  }

  function addDarkModeClickHandler() {
    var toggler = document.querySelector('.dark-toggle');
    toggler.addEventListener('click', function (e) {
      toggleClass(document.body, 'dark');
    })
  }


  function toggleClass(el, className) {
    if(el.classList.contains(className)){
       el.classList.remove(className);
      } else {
        el.classList.add(className);
      }
  }
});