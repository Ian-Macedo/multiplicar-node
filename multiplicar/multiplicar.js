const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('==========================='.green);
    console.log(`======= Tabla del ${base} =======`.green);
    console.log('==========================='.green);
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let /*module.exports.*/ crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido: ${base}, no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i*base}\n`);
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}