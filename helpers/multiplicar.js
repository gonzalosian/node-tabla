const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base=5, limite=10, listar=false ) => {
    
    try {
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= limite; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`.green;
        }
        
        if(listar){
            console.log('=============================');
            console.log(`======== Tabla del ${base} ========`.yellow);
            console.log('=============================');
            console.log(consola);
        }
    
        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`Archivo creado: tabla-${base}.txt`);
        // } )
    
        // Este es mas sensillo de manejar, pero para manejar errores, debemos usar el try-catch
        fs.writeFileSync( `./salida/tabla-${base}-${limite}.txt`, salida);

        return `tabla-${base}-${limite}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}