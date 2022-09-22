class Paciente {
    private nome: string;
    private idade: number;
    private doenca: string;
    private remedios: string[] = []

    constructor(nome: string, idade: number, doenca: string){
        this.nome = nome
        this.idade = idade
        this.doenca = doenca
    }
    public receita(medicamento: string){
        this.remedios.push(medicamento)
    }
}

const paciente = new Paciente('Victor', 18, 'Nasceu')

paciente.receita('Morrer')

console.log(paciente)