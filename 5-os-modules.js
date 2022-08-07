const os = require('os');

// info about the current user
const user = os.userInfo();
console.log(user);


// method that returns the system uptime
const time = os.uptime() / 60;
const hrs = time / 60;
console.log(`system starts in ${hrs} hours`);


// info about current os
const osInfo = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	totalFreeMemory: os.freemem(),
};
console.log(osInfo)