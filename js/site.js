var responsiveToggle = function(){
    $('#mobile-menu').on('click',function(){
      $('#mn-menu-actual').slideToggle();
    });
}
$( document ).ready(function(){
  responsiveToggle();
});
