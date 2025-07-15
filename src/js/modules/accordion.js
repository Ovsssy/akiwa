// старый аккордеон
jQuery(document).ready(function () {
    jQuery('.accordion-item .accordion-title.active .accordion-includes').slideDown(500);
    jQuery('.accordion-title').click(function () {
      var currentAccordion = jQuery(this);
      var accordionIncludes = currentAccordion.siblings('.accordion-includes');
      var icon = currentAccordion.find('.icon'); // Исправлено: ищем иконку внутри текущего аккордеона
  
      if (currentAccordion.hasClass('active')) {
        accordionIncludes.slideUp(500, function() {
          currentAccordion.removeClass('active');
          icon.removeClass('rotate');
        });
      } else {
        jQuery('.accordion-title.active').removeClass('active').siblings('.accordion-includes').slideUp(500);
        jQuery('.icon.rotate').removeClass('rotate');
        currentAccordion.addClass('active');
        accordionIncludes.slideDown(500, function() {
          icon.addClass('rotate'); // Теперь добавляем rotate только к нужной иконке
        });
      }
    });
  });
  
  
  // новый через семантические теги details summary
  (function($) {
    $('.accordion2 details').attr('open','').find('.accordion2_content').css('display','none');
  
    $('.accordion2 details summary').click(function(e) {
      e.preventDefault();
      $(this).parent('details').toggleClass('open');
      $(this).siblings('div.accordion2_content').slideToggle(600);
    });
  })(jQuery);