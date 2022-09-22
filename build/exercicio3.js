var Paciente = /** @class */ (function () {
    function Paciente(nome, idade, doenca) {
        this.remedios = [];
        this.nome = nome;
        this.idade = idade;
        this.doenca = doenca;
    }
    Paciente.prototype.receita = function (medicamento) {
        this.remedios.push(medicamento);
    };
    return Paciente;
}());
var paciente = new Paciente('Victor', 18, 'Nasceu');
paciente.receita('Morrer');
console.log(paciente);
