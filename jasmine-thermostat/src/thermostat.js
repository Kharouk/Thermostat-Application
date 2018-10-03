"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }

  if (this.temperature > this.MAX_LIMIT_PSM_OFF) {
    throw new Error("Can't exceed max temp!");
  } else if (this.temperature > this.MAX_LIMIT_PSM_ON) {
    throw new Error("Can't exceed max temp!");
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) {
    return "Low usage";
  } else if (this.temperature >= 18 && this.temperature <= 25) {
    return "Medium usage";
  } else {
    return "High usage";
  }
};
