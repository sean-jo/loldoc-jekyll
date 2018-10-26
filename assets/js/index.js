window.onload = function() {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
    
  }

  var sideArea = document.getElementsByClassName('sidebar-area');
  if (sideArea.length > 0) {
    var sidebar = new StickySidebar('.sidebar-area', {
      // containerSelector: '#main-content',
      // innerWrapperSelector: '.sidebar__inner',
      topSpacing: 70,
      bottomSpacing: 16
    });
  }

  var asideArea = document.getElementById('aside-area');
  if (asideArea) {
    var asideArea = new StickySidebar('#aside-area', {
      // innerWrapperSelector: '.sidebar__inner',
      topSpacing: 70,
      bottomSpacing: 16
    });
  }

}
