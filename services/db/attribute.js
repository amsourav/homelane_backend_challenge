const { createTableTemplate, insertTemplate } = require('./rowtemplate');
const data = require('./PlayerAttributeData.json')

const columns = [
	{ name: 'Acceleration', type: 'integer' },
	{ name: 'Aggression', type: 'integer' },
	{ name: 'Agility', type: 'integer' },
	{ name: 'Balance', type: 'integer' },
	{ name: 'Ball control', type: 'integer' },
	{ name: 'Composure', type: 'integer' },
	{ name: 'Crossing', type: 'integer' },
	{ name: 'Curve', type: 'integer' },
	{ name: 'Dribbling', type: 'integer' },
	{ name: 'Finishing', type: 'integer' },
	{ name: 'Free kick accuracy', type: 'integer' },
	{ name: 'GK diving', type: 'integer' },
	{ name: 'GK handling', type: 'integer' },
	{ name: 'GK kicking', type: 'integer' },
	{ name: 'GK positioning', type: 'integer' },
	{ name: 'GK reflexes', type: 'integer' },
	{ name: 'Heading accuracy', type: 'integer' },
	{ name: 'ID', type: 'integer' },
	{ name: 'Interceptions', type: 'integer' },
	{ name: 'Jumping', type: 'integer' },
	{ name: 'Long passing', type: 'integer' },
	{ name: 'Long shots', type: 'integer' },
	{ name: 'Marking', type: 'integer' },
	{ name: 'Penalties', type: 'integer' },
	{ name: 'Positioning', type: 'integer' },
	{ name: 'Reactions', type: 'integer' },
	{ name: 'Short passing', type: 'integer' },
	{ name: 'Shot power', type: 'integer' },
	{ name: 'Sliding tackle', type: 'integer' },
	{ name: 'Sprint speed', type: 'integer' },
	{ name: 'Stamina', type: 'integer' },
	{ name: 'Standing tackle', type: 'integer' },
	{ name: 'Strength', type: 'integer' },
	{ name: 'Vision', type: 'integer' },
	{ name: 'Volleys', type: 'integer' }
];

// console.log(createTableTemplate('ATTRIBUTE', columns));


console.log(
	data
		.map((item) =>
			insertTemplate('ATTRIBUTE', columns.map((c) => c.name), item)
		)
		.join('')
);
