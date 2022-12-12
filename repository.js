// const users = [
//      {"id": 1, "name": "Sasha"},
//      {"id": 2, "name": "Artemiy"} 
// ]

// const {users} = require("./users.json")
 
const fs = require("fs")
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils")

const getUsers = () => {
    return readJsonFromFile("db")
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({name: name})
    return writeJsonToFile("db", users) 
}

exports.getUsers = getUsers
exports.addUser = addUser
