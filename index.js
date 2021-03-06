const server = require('./server.js');

const cron = require('node-cron');
const axios = require('axios');
const PORT = process.env.PORT || 5000;

const router = require('./activity/refresh-router');

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...http://www.localhost:${PORT}`);
	router.refresh();
});
