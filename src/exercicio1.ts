class Patinete{
    private corRodas: string;
    private corPatinete: string;
    private qtdRodas: number;
    private modelo: string
    private movimento: boolean


    constructor(corRodas: string, corPatinete: string, qtdRodas: number, modelo: string, movimento: boolean){
        this.corRodas = corRodas
        this.corPatinete = corPatinete
        this.qtdRodas = qtdRodas
        this.modelo = modelo
        this.movimento = movimento
    }

    
}

const patinete = new Patinete('Brancas', 'Azul', 6, 'American', (true))

console.log(patinete)