const encriptar = (texto) => {
    let resultado = '';
    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];
        switch(letra){
            case 'a':
                resultado += '@';
                break;
            case 'e':
                resultado += '$';
                break;
            case 'i':
                resultado += '#';
                break;
            case 'o':
                resultado += '*';
                break;
            case 'u':
                resultado += '&';
                break;
            default:
                resultado += letra;
        }
    }
    return resultado;
};

const desencriptar = (texto) => {
    let resultado = '';
    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];
        switch(letra){
            case '@':
                resultado += 'a';
                break;
            case '$':
                resultado += 'e';
                break;
            case '#':
                resultado += 'i';
                break;
            case '*':
                resultado += 'o';
                break;
            case '&':
                resultado += 'u';
                break;
            default:
                resultado += letra;
        }
    }
    return resultado;
};

botonEncriptar = document.getElementById('encriptar');
botonDesencriptar = document.getElementById('desencriptar');

cajaResultado = document.getElementById('resultado');

botonEncriptar.addEventListener('click', () => {
    let texto = document.getElementById('texto').value;
    let resultado = encriptar(texto);
    cajaResultado.innerHTML = resultado;
});

botonDesencriptar.addEventListener('click', () => {
    let texto = document.getElementById('texto').value;
    let resultado = desencriptar(texto);
    cajaResultado.innerHTML = resultado;
});

botonCopiar = document.getElementById('copiar');
botonCopiar.addEventListener('click', () => {
    let texto = document.getElementById('resultado').innerHTML;
    cajaResultado.select();
    document.execCommand('copy');
});