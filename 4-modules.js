const _greet = require('./2-utils');
const data = require('./1-data');

data.names.map( name => _greet(name))
require('./3-mind-grenade')