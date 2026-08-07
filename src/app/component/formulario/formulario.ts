import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../models/pessoa';
import { ActivatedRoute } from '@angular/router';

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
  idPessoaEdit = 0
  edit = false
  uf = ''
  cidade = ''

  constructor(private PessoaService: PessoaService){}

  save(){
    console.log(this.nome, this.cpf, this.email, this.dataNascimento, this.uf, this.cidade)
    const pessoa = new Pessoa()
    pessoa.id = this.PessoaService.tamanhoArray() + 1
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.dataNascimento = this.dataNascimento


    this.PessoaService.adicionar(
      pessoa
      /*id: this.PessoaService.tamanhoArray()+1,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      uf: this.uf,
      cidade: this.cidade
    }*/
   )

    this.limparAtributos()
  }

limparAtributos(){
  this.nome = ''
  this.email = ''
  this.cpf = ''
  this.dataNascimento = ''
}
}


