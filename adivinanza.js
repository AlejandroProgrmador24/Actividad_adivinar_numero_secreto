const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
    console.log('¡Exelente! Ahora sabemos que eres lo suficientemente inteligente para pensar en lo basico');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('¡mmm, casi! Pero el numero secreto es mas chico, ¡Sigue intentando!');
    } else {
    console.log('¡uy uy uy! Un poco mas alto no vendria mal, ¡Sigue intentando!');
    }
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    