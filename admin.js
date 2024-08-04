const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'criminal_record',
app.post('/insert', (req, res) => {
  const { table, at1, val1, at2, val2, at3, val3, at4, val4, at5, val5, at6, val6, at7, val7, at8, val8, at9, val9, at10, val10 } = req.body;
  
    console.log(at1);
    console.log(val1);
    let sql = `INSERT INTO ${table} (${at1}`;
    if (at2) { sql += `, ${at2}`; }
    if (at3) { sql += `, ${at3}`; }
    if (at4) { sql += `, ${at4}`; }
    if (at5) { sql += `, ${at5}`; }
    if (at6) { sql += `, ${at6}`; }
    if (at7) { sql += `, ${at7}`; }
    if (at8) { sql += `, ${at8}`; }
    if (at9) { sql += `, ${at9}`; }
    if (at10) { sql += `, ${at10}`; }
    sql += `) VALUES (`;
    if (at1 == 'DOB') {sql+=`cast(${val1}, date)`}
    else if (at1 == 'Date_time' || at1 == 'Start' || at1=='End') {sql+=`cast(${val1}, datetime)`}
    else if (at1 == 'Height' || at1 == 'Severity' ) {sql+=`cast(${val1}, float)`}
    else if (at1 == 'Mugshot' || at1 == 'DNA_Seq' || at1=='Rightthumb' || table=='Fingerprints')  {sql+=`cast(${val1}, varbinary)`}
    else if (at1) {sql+=`'${val1}'`}
    if (at2 == 'DOB') {sql+=`,cast(${val2}, date)`}
    else if (at2 == 'Date_time' || at2 == 'Start' || at2=='End') {sql+=`,cast(${val2}, datetime)`}
    else if (at2 == 'Height' || at2 == 'Severity' ) {sql+=`,cast(${val2}, float)`}
    else if (at2 == 'Mugshot' || at2 == 'DNA_Seq' || at2=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val2}, varbinary)`}
    else if (at2) {sql+=`,'${val2}'`}
    if (at3 == 'DOB') {sql+=`,cast(${val3}, date)`}
    else if (at3 == 'Date_time' || at3 == 'Start' || at3=='End') {sql+=`,cast(${val3}, datetime)`}
    else if (at3 == 'Height' || at3 == 'Severity' ) {sql+=`,cast(${val3}, float)`}
    else if (at3 == 'Mugshot' || at3 == 'DNA_Seq' || at3=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val3}, varbinary)`}
    else if (at3) {sql+=`,'${val3}'`}
    if (at4 == 'DOB') {sql+=`,cast(${val4}, date)`}
    else if (at4 == 'Date_time' || at4 == 'Start' || at4=='End') {sql+=`,cast(${val4}, datetime)`}
    else if (at4 == 'Height' || at4 == 'Severity' ) {sql+=`,cast(${val4}, float)`}
    else if (at4 == 'Mugshot' || at4 == 'DNA_Seq' || at4=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val4}, varbinary)`}
    else if (at4) {sql+=`,'${val4}'`}
    if (at5 == 'DOB') {sql+=`,cast(${val5}, date)`}
    else if (at5 == 'Date_time' || at5 == 'Start' || at5=='End') {sql+=`,cast(${val5}, datetime)`}
    else if (at5 == 'Height' || at5== 'Severity' ) {sql+=`,cast(${val5}, float)`}
    else if (at5 == 'Mugshot' || at5 == 'DNA_Seq' || at5=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val5}, varbinary)`}
    else if (at5) {sql+=`,'${val5}'`}
    if (at6 == 'DOB') {sql+=`,cast(${val6}, date)`}
    else if (at6 == 'Date_time' || at6 == 'Start' || at6=='End') {sql+=`,cast(${val6}, datetime)`}
    else if (at6 == 'Height' || at6 == 'Severity' ) {sql+=`,cast(${val6}, float)`}
    else if (at6 == 'Mugshot' || at6 == 'DNA_Seq' || at6=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val6}, varbinary)`}
    else if (at6) {sql+=`,'${val6}'`}
    if (at7 == 'DOB') {sql+=`,cast(${val7}, date)`}
    else if (at7 == 'Date_time' || at7 == 'Start' || at7=='End') {sql+=`,cast(${val7}, datetime)`}
    else if (at7 == 'Height' || at7== 'Severity' ) {sql+=`,cast(${val7}, float)`}
    else if (at7 == 'Mugshot' || at7 == 'DNA_Seq' || at7=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val7}, varbinary)`}
    else if (at7) {sql+=`,'${val7}'`}
    if (at8 == 'DOB') {sql+=`,cast(${val8}, date)`}
    else if (at8 == 'Date_time' || at8 == 'Start' || at8=='End') {sql+=`,cast(${val8}, datetime)`}
    else if (at8 == 'Height' || at8 == 'Severity' ) {sql+=`,cast(${val8}, float)`}
    else if (at8 == 'Mugshot' || at8 == 'DNA_Seq' || at1=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val8}, varbinary)`}
    else if (at8) {sql+=`,'${val8}'`}
    if (at9 == 'DOB') {sql+=`,cast(${val9}, date)`}
    else if (at9 == 'Date_time' || at9 == 'Start' || at9=='End') {sql+=`,cast(${val9}, datetime)`}
    else if (at9 == 'Height' || at9 == 'Severity' ) {sql+=`,cast(${val9}, float)`}
    else if (at1 == 'Mugshot' || at9 == 'DNA_Seq' || at9=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val9}, varbinary)`}
    else if (at9) {sql+=`,'${val9}'`}
    if (at1 == 'DOB') {sql+=`,cast(${val1}, date)`}
    else if (at10 == 'Date_time' || at10 == 'Start' || at10=='End') {sql+=`,cast(${val10}, datetime)`}
    else if (at10 == 'Height' || at10 == 'Severity' ) {sql+=`,cast(${val10}, float)`}
    else if (at10 == 'Mugshot' || at10 == 'DNA_Seq' || at10=='Rightthumb' || table=='Fingerprints')  {sql+=`,cast(${val10}, varbinary)`}
    else if (at10) {sql+=`,'${val10}'`}
    sql+=');'

  console.log(sql)
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  });
  

app.listen(8083, () => {
  console.log('Server is running on port 8083');
});
