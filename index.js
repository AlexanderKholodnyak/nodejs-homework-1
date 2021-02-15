const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// listContacts();
// addContact("Elon Mask", "Mask@mainModule.com" , "38095 - 55555 - 55");
// addContact("Lee Harvy Osvald", " Osvald@main.com" , "88-888-888");


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);