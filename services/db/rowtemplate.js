const rowTemplate = (field, type) =>
	`
        ${field} ${type}
    `;

exports.createTableTemplate = (tableName, fields) => {
	const fieldsQuery = fields.map((item) =>
		rowTemplate(item.name.toLowerCase().split(' ').join('_'), item.type)
	);

	return `
        CREATE TABLE ${tableName} (
            ${fieldsQuery.join(',')}
        );
    `;
};

exports.insertTemplate = (table, fields, record) => {
	return `
        INSERT INTO ${table} (${fields
		.map((item) => item.toLowerCase().split(' ').join('_'))
		.join(',')})
        VALUES(${fields.map((item) => '"'+record[item].toString().trim()+'"').join(',')}); \n
    `;
};
