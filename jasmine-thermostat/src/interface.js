$(document).ready(function() {
  var thermostat = new Thermostat();
  $(".PSM").text("On");
  $(".currentTemperature").text(thermostat.temperature);

  // Find better way then having this in every event?

  $(".powerUsage").text(thermostat.powerUsage());

  $("#increaseButton").click(function(event) {
    thermostat.up();
    $(".powerUsage").text(thermostat.powerUsage());
    $(".currentTemperature").text(thermostat.temperature);
  });

  $("button").click(function(event) {
    if (thermostat.temperature < 18) {
      $(".powerUsage").css("color", "green");
    } else if (thermostat.temperature >= 18 && thermostat.temperature <= 25) {
      $(".powerUsage").css("color", "brown");
    } else {
      $(".powerUsage").css("color", "red");
    }
  });

  $("#decreaseButton").click(function(event) {
    thermostat.down();
    $(".powerUsage").text(thermostat.powerUsage());
    $(".currentTemperature").text(thermostat.temperature);
  });

  $("#resetButton").click(function() {
    thermostat.reset();
    $(".powerUsage").text(thermostat.powerUsage());
    $(".currentTemperature").text(thermostat.temperature);
  });

  $("#powerSavingButtonOn").click(function(event) {
    thermostat.switchPowerSavingModeOn();
    $(".PSM").text("On");
  });

  $("#powerSavingButtonOff").click(function(event) {
    thermostat.switchPowerSavingModeOff();
    $(".PSM").text("Off");
  });

  // $("#errorMessage").text("error");

  $("#btn-submit").click(function() {
    var result = $("#apiCity").val();
    $("#city").text(result);
    $.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${result}&APPID=${
        keys.API_KEY
      }&units=metric`,
      function(temperature) {
        var result = temperature.main.temp;
        $("#apiDegree").text(result);
      }
    );
  });
});
