class Livros{

    constructor(nome, autor, editora, paginas){
        this.nome  =   nome;
        this.autor =   autor;
        this.editora = editora;
        this.paginas = paginas;
    }

    vendaTitulo(){
        console.log(`Nome do livro: ${this.nome} do Autor ${this.autor}`);
    }

    editora(){
        console.log(`Nome do editora: ${this.editora}`);
    }
}

const livro  = new Livros("Aprenda JS", "Ricardo Fonseca", "IFCE", 320);
livro.vendaTitulo();