import {createPool} from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'phpmyadmin',
    database: 'megak_santa',
    password: "brutusex12",
    namedPlaceholders: true,
    decimalNumbers: true,

});

pool.on("connection", (connection => console.log("Udało się polączyć z mysql")));

export {pool};
