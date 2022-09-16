//Modulos de Node
function suma(v1, v2) {
    return v1 + v2;
}

function resta(v1, v2) {
    return v1 - v2;
}

function multiplacion(v1, v2) {
    return v1 * v2;
}

function division(v1, v2) {
    if (v2 == 0) {
        console.log('No es posible dividir entre 0')
    } else {
        return v1 / v2;
    }

}

exports.suma = suma;
exports.resta = resta;
exports.multiplacion = multiplacion;
exports.division = division;