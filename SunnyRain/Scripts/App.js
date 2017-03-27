'use strict';
$(document).ready(function () {
    var url = 'https://api.darksky.net/forecast/';
    var apiKey = '14d84336ffc9fd091dbec78223badbba';
    var unit = 'si';
    var lati = 67.855800;
    var longi = 20.225282;

    jQuery.ajax({
        url: url + apiKey + "/" + lati + "," + longi + "?callback=?&units=" + unit,
        type: 'GET',
        dataType: 'jsonp',
        timeout: 3000,
        success: function (data) {
            $('#currentTemp').html(data.currently.temperature.toFixed(0));
            $('#summaryToday').html(data.currently.summary);
            $('#location').html(data.timezone);
            $('#icon').html(data.currently.icon);

            //new code. Erease if problem
            var icons = new Skycons(),
                list = [
                    "clear-day", "clear-night", "partly-cloudy-day",
                    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                    "fog"
                ],
                i;
            for (i = list.length; i--;)
            {
                icons.set("icon", list[i]);
            }
                

            icons.play();
        },

       


        error: function () {
            $('.weatherWrapper').html('Latest forecast not available, please check the API key');
            $('.forecastWrapper').hide();
        }
    });
});