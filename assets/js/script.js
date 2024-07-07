function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".burger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// $(document).ready(function(){
//   $("a").on('click', function(event){
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;

//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     }
// })

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
