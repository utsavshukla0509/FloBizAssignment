const tableName = "request";

const requestTable = `CREATE TABLE ${tableName} (
orgId VARCHAR(50) NOT NULL,
userId VARCHAR(50) NOT NULL,
requestedOn TIMESTAMP NOT NULL DEFAULT now()
);`;

module.exports = requestTable;