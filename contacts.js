const fs = require('fs');
const path = require('path');
const shortid = require("shortid");

const contactsPath = path.join(__dirname,'/db/contacts.json');


function listContacts() {
    fs.readFile(contactsPath,"utf-8", (error, data) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        console.log("Contacts lict");
        console.table(JSON.parse(data));
    });
}
// listContacts();

function getContactById(contactId) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        const contacts = JSON.parse(data);
        const contactItem = contacts.find((contact) => contact.id === contactId);
        if (!contactItem) {
            return console.error(`Sorry, contact with ID: ${contactId} not found`);
        } else {
            return console.table(contactItem);
        }
    });
}
// getContactById(2);
function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error.message);
            throw error;
        }
        const contacts = JSON.parse(data);
        const contactItem = contacts.filter((contact) => contact.id !== contactId);
      fs.writeFile(contactsPath, JSON.stringify(contactItem), (error) => {
          if (error) throw error;
          return console.log(`Contact with Id:${contactId} has been successfully deleted`);
        })
    });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error.message);
            throw error;
      }
      
      const contacts = JSON.parse(data);
      const newContact = { id: shortid.generate(), name, email, phone };
      const newContacts = [...contacts, newContact];
      fs.writeFile(contactsPath, JSON.stringify(newContacts), (error) => {
          if (error) throw error;
          return console.log(`Contact was added successfully`);
      });
    });
}
// addContact("Elon Mask", "Mask@mainModule.com" , "38095 - 55555 - 55");
// addContact("Lee Harvy Osvald", " Osvald@main.com" , "88-888-888");

// removeContact('6U0xGAUeN');
// listContacts();
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};