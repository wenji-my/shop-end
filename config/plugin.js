'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   static: {
//     enable: true,
//   }
// };

exports.static = {
  enable: true
}
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};