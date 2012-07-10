$(document).ready(function() {

   function setNotice(data) {

var $flash = $("<div>",{
  'class': 'alert alert-success',
   'html': data.data.message 
   });

var $link  = $("<a>",{
   'html': 'x',
  'class': 'close',
   'href': '#',
   'data-dismiss': 'alert'
}).data("dismiss","alert").prependTo( $flash );


    $('#account').html(function(){
  return data.login ? data.email : "Account" 
});
    $(".alert").alert('close')
    $('#main').prepend($flash);
    $('#user_login_box').html(data.content);
       

 
 }

  $('form#sign_in')
  .bind('ajax:success', function(e, data, status, xhr) {
    console.log(data);
    if(data.success) {
      
      
      setNotice(data);
       e.preventDefault();
    } else {
      $('#status').html(data.data.message);
          e.preventDefault();

    }
  });
  
  
  
  $(".logout").click(function(e) {
  e.preventDefault(); 
  });
  
  $(".logout").live('ajax:success', function(e, data, status, xhr){
    setNotice(data);
     e.preventDefault();

  });


  $('.lang').change(function() {
    //alert(this.value);
    window.location.href = this.value;
    e.preventDefault();
   });


});
