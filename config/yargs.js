const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es el factor por el cual se multiplicará la base'
                    }
                })
                .check( ( argv, options ) => {
                    if( isNaN( argv.b ) ){
                        throw 'La BASE tiene que ser un número'
                    } else if( isNaN( argv.h ) ){
                        throw 'El HASTA tiene que ser un número'
                    } 
                    return true;
                } )
                .argv;

// const argv = require('yargs')
//                 .option('b', {
//                     alias: 'base',
//                     type: 'number',
//                     demandOption: true
//                 })
//                 .check( ( argv, options ) => {
//                     if( isNaN( argv.b ) ){
//                         throw 'La base tiene que ser un número'
//                     }
//                     return true;
//                 } )
//                 .argv;

module.exports = argv;