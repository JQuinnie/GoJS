function AddressBook(param) {
  // instance variables/properties
  this.name = param;
  this.id;
  this.student = false;
  // private method
  function randomIdGenerator() {
    return Math.floor(Math.random() * 100000 + 1);
  }
  // priviledged methods, can be invoked by public and private methods
  this.isStudent = function () {
    return this.student;
  };
  this.getName = function () {
    return this.name;
  };
  this.getId = function () {
    return this.id;
  };

  this.priviledgeFunc = function () {
    return this.isStudent();
  };
  // public properties that cab be read/modified by anyone
  this.streetName = 'Park Lane';
  this.houseNumber = 'A/120';
}
const myAddressBook = new AddressBook('Phoebe');
// adding new public methods to the AddressBook
AddressBook.prototype.setName = function (str) {
  this.name = str;
};

console.log(myAddressBook.priviledgeFunc());
