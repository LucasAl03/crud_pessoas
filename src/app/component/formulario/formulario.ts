import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''
  uf = ''
  cidade = ''

  constructor(private PessoaService: PessoaService){}

  save(){
    console.log(this.uf, this.cidade)
    this.PessoaService.adicionar({
      id: this.PessoaService.tamanhoArray()+1,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      uf: this.uf,
      cidade: this.cidade
    })

    this.limparAtributos()
  }

limparAtributos(){
  this.nome = ''
  this.email = ''
  this.cpf = ''
  this.dataNascimento = ''
}
}


