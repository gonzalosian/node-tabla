const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();
// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.base );
// console.log('hasta: yargs', argv.hasta );
// console.log('listar: ', argv.listar );

// const [ , , arg3 = 'base=5', arg4 = 'limite=10' ] = process.argv;
// // console.log( arg3 );

// const [ , base = 5] = arg3.split('=');
// const [ , limite = 10] = arg4.split('=');

// console.log(base);

// const base = 3;

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log(`${nombreArchivo} creado!`.underline.red) )
    .catch( err => console.log(err) )