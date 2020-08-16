// requires
// const fs = require('express');
// const fs = require('fs');

const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

// let base = 20;
// let contenido = '';
// for (let i = 1; i <= 10; i++) {
//     contenido += `${base } * ${ i } = ${base * i}\n`
// }
// console.log(module);
// const data = new Uint8Array(Buffer.from(contenido));
// fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado !');
// });

// let argv2 = process.argv;
// console.log(argv.base);
// console.log('limite : ', argv.limite);
// console.log(argv2);
// console.log(argv);
let comando = argv._[0];

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);
// console.log(comando);


switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:\n ${archivo }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');


}


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo }`))
//     .catch(e => console.log(e));