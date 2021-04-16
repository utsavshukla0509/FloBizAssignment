const tableName = "userInfo";

const userTable = `CREATE TABLE ${tableName} (
userId SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
phoneNo VARCHAR(15) NOT NULL
);`;

module.exports = userTable;