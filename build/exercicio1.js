var Patinete = /** @class */ (function () {
    function Patinete(corRodas, corPatinete, qtdRodas, modelo, movimento) {
        this.corRodas = corRodas;
        this.corPatinete = corPatinete;
        this.qtdRodas = qtdRodas;
        this.modelo = modelo;
        this.movimento = movimento;
    }
    return Patinete;
}());
var patinete = new Patinete('Brancas', 'Azul', 6, 'American', (true));
console.log(patinete);
