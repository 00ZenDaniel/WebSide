$(function () {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear() + 1;

    // var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

    $('#timer').countdown({
        date: '9/1/2025', //nextyear, //TODO Date format: 07/27/2017 17:00:00
        offset: 0, //+2,
        day: 'Hari',
        days: 'Hari',
        month: 'Bulan',
        hour: 'Jam',
        hours: 'Jam',
        minute: 'Minit',
        minutes: 'Minit',
        second: 'Saat',
        seconds: 'Saat'
    }, function () {
    });
});