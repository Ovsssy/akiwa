var $modal_active =  jQuery('body,html');
jQuery('[data-modal]').on('click', function (e) {
    e.preventDefault();
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    $modal_active.removeClass('modal-active');
    let modalId = jQuery(this).attr('data-modal');
    jQuery('.modal-wrap#' + modalId).addClass('modal-show');
    $modal_active.addClass('modal-active');
});

jQuery('.modal-cross').on('click', function(){
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    $modal_active.removeClass('modal-active');
})
jQuery('.modal-shadow').on('click', function(){
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    $modal_active.removeClass('modal-active');
})

jQuery('.modal-close').on('click', function(){
    jQuery('.modal-wrap.modal-show').removeClass('modal-show');
    $modal_active.removeClass('modal-active');
})
