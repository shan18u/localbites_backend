import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'abc@123456',
    database: 'localbites',
    // If not using a Unix domain socket, remove or set socketPath to null
    // socketPath: '/var/run/mysqld/mysqld.sock' 
});

const db = {
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            });
        }),
    end: () => connection.end(),
    connect: () => {
        return new Promise((resolve, reject) => {
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};

export { db };
