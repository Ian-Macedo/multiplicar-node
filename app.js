//require`s
//const fs = require('fs');
//const fs = require('express'); //Libreria de express
//const fs = require('./fs'); //Archivos o librerias propias

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(process.argv);
//let argv2 = process.argv;

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

//console.log(`Limite: ${argv.limite}`);