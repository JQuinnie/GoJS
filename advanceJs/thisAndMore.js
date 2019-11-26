// basic this to see global context vs function context
const obj = {
  a: 1,
  b: 2,
  add() {
    console.log('a+b', this.a + this.b);
  },
  addReturnFunc() {
    return function () {
      console.log('a+b', this.a + this.b);
    };
  },
  addSetTimeout() {
    setTimeout(function () {
      console.log('a+b', this.a + this.b);
    }, 500);
  },
};

const a = 3;
const b = 4;
obj.add(); // 1+2 = 3, object context

const cacheAdd = obj.add;
cacheAdd(); // 3+4 = 7, global context
addReturnFunc(); // 3+4 = 7, global context because func is returned to global
addSetTimeout(); // 3+4 = 7, global context because setTimeout belongs to window


// parent and child relationship
const parentObj = {
  a: 1,
  b: 2,
  childObj: {
    c: 2,
    add() {
      console.log('a+b+c', this.a + this.b + this.c);
    },
  },
};
const childObjInstantiate = Object.create(parentObj);
childObjInstantiate.c = 3;
childObjInstantiate.add = function () {
  console.log('a+b+c', this.a + this.b + this.c);
};

parentObj.childObj.add(); // a+b+c NaN, a and b are undefined only c=2, a and b are not accesible from the local child constext
childObjInstantiate.add(); // a+b+c = 6, instantiate parentObj to create childObjInstantiate, look s at child context first then to parent context

// Like Object.create but use syntactic sugar with new
function Parent() {
  this.a = 1;
  this.b = 2;
}

const child = new Parent();
child.c = 3;
child.add = function () {
  console.log('a+b+c', this.a + this.b + this.c);
};

child.add(); // a+b+c = 6, properties of the parent are available in the context of the child, first checks value in the context it is called and then look up its protoype chain

// call, apply and bind
const candy = {
  owner: 'Nina',
  flavor: 'Strawberry',
  whosCandyIsThis() {
    console.log('Owner of the candy is', this.owner);
  },
};
candy.whosCandyIsThis(); // Owner of the candy is Nina

const myCandy = {
  owner: 'Erika',
};
candy.whosCandyIsThis.call(myCandy); // Owner of the candy is Erika, modify the value of this reference
// call explicity pass this reference to a function, whosCandyIsThis to use reference from myCandy
