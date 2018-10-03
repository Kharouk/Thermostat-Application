"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature with up()", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("increases in temperature with down()", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum of 10 degrees", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has power saving mode on by default", function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can switch off the PSM", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can switch the PSM back on", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe("when power saving mode is on", function() {
    it("has a max temp of 25 degrees", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", function() {
    it("has a max temp of 32 degrees", function() {
      thermostat.temperature = 32;
      // thermostat.up();
      expect(function() {
        thermostat.up();
      }).toThrow(new Error("Can't exceed max temp!"));
    });
  });
  describe("it can reset temperature", function() {
    it("resets temperature", function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("Gives energy usage", function() {
    it("Gives low usage when below 18 degrees", function() {
      thermostat.temperature = 17;
      expect(thermostat.powerUsage()).toEqual("Low usage");
    });

    it("Gives mid usage when below 25 degrees", function() {
      thermostat.temperature = 19;
      expect(thermostat.powerUsage()).toEqual("Medium usage");
    });

    it("Gives high usage when above 25 degrees", function() {
      thermostat.temperature = 26;
      expect(thermostat.powerUsage()).toEqual("High usage");
    });
  });
});
