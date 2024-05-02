
$('.buttons button').on('click', function () {
    var $self = $(this);
    if (!$self.hasClass('active')) {
      var toggle = $self.data('toggle'); 
  
      // Switch active buttons
      $('.active').removeClass('active');
      $self.addClass('active');
  
      // Switch active forms
      $('form.option').attr('disabled', true);
      $(toggle).addClass('active').attr('disabled', false);
  
      setFormHeight();
    }
  });
  
  $(function () {
    setFormHeight();
  

    $('#credit .cc-number').formatCardNumber();
    $('#credit .cc-expires').formatCardExpiry();
    $('#credit .cc-cvc').formatCardCVC();
  });
  
  function setFormHeight () {
    var activeHeight = $('.option.active').height(),
        submitHeight = $('.form-submit').outerHeight();
    $('.input').animate({
      height: activeHeight + submitHeight + 5
    }, 350);
  }