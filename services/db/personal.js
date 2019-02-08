const { createTableTemplate, insertTemplate } = require('./rowtemplate');
const data = require('./PlayerPersonalData.json');

const fields = [
	{ name: 'ID', type: 'integer' },
	{ name: 'Name', type: 'varchar(50)' },
	{ name: 'Age', type: 'varchar(50)' },
	{ name: 'Photo', type: 'varchar(50)' },
	{ name: 'Nationality', type: 'varchar(50)' },
	{ name: 'Flag', type: 'varchar(50)' },
	{ name: 'Overall', type: 'varchar(50)' },
	{ name: 'Potential', type: 'varchar(50)' },
	{ name: 'Club', type: 'varchar(50)' },
	{ name: 'Club Logo', type: 'varchar(50)' },
	{ name: 'Value', type: 'varchar(50)' },
	{ name: 'Wage', type: 'varchar(50)' },
	{ name: 'Special', type: 'varchar(50)' }
];

// console.log(createTableTemplate('PERSONAL', fields));
console.log(
	data
		.map((item) =>
			insertTemplate('PERSONAL', fields.map((c) => c.name), item)
		)
		.join('')
);
