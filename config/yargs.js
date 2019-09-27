// Mi version
// const crear = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'
//     }
// }

// const { descripcion } = crear;

// const completado = {
//     // descripcion: {
//     //     demand: true,
//     //     alias: 'd',
//     //     desc: 'Descripcion de la tarea por hacer'
//     // },
//     descripcion,
//     completado: {
//         // demand: true,
//         alias: 'c',
//         default: true,
//         desc: 'Marca como completado o pendiente la tarea por hacer'
//     }
// }

// // completado.descripcion = descripcion.descripcion
// // console.log(crear);
// // console.log(completado);

// Version del curso
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    // demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}