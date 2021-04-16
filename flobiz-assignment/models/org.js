const tableName = "orgInfo";

const orgTable = `CREATE TABLE ${tableName} (
orgId SERIAL PRIMARY KEY,
createdOn TIMESTAMP NOT NULL DEFAULT now(),
createdBy VARCHAR(50) NOT NULL,
orgName VARCHAR(50) NOT NULL UNIQUE
);`;

module.exports = orgTable;