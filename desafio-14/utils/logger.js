const winston = require('wiston');

const logger = winton.createLogger({
  level: 'warn',
  transports: [
    new wiston.transports.Console({ level: 'verbose' }),
    new wiston.transports.File({ filename: 'error.log', level: 'error' }),
    new wiston.transports.File({ filename: 'warn.log', level: 'warn' })
  ]
});

module.exports = logger;