const userModel = require('../models/usersModel');

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (err) {
        console.log(err);
    }

};

const getItem = () => {


};


const createItem = async (req, res) => {
    try {
        const { username, password, name, addres, age, phone, email } = req.body
        const resDetail = await userModel.create({
            username, password, name, addres, age, phone, email 
        })
        res.send({ data: resDetail })
    } catch (err) {
        console.log(err);
    }

};

const updateItem = () => {};

const deleteItem = () => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem }