console.log("welcome to apptilus code");

window.onload = function() {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  var sideArea = document.getElementsByClassName('sidebar-area');
  console.log(sideArea);
  if (sideArea.length > 0) {
    var sidebar = new StickySidebar('.sidebar-area', {
      // containerSelector: '#main-content',
      // innerWrapperSelector: '.sidebar__inner',
      topSpacing: 70,
      bottomSpacing: 16
    });
  }

  var asideArea = document.getElementById('aside-area');
  console.log(asideArea)
  if (asideArea) {
    var asideArea = new StickySidebar('#aside-area', {
      // innerWrapperSelector: '.sidebar__inner',
      topSpacing: 70,
      bottomSpacing: 16
    });
  }

}
