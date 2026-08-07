// Importa o decorator Component do Angular.
import { Component } from '@angular/core';

// Importa o FormsModule para utilizar formulários com ngModel.
import { FormsModule } from '@angular/forms';

// Importa o modelo Pessoa.
import { Pessoa } from '../../models/pessoa';

// Importa o serviço responsável por gerenciar as pessoas.
import { PessoaService } from '../../services/pessoa-service';

// Importa o ActivatedRoute para acessar parâmetros da URL.
import { ActivatedRoute } from '@angular/router';

@Component({
  // Define o seletor do componente.
  selector: 'app-formulario',

  // Importa o FormsModule para uso no componente.
  imports: [FormsModule],

  // Define o arquivo HTML do componente.
  templateUrl: './formulario.html',

  // Define o arquivo de estilos do componente.
  styleUrl: './formulario.css',
})
export class Formulario {

  // Atributos utilizados no formulário.
  id = 0;
  nome = '';
  email = '';
  cpf = 0.0;
  dataNascimento = '';

  // Armazena o ID da pessoa em edição.
  idPessoaEdit = 0;

  // Indica se o formulário está em modo de edição.
  edit = false;

  // Injeta o serviço de rotas e o serviço de pessoas.
  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) { }

  // Salva uma nova pessoa.
  salvar() {

    // Exibe os dados digitados no console.
    console.log(this.nome, this.email, this.cpf, this.dataNascimento);

    // Cria um novo objeto Pessoa.
    const pessoa = new Pessoa();

    // Gera um ID para a pessoa.
    pessoa.id = this.pessoaService.tamanhoArray() + 1;

    // Preenche os atributos da pessoa.
    pessoa.nome = this.nome;
    pessoa.email = this.email;
    pessoa.cpf = this.cpf;
    pessoa.dataNascimento = this.dataNascimento;

    // Adiciona a pessoa ao serviço.
    this.pessoaService.adicionar(pessoa);

    // Limpa os campos do formulário.
    this.limpaAtributos();
  }

  // Limpa os campos do formulário.
  limpaAtributos() {
    this.nome = '';
    this.email = '';
    this.cpf = 0.0;
    this.dataNascimento = '';
  }

  // Carrega os dados da pessoa nos campos do formulário.
  carregaAtributos(pessoa: Pessoa) {
    this.nome = String(pessoa.nome);
    this.email = String(pessoa.email);
    this.cpf = Number(pessoa.cpf);
    this.dataNascimento = String(pessoa.dataNascimento);
  }

  // Executado quando o componente é inicializado.
  ngOnInit() {

    // Obtém o parâmetro "id" da URL.
    const idPessoa = this.route.snapshot.paramMap.get('id');

    // Converte o ID para número.
    this.idPessoaEdit = Number(idPessoa);

    // Se existir um ID, entra no modo de edição.
    if (idPessoa) {

      this.edit = true;

      // Busca a pessoa pelo ID.
      this.pessoaService.buscarPorId(Number(idPessoa))
        .subscribe(objPessoa => {

          // Se encontrou a pessoa, carrega os dados no formulário.
          if (objPessoa) {
            this.carregaAtributos({ ...objPessoa });
          }

        });
    }
  }

  // Salva ou atualiza uma pessoa.
  save() {

    // Cria um objeto Pessoa.
    const pessoa = new Pessoa();

    // Preenche os atributos.
    pessoa.nome = this.nome;
    pessoa.email = this.email;
    pessoa.cpf = this.cpf;
    pessoa.dataNascimento = this.dataNascimento;

    // Verifica se está editando ou cadastrando.
    if (this.edit) {

      // Mantém o mesmo ID.
      pessoa.id = this.idPessoaEdit;

      // Atualiza a pessoa.
      this.pessoaService.editar(pessoa);

      // Sai do modo de edição.
      this.edit = false;

    } else {

      // Gera um novo ID.
      pessoa.id = this.pessoaService.tamanhoArray() + 1;

      // Adiciona a nova pessoa.
      this.pessoaService.adicionar(pessoa);
    }

    // Limpa os campos após salvar.
    this.limpaAtributos();
  }

  // Atualiza uma pessoa após confirmação.
  alterar(pessoa: Pessoa) {

    // Exibe uma confirmação ao usuário.
    if (confirm("Tem certeza que deseja Alterar a Pessoa?")) {

      // Atualiza os dados da pessoa.
      this.pessoaService.editar(pessoa);
    }
  }

}