const tableName = "orgMember";

const orgMemberTable = `CREATE TABLE ${tableName} (
userId VARCHAR(50) NOT NULL,
orgId VARCHAR(50) NOT NULL,
role VARCHAR(50)
);`;

module.exports = orgMemberTable;