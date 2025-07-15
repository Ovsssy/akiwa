document.addEventListener('DOMContentLoaded', function () {
    const $modal_active = jQuery('body,html');

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    if (!getCookie('cookie_modal_shown')) {
        jQuery('#modal-cookie').addClass('modal-show');
        $modal_active.addClass('modal-active');

        setCookie('cookie_modal_shown', 'yes', 1);
    }

    jQuery('[data-modal]').on('click', function (e) {
        e.preventDefault();
        jQuery('.modal-wrap.modal-show').removeClass('modal-show');
        $modal_active.removeClass('modal-active');
        let modalId = jQuery(this).attr('data-modal');
        jQuery('.modal-wrap#' + modalId).addClass('modal-show');
        $modal_active.addClass('modal-active');
    });

    jQuery('.modal-cross, .modal-shadow, .modal-close').on('click', function () {
        jQuery('.modal-wrap.modal-show').removeClass('modal-show');
        $modal_active.removeClass('modal-active');
    });
});