/* eslint-disable func-names */
const Emitter = require('events').EventEmitter;
const util = require('util');

const ReviewProcess = function (args) {
  let callback;

  // make sure the app is valid
  this.ensureAppValid = function (app) {
    if (app.isValid()) {
      this.emit('validated', app);
    } else {
      this.emit('invalid', app.validationMessage());
    }
  };

  // find the next mission
  this.findNextMission = function (app) {
    // stub out because of unknowns
    app.mission = {
      commander: null,
      pilot: null,
      MAVPilot: null,
      passengers: [],
    };
    this.emit('mission is selected', app);
  };

  // make sure role selected is available
  this.roleIsAvailable = function (app) {
    // TODO: need more info
    this.emit('role-available', app);
  };

  // make sure height/weight/age is right for role
  this.ensureRoleCompatible = function (app) {
    // stub
    this.emit('role-compatible', app);
  };

  // accept application
  this.acceptApplication = function (app) {
    callback(null, {
      success: true,
      message: 'Welcome to the Mars Program!',
    });
  };

  // deny application
  this.denyApplication = function (app) {
    callback(null, {
      success: false,
      message,
    });
  };

  // process application
  this.processApplication = function (app, next) {
    this.emit('processing application', app);
    callback = next;
  };

  // event path
  this.on('application-received', this.ensureAppValid);
  this.on('validated', this.findNextMission);
  this.on('mission-selected', this.roleIsAvailable);
  this.on('role-available', this.roleIsAvailable);
  this.on('role-compatible', this.ensureRoleCompatible);

  // sad path
  this.on('invalid', this.denyApplication);
};

util.inherits(ReviewProcess, Emitter);
module.exports = ReviewProcess;
