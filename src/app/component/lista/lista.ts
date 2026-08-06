import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  constructor(private pessoService: PessoaService){}

  listaPessoa(){
    return this.pessoService.listar()
  }

  excluirItem(){
    
  }
}