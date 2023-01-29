'use strict';

const moreEnthusiasm = function (phrase) {
  return phrase + '!!!';
}

export { moreEnthusiasm }
module.exports = {
  name: require('./package').name,
  moreEnthusiasm: { moreEnthusiasm }
};
