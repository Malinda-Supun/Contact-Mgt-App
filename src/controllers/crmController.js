import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((error, contact) => {
        if(error){
            res.send(error);
        }
        res.json(contact);
    })
}

export const getContacts = (req, res) => {

    Contact.find({}, (error, result) => {
        if(error){
            res.send(error);
        }
        res.json(result);
    })
}

export const getContactWithID = (req, res) => {

    Contact.findById(req.params.contactID, (error, result) => {
        if(error){
            res.send(error);
        }
        res.json(result);
    })
}

export const updateContact = (req, res) => {

    Contact.findOneAndUpdate({ _id : req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (error, result) => {
        if(error){
            res.send(error);
        }
        res.json(result);
    })
}

export const deleteContact = (req, res) => {

    Contact.remove({ _id : req.params.contactID },(error, result) => {
        if(error){
            res.send(error);
        }
        res.json("successfully deleted contact.");
    })
}