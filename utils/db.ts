import {createPool} from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'AdrianeZ',
    database: 'megak_santa',
    password: "brutus12",
    namedPlaceholders: true,
    decimalNumbers: true,

});

pool.on("connection", (connection => console.log("Udało się polączyć z mysql")));

export {pool};
