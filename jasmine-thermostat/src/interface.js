$(document).ready(function() {
  var thermostat = new Thermostat();
  $(".currentTemperature").text(thermostat.temperature);
  $(".PSMOn").text("On");

  // Find better way then having this in every event?

  $(".powerUsage").text(thermostat.powerUsage());

  $("#increaseButton").click(function(event) {
    thermostat.up();
    $(".powerUsage").text(thermostat.powerUsage());
    $(".currentTemperature").text(thermostat.temperature);
  });

  $("button").click(function(event) {
    if (thermostat.temperature <= 18) {
      $(".powerUsage").css("color", "green");
    } else if (thermostat.temperature < 25) {
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

  $("#resetButton").click(function(event) {
    thermostat.reset();
    $(".powerUsage").text(thermostat.powerUsage());
    $(".currentTemperature").text(thermostat.temperature);
  });

  $("#powerSavingButtonOn").click(function(event) {
    thermostat.switchPowerSavingModeOn();
    $(".PSMOn").text("On");
  });

  $("#powerSavingButtonOff").click(function(event) {
    thermostat.switchPowerSavingModeOff();
    $(".PSMOn").text("Off");
  });
});
