"use strict";

exports.__esModule = true;
exports.createUseRemoteComponent = void 0;

var _react = require("react");

var _remoteModuleLoader = _interopRequireDefault(require("@paciolan/remote-module-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUseRemoteComponent = args => {
  const loadRemoteModule = (0, _remoteModuleLoader.default)(args);

  const useRemoteComponent = url => {
    const [{
      loading,
      err,
      component
    }, setState] = (0, _react.useState)({
      loading: true
    });
    (0, _react.useEffect)(() => {
      loadRemoteModule(url).then(module => setState({
        loading: false,
        component: module
      })).catch(err => setState({
        loading: false,
        err
      }));
    }, [url]);
    return [loading, err, component];
  };

  return useRemoteComponent;
};

exports.createUseRemoteComponent = createUseRemoteComponent;