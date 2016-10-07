40 + 2
var point = {x:1, y:1};
point
point.x
//en primerEjercicio.js
console.log(40 + 2);
var point = {x:1,y:1};
console.log(point);
console.log{'Coordenada X: ', point.x);
console.log ('Coordenada X:', point.x);
node primerEjercicio.js
$ node prueba.js
//En los comentarios hay más valores posibles para cada uno d elos tipos
var bool = true;
var bool = true; // false
var number = 1234.5; //42, -Infinity, +Infinity
var text = 'I want to be pirate!'; // "I want to be a pirate!"
var object = {};//[],, null
var code = function () {return 42;};
typeof true;
typeof 1234.5;
typeof 'I want to be a pirate!';
typeof {};
typeof function () {return 42;};
var x;
typeof x;
x = 5; // tan prontop como le demos un valor, el tipo dejará de ser undefinied.
typeof x;
var point = {'x':10, 'y':15};
var point = {x:10,y:10};//mucho más conveniente
point['x'];
point['y'];
point.x;
point.y;
point.x = 0;
point.y = 0;
point['x'] = 0;
point['y'] = 0;
var label = point.label; //será undefinied
typeof label;
point.label = 'origin';
point;
var menu = ['Atack','Defense','Inventory'];
menu [0];
menu [;]
menu[1];
menu[2];
menu.length;
menu.push('Magic');
menu.pop();
//Inspecciona la lista tras cada oeración
var menu = ['Atack','Defense','Inventory'];
menu = ['Atack','Defense','Inventory'];
menu.splice(2,0,'Magic'); //añade Magic antes de inventory
menu.splice(2,2,'Ench. Inventory'); //reemplaza Magic and inventory with ench, inventory
menu.splice(0,0,'Wait');
//añade wait al principio de la lista
menu[0] = 'Special';
//reemplazamos wait con special
menu;
menu.length;
var item = menu[10];
typeof item ;//será undefinied
menu[10] = 'Secret';
menu;
menu.length;
var obj = {}; //el objeto vacio es tan valido como cualquier otro
var arr = []; //una lista sin elementos como te puede imaginar
typeof obj; // sera object
typeof arr; // sera object
Array.isArray(obj); // será false.
Array.isArray(arr); // será true.
function getNextAliveEnemy()
function getNextAliveEnemy() {
function getNextAliveEnemy() { var nextEnemy;
function getNextAliveEnemy() {
var nextEnemy;
if(aliveEnemies.length > 0){
  next.Enemy = aliveEnemies[0];
  }
else {
  nextEnemy = null;
  }
return nexEnemy;
}
var hero = { sword: null, shield: null};
hero.sword = {attack:20, magic:5}; // coge una espada
hero.sword = null; //suelta la espada
var hero = {
name: 'Link',
life: 100,
weapon:{kind:'sword', power:20, magicPower:5},
defense:{kind:'shield', power:5, magicPower:0},
//inventario por slots. Dos slots vacios y un último con 5 posiciones.
inventory:[
{item:null,count:0}
{item:null,count:0},
{item:null,count:0},
{item: {kind:'potion', power:15}, count:5}
]
};
var hero = {
... name: 'Link',
... life: 100,
... weapon:{kind:'sword', power:20, magicPower:5},
... defense:{kind:'shield', power:5, magicPower:0},
... //inventario por slots. Dos slots vacios y un último con 5 posiciones.
... inventory:[
... {item:null,count:0}
var hero = {
var hero = {
name: 'Link',
... life: 100,
life: 100;
var hero = {
name: 'Link',
life:100,
weapon:{ kind:'sword',power:20,magicPower:5},
defense:{kind:'shield',power:5,magicPower:0},
//inventario por slots. Dos slots vacios y un último con 5 posiciones.
inventory:[
{item:null,count:0},
{item:null,count:0},
{item:{kind:'potion',power:15},count:5}
]
};
hero.name; //el nombre del heroe
hero.weapon.kind;//tipo de arma
hero.inventory[0]; // el rpimer slot del inventario
hero.inventory[0].item; //que hay en el primer slot del inventario.
hero.inventory[2].item.power; //el poder del item del tercer slot del inventario
//TAODAS ESTAS COMPARACIONES SON VERDADERAS
"Hola" ==="Hola";
"Hola" !=="hola";
true === true;
123 === 123.0;
12
123 === 122+1; //primero se resuelve la expresión y luego se compara
undefined ===undefined;
({} !== {}); //da igual la forma esto son dos objetos distintos
({} !== []);
[] !== []; //igual q antes
[1,2,3] !== [1,2,3]; //la forma da igual los objetos son distintos
null === null;
//pero con null funciona porque solo hay un valor nulo
var obj = {};

var sameObj = obj;
var another = {};
sameObj === obj; //funciona porque ambos nombres se refieren al mismo objeto
sameObj !== another; // insisto distintos pese a la forma
var enemy = {
graphic: 'specie01.png',
currentDirection:'right',
position:{x:10,y:10},
score: 40
};
enemy.position.x = 100; // perfectamente valido.
var enemy = {
_graphic:'specie01.png',
_curretDirection:'right',
_position:{x:10,y:10},
_score:40
};
enemy._position.x = 100; //perfectamente valido también
var enemy = {
_graphic:'specie01.png',
_curretDirection:'right',
_position:{x:10,y:10},
_score:40,

moveLeft:function() {console.log ('Going left!');},
moveRight:function() {console.log ('Going right!');},
advance: function() {console.log ('Marching forward!');},
shoot: function() {console.log('PICHIUM!');} // Es un laser
};
enemy.shoot(); // primero acedemos con punto luego llamamos con ()
enemy.moveLeft();
enemy.moveRight();
enemy.advance();
enemy['shoot'](); // es lo mismo, accder con corchetes y llamar con ()
enemy.shoot(); // Pichium!
enemy.shoot = function(){console.log('PAÑUM!');};
enemy.shoot(); // Pañum!
enemy;
enemy;//fijate en la posición
enemy.moveLeft();
enemy; //fijate en la posición otra vez
enemy.moveLeft = function(){ this._position.x -= 2;};
enemy.moveRight = function(){ this._position.x += 2;};
enemy.advance = function(){this._position.y += 2;};
enemy;
enemy.moveLeft();
enemy;
function inspect() {
//solo inspecciona this
console.log('Tipo:' ,typeof this);
console.log('Valor:', this);
}
//pìensa que puede valer this antes de probar cad aejemplo
var ship1 = {name:'T-Fighter', method: inspect};
var ship2 = {name:'X-wing', method: inspect};
ship1.method();
ship2.method();
inspect();
var onlyNameShip = {name: 'Death Star'};
inspect.apply(onlyNameShip); //hace que this valga onlynameshiop en inspect
var uno = 2;
function factorial(number){
if{ number === 0) {
  return 1;
  }
return number * factorial(number -1);
}
var recursiveFunction = function factorial(number){
if (number === 0){
  return 1;
  }
eturn number * factorial(number -1);
};
function factorial(number){
if{ number === 0) {
  return 1;
  }
function factorial(number){
var recursiveFunction = function factorial(number){
if (number === 0){
  return 1;
  }
return number * factorial(number -1);
};
var a = recursiveFunction;
var b = recursiveFunction;
a === b;
a.name;
b.name;
var b = recursiveFunction;
var a = recursiveFunction;
a === b;
a.name;
b.name;
var uno = 2;.
var uno = 2;
function factorial (number){
if(number === 0) {
  return 1;
  }
return number * factorial (number -1);
}
var recursiveFunction = function factorial(number) {
if (number === 0) {
  return 1;
  }
return number * factorial(number-1);
}
};
var recursiveFunction = function factorial(number) {
if (number === 0) {
  return 1;
  }
return number * factorial(number-1);
};
var a = recursiveFunction;
var b = recursiveFunction;
a === b;
a.name;
b.name;
recursiveFunction !== factorial;
true.toString();
3.1415.toFixed(2);
'I want to be a pirate'.split(' ');
({}).hasOwnProperty('x');
(function(parameter) {return parameter;}).length;
function newPoint(x,y) {
var obj = ();
function newPoint(x,y) {
var obj = {}
function newPoint(x,y) {
var obj = {};
obj.x = x;
obj.y = y;
return obj;
}
function newShot(position, velocity) {
var obj = {};
obj._position= position;
obj._velocity = velocity;
obj.advance = function() {
  this._position.y += this._velocity;
  };
return obj;
}
var enemyShot = newShot(newPoint(15,15),2);
var allyShot = newShot(newPoint(15,585),-2);
enemyShot !== allyShot;
var s1 = newShot(newPoint(15,15),2);
var s2 = newShot(newPoint(15,15),2);
var s3 = newShot(newPoint(15,15),2);
s1.advance !== s2.advance;
s2.advance !== s3.advance;
s3.advance !== s1.advance;
var shotAPI = {
advance: function () {
  this._position.y += this._velocity;
  }
};
function newShot(position. velocity){
var obj = ();
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
}
function newShot(position. velocity){
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
}
function newShot(position. velocity){
var obj = {};
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
}
function newShot(position. velocity){
var obj = {};
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
}
};
return obj;
function newShot(position. velocity){
var obj = {};
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
};
;
var shotAPI = {
advance: function() {
  this._position.y += this.velocity;
  }
};
function newShot(position, velocity){
var obj = {};
obj._position = position;
obj._velocity = velocity;
obj.advance = shotAPI.advance;
return obj;
}
var s1 = newShot(newPoint(15,15),2);
var s2 = newShot(newPoint(15,15),2);
var s3 = newShot(newPoint(15,15),2);
s1.advance !== s2.advance;
s2.advance !== s3.advance;
s3.advance !== s1.advance;
function newShot(position, velocity){
var obj = {};
obj._position = position;
obj._velocity = velocity;
;obj.advance = newShot.api.advance;
return obj;
}
newShot.api = {
advance: function() {
  this.position.y += this._velocity;
  }
};
obj1                      obj2                        obj3
var obj3 = {f: 6};
var obj2 = Object.create(obj3);
obj2.d = 4;
obj2.e = 5;
var obj1 = Object.create(obj2);
obj1.a = 1;
obj1.b = 2;
obj1.c = 3;
obj1.c<,
obj1.c;
obj1.d;
obj1.f;
obj1.z; // undefined
obj1.hasOwnProperty('c');
obj1.hasOwnProperty('d');
obj1.hasOwnProperty('f');
obj1.hasOwnProperty('z');.
obj1.hasOwmProperty('z');
obj1.hasOwnProperty('z');
obj1.hasOwnProperty('z');
obj2.hasOwnProperty('c');
obj2.hasOwnProperty('d');
obj2.hasOwnProperty('f');
obj2.hasOwnProperty('z');
obj3.hasOwnProperty('c');
obj3.hasOwnProperty('d');
obj3.hasOwnProperty('f');
obj3.hasOwnProperty('z');
Object.getPrototypeOf(obj1) === obj2;
Object.getPrototypeOf(obj2) === obj3;
Object.getPrototypeOf(obj3) ===Object.prototype;
Object.getPrototypeOf(Object.prototype)=== null;
function newShot(position, velocity) {
var obj = Object.create(newShot.api);
obj._position = position;
obj._velocity = velocity;
return obj;
}
newShot.api = {
advance: function () {
  this._position.y += this._velocity;
  }
};
var nshot = newShot(newPoint(0,0),2);
var shot = newShot(newPoint(0,0),2);
shot;
shot.advance;
shot.hasOwnProperty('advance');
Object.getPrototypeOf(shot).hasOwnProperty('advance');
function anyFunction(){}
anyFunction.prototype;
anyFunction.prototype.constructor ===anyFunction;
var obj _= new anyFunction();
var anotherObj = new anyFunction();
var obj = new anyFunction();
obj !== anotherObj;
Object.getPrototypeOf(obj) === Object.getPrototypeOf(anotherObj);
Object.getPrototypeOf(obj) === anyFunction.prototype;
function Hero(name) {
this.name = name;
this.sword = null;
this.shield = null;
}
var hero = new Hero('Link');
hero
function Point (x,y) {
this.x = x;
this.y = y;
}
function Shot(position, velocity) {
this._position = position;
this._velocity = velocity;
}
Shot.prototype.advance = function ();{
this._position.y += this._velocity;
};
Shot.prototype.advance = function (){
this._position.y += this._velocity;
};
Shot.prototype.advance = function (){
Shot.prototype.advance = function (){
this._position.y += this._velocity;
};
var enmyShot = new Shot(new Point(15, 15),2);
var allyShot = new Shot(new Point(15, 585), -2);
enemyShot !== allyShot;
function Point (x,y) {
this.x= x;
this.y = y;
}
function Shot(position,valocity){
this._position = position;
this._velocity = velocity;
}
Shot.prototype.advance = function() {
this._position.y += this._velocity;
}
Shot.prototype.advance = function() {
this._position.y += this._velocity;
};
