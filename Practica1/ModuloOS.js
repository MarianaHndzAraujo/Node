
const os= require('os');

console.log('Tipo de S.O', os.type());
console.log('Plataforma de S.O', os.platform());
console.log('Version de S.O', os.release());
console.log('Host Name de S.O', os.hostname());
console.log('Memoria Libre de S.O', os.freemem(),"bytes");
console.log('Memoria Total de S.O', os.totalmem(),"bytes");