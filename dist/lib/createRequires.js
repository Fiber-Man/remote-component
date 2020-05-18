"use strict";

exports.__esModule = true;
exports.createRequires = void 0;

const sanitizeDependencies = dependencies => typeof dependencies === "function" ? dependencies() : dependencies || {};

const createRequires = dependencies => {
  let isSanitized = false;
  return name => {
    if (!isSanitized) {
      // note: needs to happen inside the inner function for the laziness to work.
      dependencies = sanitizeDependencies(dependencies);
      isSanitized = true;
    }

    if (!(name in dependencies)) {
      throw new Error(`Could not require '${name}'. '${name}' does not exist in dependencies.`);
    }

    return dependencies[name];
  };
};

exports.createRequires = createRequires;