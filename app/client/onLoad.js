var app = app || {};

//Config
app.intervalLength = 3500;

app.scrollWhatWeDo = function() {

    var active = $('#what-we-do ul li.active'),
        next   = '';

    if(active.is(':last-child')) {

        next = $('#what-we-do ul li:first');

    } else {

        next = active.next('li');

    }

    active.removeClass('active');
    next.addClass('active');

};

$(document).ready(function() {

        app.interval = setInterval(app.scrollWhatWeDo,app.intervalLength);

        $('#what-we-do ul li').hover(function() {

            $('#what-we-do ul li.active').removeClass('active');
            $(this).addClass('active');

            clearInterval(app.interval);

        }, function() {
            app.interval = setInterval(app.scrollWhatWeDo,app.intervalLength);
        });

});
