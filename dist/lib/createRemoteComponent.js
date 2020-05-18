"use strict";

exports.__esModule = true;
exports.createRemoteComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _useRemoteComponent = require("../hooks/useRemoteComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRemoteComponent = props => {
  const useRemoteComponent = (0, _useRemoteComponent.createUseRemoteComponent)(props);

  const RemoteComponent = ({
    url,
    fallback,
    render,
    ...props
  }) => {
    const [loading, err, Component] = useRemoteComponent(url);

    if (loading) {
      return fallback;
    }

    if (render) {
      return render({
        err,
        Component
      });
    }

    if (err || !Component) {
      return /*#__PURE__*/_react.default.createElement("div", null, "Unknown Error: ", (err || "UNKNOWN").toString());
    }

    return /*#__PURE__*/_react.default.createElement(Component, props);
  };

  RemoteComponent.defaultProps = {
    fallback: null
  };
  return RemoteComponent;
};

exports.createRemoteComponent = createRemoteComponent;