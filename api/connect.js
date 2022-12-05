import mysql from "mysql"

export const db = mysql.createConnection({
  host:"34.136.238.74",
  user:"ktamariz",
  password:"990414",
  database:"social"
})