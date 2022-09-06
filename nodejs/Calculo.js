class Calculo{
    constructor(nomeAluno, disciplinaAluno, nota1, nota2, media){
        this.nomeAluno =   nomeAluno;
        this.disciplinaAluno =   disciplinaAluno;
        this.nota1 =   nota1;
        this.nota2 =   nota2;
        this.media =   media;
    }

    mostraNomeEMedia(){
        console.log(`O nome é : ${this.nomeAluno} com média: ${this.media}`)
 
    }

    mostraNomeENotas(){
        console.log(`O nome do aluno é: ${this.nomeAluno} com notas: ${this.nota1} - ${this.nota2}`)
    }

    mostraMediaAluno(){
        console.log(`A media do aluno é : ${this.media}`)
    }
}

const aluno = new Calculo('aluno', 'programação I', 8, 10, 9);

aluno.mostraNomeEMedia()
aluno.mostraNomeENotas()
aluno.mostraMediaAluno()