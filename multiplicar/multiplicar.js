const fs = require('fs');
var colors = require('colors');

let listartabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        console.log('=========================='.green);
        console.log('          TABLA MULTIPLICAR       ');
        console.log('=========================='.green);
        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            contenido += `${base } * ${ i } = ${base * i}\n`
        }
        console.log('=========================='.green);
        resolve(contenido);

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            contenido += `${base } * ${ i } = ${base * i}\n`
        }

        const data = new Uint8Array(Buffer.from(contenido));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}`)
        });
    });
}

module.exports = {
    crearArchivo,
    listartabla
}