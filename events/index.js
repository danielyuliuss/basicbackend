const EventEmitter = require("events");

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   

const myEmitter = new EventEmitter();


   myEmitter.on("hbd",birthdayEventListener);

  myEmitter.emit("hbd",name ="daniel");

//   jika data yang dikirimkan pada fungsi emit berupa objek maka pada 
//   event listenernya harus didestructure dengan menuliskan kurung kurawal juga
//   di contoh ini param birthdayEventListener tidak berkurawal