var app = app || {};

app.highlight = function(previous) {

    $('#what-we-do ul li.active').removeClass('active');
    previous.next('li').addClass('active');

};

app.scrollWhatWeDo = function() {

    var active = $('#what-we-do ul li.active'),
        next   = '';

    if(active.is(':last-child')) {

        next = $('#what-we-do ul li:first');

    } else {
        next       = active.next('li');
    }

    active.removeClass('active');
    next.addClass('active');

};

$(document).ready(function() {

        setInterval(app.scrollWhatWeDo,3000);

});
