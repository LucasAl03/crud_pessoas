// Importa o decorator Component do Angular.
import { Component } from '@angular/core';

// Importa o serviço responsável por gerenciar as pessoas.
import { PessoaService } from '../../services/pessoa-service';

// Importa o modelo Pessoa.
import { Pessoa } from '../../models/pessoa';

// Importa o Router para realizar navegação entre páginas.
import { Router } from '@angular/router';

@Component({
  // Define o seletor do componente.
  selector: 'app-lista',

  // Lista de módulos importados pelo componente.
  imports: [],

  // Define o arquivo HTML do componente.
  templateUrl: './lista.html',

  // Define o arquivo de estilos do componente.
  styleUrl: './lista.css',
})
export class Lista {

  // Injeta o serviço de navegação e o serviço de pessoas.
  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  // Retorna a lista de pessoas cadastradas.
  listar() {
    return this.pessoaService.listar();
  }

  // Exclui uma pessoa da lista.
  exluir(pObjPessoa: Pessoa) {

    // Solicita confirmação antes de excluir.
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {

      // Remove a pessoa pelo ID.
      this.pessoaService.excluir(Number(pObjPessoa.id));
    }

    // Atualiza a lista após a exclusão.
    this.listar();
  }

  // Navega para a tela de edição da pessoa selecionada.
  buscarPorId(pObjPessoa: Pessoa) {

    // Redireciona para a rota "/cadastro/:id".
    this.router.navigate(['/cadastro', pObjPessoa.id]);
  }

}