import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { FormsModule } from '@angular/forms';

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

  constructor(private PessoaService: PessoaService){}

  save(){
    this.PessoaService.adicionar({
      id: 1,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
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


