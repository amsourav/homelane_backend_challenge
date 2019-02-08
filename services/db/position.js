const { createTableTemplate, insertTemplate } = require('./rowtemplate');
const data = require('./PlayerPlayingPositionData.json');

const columns = [
	{ name: 'CAM', type: 'varchar(50)' },
	{ name: 'CB', type: 'varchar(50)' },
	{ name: 'CDM', type: 'varchar(50)' },
	{ name: 'CF', type: 'varchar(50)' },
	{ name: 'CM', type: 'varchar(50)' },
	{ name: 'ID', type: 'integer' },
	{ name: 'LAM', type: 'varchar(50)' },
	{ name: 'LB', type: 'varchar(50)' },
	{ name: 'LCB', type: 'varchar(50)' },
	{ name: 'LCM', type: 'varchar(50)' },
	{ name: 'LDM', type: 'varchar(50)' },
	{ name: 'LF', type: 'varchar(50)' },
	{ name: 'LM', type: 'varchar(50)' },
	{ name: 'LS', type: 'varchar(50)' },
	{ name: 'LW', type: 'varchar(50)' },
	{ name: 'LWB', type: 'varchar(50)' },
	{ name: 'Preferred Positions', type: 'varchar(50)' },
	{ name: 'RAM', type: 'varchar(50)' },
	{ name: 'RB', type: 'varchar(50)' },
	{ name: 'RCB', type: 'varchar(50)' },
	{ name: 'RCM', type: 'varchar(50)' },
	{ name: 'RDM', type: 'varchar(50)' },
	{ name: 'RF', type: 'varchar(50)' },
	{ name: 'RM', type: 'varchar(50)' },
	{ name: 'RS', type: 'varchar(50)' },
	{ name: 'RW', type: 'varchar(50)' },
	{ name: 'RWB', type: 'varchar(50)' },
	{ name: 'ST', type: 'varchar(50)' }
];

// console.log(createTableTemplate('POSITION', columns));

console.log(
	data
		.map((item) =>
			insertTemplate('POSITION', columns.map((c) => c.name), item)
		)
		.join('')
);
