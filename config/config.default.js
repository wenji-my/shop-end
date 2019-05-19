/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557933771955_2746';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'arshop',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    define: {
      timestamps: false, // true by default
      freezeTableName: true
    },
  };

  config.static = {
    prefix: '',
    dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'app/public/images')]
  }

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['http://localhost:8080']
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
