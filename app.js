const cron = require('node-cron');
const { syncdb } = require('./tasks/sync-db');


console.log("inicio de cronometro")

cron.schedule('1-59/5 * * * * *', syncdb
);
