"use strict";

exports.__esModule = true;
exports.RemoteComponent = exports.createRemoteComponent = exports.getDependencies = exports.createRequires = exports.createUseRemoteComponent = void 0;

var _useRemoteComponent = require("./hooks/useRemoteComponent");

exports.createUseRemoteComponent = _useRemoteComponent.createUseRemoteComponent;

var _createRequires = require("./lib/createRequires");

exports.createRequires = _createRequires.createRequires;

var _getDependencies = require("./lib/getDependencies");

exports.getDependencies = _getDependencies.getDependencies;

var _createRemoteComponent = require("./lib/createRemoteComponent");

exports.createRemoteComponent = _createRemoteComponent.createRemoteComponent;

var _RemoteComponent = require("./components/RemoteComponent");

exports.RemoteComponent = _RemoteComponent.RemoteComponent;