$(document).ready(function() {
  
  console.log("jQuery is ready!");

  $('#theme-dark').click(function() {
    $('body').addClass('dark');
  });

  $('#theme-light').click(function() {
    $('body').removeClass('dark');
  });

  $('#btn-hide').click(function() {
    $('#about-section').hide();
  });

  $('#btn-show').click(function() {
    $('#about-section').show();
  });

  $('#btn-toggle').click(function() {
    $('#about-section').toggle();
  });

  $('#fade-out').click(function() {
    $('.pic').fadeOut();
  });

  $('#fade-in').click(function() {
    $('.pic').fadeIn();
  });

  $('#fade-toggle').click(function() {
    $('.pic').fadeToggle();
  });

  $('.panel-header').click(function() {
    $(this).next('.panel-body').slideToggle(200);
  });

  $('#btn-append').click(function() {
    let text = $('#skill-input').val().trim();
    if (text) {
      $('#skill-list').append('<li>' + text + '</li>');
      $('#skill-input').val('');
    }
  });

  $('#btn-prepend').click(function() {
    let text = $('#skill-input').val().trim();
    if (text) {
      $('#skill-list').prepend('<li>' + text + '</li>');
      $('#skill-input').val('');
    }
  });

  $('#btn-remove').click(function() {
    $('#skill-list li').last().remove();
  });

  $('#btn-change-link').click(function() {
    $('#main-link')
      .attr('href', 'https://github.com/ashimbaykaisar00-ui')
      .text('My GitHub');
  });

  $('#input-name').on('input', function() {
    let val = $(this).val();
    $('#out-name').text(val ? val : '...');
  });

  $('#input-email').on('input', function() {
    let val = $(this).val();
    $('#out-email').text(val ? val : '...');
  });

  let active = false;

  $('#btn-animate').click(function() {
    if (!active) {
      $('.progress-bar').each(function() {
        let target = $(this).attr('data-val');
        $(this).animate({ width: target }, 600);
      });
      active = true;
    } else {
      $('.progress-bar').animate({ width: '0%' }, 600);
      active = false;
    }
  });

});