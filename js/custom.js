(function () {
    'use strict';
    function sendMail() {
        var link = "mailto:" + $('#email').val()
            + "&subject=" + escape("contato com Luiz Paulo")
            + "&body=" + escape($('text').val());
        window.location.href = link;
    }

    function downloadFile(event) {
        event.preventDefault();
        window.location = 'http://luizpaulo.droppages.com/curriculo.pdf'
    }
})();
