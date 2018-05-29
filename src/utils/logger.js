import log4js from 'log4js'
const logger = log4js.getLogger()
logger.level = 'debug'
console.info = (msg) => logger.info(msg)
console.error = (msg) => logger.error(msg)
console.trace = (msg) => logger.trace(msg)
console.debug = (msg) => logger.debug(msg)
console.warn = (msg) => logger.warn(msg)
console.fatal = (msg) => logger.fatal(msg)