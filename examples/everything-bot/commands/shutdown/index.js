'use strict';

module.exports = function setup(options, imports, register) {
  var logger           = options.logger
    , mongodbProcess   = imports.mongodbProcess
    , redisProcess     = imports.redisProcess
    , memcachedProcess = imports.memcachedProcess
    ;

  process.on('SIGINT', function () {
    console.error("Got SIGINT. Shutting down.");
    mongodbProcess.shutdown();
    redisProcess.shutdown();
    memcachedProcess.shutdown();
    process.exit(0);
  });

  return register();
};
