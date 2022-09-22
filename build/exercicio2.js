var Banco = /** @class */ (function () {
    function Banco(nome, senha, saque) {
        this.saque = 0;
        this.conta = [];
        this.nome = nome;
        this.senha = senha;
        this.saque = saque;
    }
    Banco.prototype.sacar = function (saque) {
        this.saque -= saque;
        this.conta.push("-".concat(saque));
    };
    return Banco;
}());
var conta = new Banco('Victor', 1234, 200);
conta.sacar(100);
console.log(conta);
