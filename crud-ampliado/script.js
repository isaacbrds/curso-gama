var app = new function () {
    this.el = document.getElementById('counters');
    this.counters = [['Mouse', '35', '10', '350']];
    this.count = function (data) {
        var el = document.getElementById('counter');
        var name = 'Registro';

        if (data) {
            if (data > 1) {
                name = 'Registros';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'Nenhum ' + name;
        }
    }

    this.fetchAll = function () {
        var data = '';
        if (this.counters.length > 0) {
            for (var i = 0; i < this.counters.length; i++) {
                data += '<tr>';
                for(var j= 0; j < this.counters[i].length; j++){
                    data += '<td>' + this.counters[i][j] + '</td>'
                }
                data += '<td><button onclick="app.Edit(' + i + ')">Editar</button></td>'
                data += '<td><button onclick="app.Delete(' + i + ')">Excluir</button></td>'
                data += '</tr>';
            }
        }

        this.count(this.counters.length);
        return this.el.innerHTML = data;

    }
    
    this.Add = function(){
        produto = document.getElementById('add-name')
        valor = document.getElementById('add-valor')
        quantidade = document.getElementById('add-quantidade')
        
        var counter = [produto.value, valor.value, quantidade.value, valor.value * quantidade.value];
        if (counter) {
            this.counters.push(counter);
            produto.value = '';
            valor.value = '';
            quantidade.value = '';
            this.fetchAll();
        }

    }

    this.Edit = function(indice){
        el = document.getElementById('spoiler');
        el.style = 'display: block';
        produto = document.getElementById('edit-name')
        produto.value = this.counters[indice][0];
        valor = document.getElementById('edit-valor')
        valor.value = this.counters[indice][1];
        quantidade = document.getElementById('edit-quantidade')
        quantidade.value = this.counters[indice][2];
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            // Obter valor
            var counter = [produto.value, valor.value, quantidade.value];

            if (counter) {
                // Edita o valor
                self.counters.splice(indice, 1, counter);
                // Exibe a nova lista
                self.fetchAll();
                //Ocultar campos
                self.closeInput();
            }
        }
    }

    this.closeInput = function(){
        el = document.getElementById('spoiler');
        el.style = 'display: none;';
        input = document.getElementById('edit-name')
        input.value = '';       
    }

    this.Delete = function(indice){
        this.counters.splice(indice,1);
        this.fetchAll()
    }

    this.gravarArquivo = function(){
        let texto = ''

        for (let i = 0; i < this.counters.length; i++){
            for(var j= 0; j < this.counters[i].length; j++){
                if(j % 4 === 0){
                    texto += "\n";
                }
                texto +=  ` ${this.counters[i][j]} |`
            }
        }
        let blob = new Blob([texto],
            {
                type:"text/plain;charset=utf-8"
        
            });
            saveAs(blob,"Estoque.txt");
    }
    
    
}

app.fetchAll();