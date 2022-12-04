import mysql from "mysql"

export const db = mysql.createConnection({
  host:"192.168.100.20",
  user:"root",
  password:"root",
  database:"social"
})