"use strict";

exports.__esModule = true;
exports.RemoteComponent = void 0;

var _ = require("..");

const requires = (0, _.createRequires)(_.getDependencies);
const RemoteComponent = (0, _.createRemoteComponent)({
  requires
});
exports.RemoteComponent = RemoteComponent;