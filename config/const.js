/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const DB_USER = 'root';
const DB_PASS = '';
const DB_URL  = 'localhost';
const DB_DATA_BASE = 'sorteo';
var mysql = require('mysql');
exports.CON=mysql.createConnection({
    host: DB_URL,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATA_BASE
});