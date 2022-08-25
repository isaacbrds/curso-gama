var app = new function () {
    this.el = document.getElementById('counters');
    this.counters = ['Jõao', 'Erica', 'Jose'];
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
                data += '<td>' + this.counters[i] + '</td>'
                data += '<td><button onclick="app.Edit(' + i + ')">Editar</button></td>'
                data += '<td><button onclick="app.Delete(' + i + ')">Excluir</button></td>'
                data += '</tr>';
            }
        }

        this.count(this.counters.length);
        return this.el.innerHTML = data;

    }
    
    this.Add = function(){
        el = document.getElementById('add-name');

        var counter = el.value;
        if (counter) {
            this.counters.push(counter.trim());
            el.value = ''
            this.fetchAll();
        }

    }

    this.Edit = function(indice){
        el = document.getElementById('spoiler');
        el.style = 'display: block';
        input = document.getElementById('edit-name')
        input.value = this.counters[indice];
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            // Obter valor
            var counter = input.value;

            if (counter) {
                // Edita o valor
                self.counters.splice(indice, 1, counter.trim());
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
    
}

app.fetchAll();