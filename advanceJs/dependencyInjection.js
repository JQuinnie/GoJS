// CASE 1: no dependency injection used
class Printer {
  constructor() {
    this.lcd = '';
  }

  // not very flexible
  print(text) {
    this.lcd = 'printing...';
    console.log(`This printer prints ${text}!`);
  }
}

const printer = new Printer();
printer.print('hello');

// CASE 2: abstract the functionalities inside the print method into a new class called Driver:
// Printer2 class is now more modular but it is not flexible
// anytime you use new keyword you are hardcoding
// in this case, constructing a driver inside the Printer2 which is in real world is really like a printer that comes with a builtin driver that can never change
class Printer2 {
  constructor() {
    this.lcd = '';
    this.driver = new Driver();
  }

  print(text) {
    this.lcd = 'printing...';
    this.driver.driverPrint(text);
  }
}

class Driver {
  driverPrint(text) {
    console.log(`I will print ${text}`);
  }
}

const printer2 = new Printer2();
printer2.print('hello');

// CASE 3: Inject an already made driver into your printer
class Printer3 {
  constructor(driver) {
    this.lcd = '';
    this.driver = driver;
  }

  print(text) {
    this.lcd = 'printing...';
    this.driver.driverPrint(text);
  }
}

class BWDriver {
  driverPrint(text) {
    console.log(`I will print the ${text} in Black and White.`);
  }
}

class ColorDriver {
  driverPrint(text) {
    console.log(`I will print the ${text} in Color.`);
  }
}

const bwDriver = new BWDriver();
const printer3 = new Printer3(bwDriver);
printer3.print('hello'); // I will print the hello in Black and White.

// we are creating a new printer each time we need our printer to pritn with a different driver!
const cDriver = new ColorDriver ();
const printer3 = new Printer (cDriver); // Yes! This line here is the problem!
printer3.print ('hello'); // I will print the hello in color.

// CASE 4: provide a setter function to set the driver of your printer at any time!
class Printer4 {
  constructor () {
    this.lcd = '';
  }

  setDriver (driver) {
    this.driver = driver;
  }

  print (text) {
    this.lcd = 'printing...';
    this.driver.driverPrint (text);
  }
}

class BWDriver1 {
  driverPrint (text) {
    console.log (`I will print the ${text} in Black and White.`);
  }
}

class ColorDriver1 {
  driverPrint (text) {
    console.log (`I will print the ${text} in color.`);
  }
}

// Usage:
const bwDriver1 = new BWDriver1 ();
const cDriver1 = new ColorDriver1 ();
const printer4 = new Printer4 (); // I am happy to see this line only ONCE!

printer4.setDriver (bwDriver1);
printer4.print ('hello'); // I will print the hello in Black and White.

printer4.setDriver (cDriver1);
printer4.print ('hello'); // I will print the hello in color.
