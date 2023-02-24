
const mysql = require("mysql");
const { DATE } = require("mysql/lib/protocol/constants/types");
let dbInstance = mysql.createConnection({
	host: "rajeshwar-project.czna3qjyor3q.ap-south-1.rds.amazonaws.com",
	user: "admin",
	password: "sept0998",
	database: "testMonitorApp"
});

dbInstance.connect((err) => {
	if (err) {
		// console.log("Database Connection Failed !!!", err);
	} else {
		// console.log("connected to Database");
	}
});
function getAllPictures() {
	return new Promise((resolve, reject) => {
		var query = `SELECT * FROM pictures;`;

		dbInstance.query(query, [], (err, rows) => {
			if (err) {
				reject(err)
			} else {
				resolve(rows)
			}
		});
	});
}

function insertIntoPic(data) {
	return new Promise((resolve, reject) => {
		var query = `INSERT INTO pictures (mail,picture,time) VALUES (?, ?, ?);`;

		dbInstance.query(query, [data.mail, data.data, new Date().toLocaleString()], (err, rows) => {
			if (err) {
				reject(err)
			} else {
				resolve(rows)
			}
		});
	});
}
function insert(data) {
	return new Promise((resolve, reject) => {
		var query = `INSERT INTO Candidates (name,code,mail) VALUES (?, ?, ?);`;

		dbInstance.query(query, [data.name, data.code, data.mail], (err, rows) => {
			if (err) {
				reject(err)
			} else {
				resolve(rows)
			}
		});
	});
}
function getProfilePictureURL(ID) {
	var query = `SELECT picture FROM Candidates WHERE ID=?;`;
	return new Promise((resolve, reject) => {
		dbInstance.query(query, [ID], (err, data) => {
			if (err) {
				// console.log("Error in fethcing url");
				reject();
			} else {
				resolve(data);
			}
		});
	})

}
function getStudentDetails(ID) {
	var query = `SELECT * FROM Candidates WHERE ID=?;`;
	return new Promise((resolve, reject) => {
		dbInstance.query(query, [ID], (err, data) => {
			if (err) {
				// console.log("Error in fethcing url");
				reject();
			} else {
				resolve(data);
			}
		});
	})

}

module.exports = { insert: insert, getProfilePictureURL: getProfilePictureURL, getStudentDetails: getStudentDetails, insertIntoPic: insertIntoPic, getAllPictures: getAllPictures };
