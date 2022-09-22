class Banco{
    private nome: string
    private senha: number
    private saque: number = 0
    private conta: string[] = [];

    constructor(nome: string, senha: number, saque: number){
        this.nome = nome
        this.senha = senha
        this.saque = saque
    }
    public sacar(saque){
        this.saque -= saque
        this.conta.push(`-${saque}`)
    }

}

const conta = new Banco('Victor', 1234, 200)

conta.sacar(100)

console.log(conta)