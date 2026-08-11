//IMPORTA O DECORATOS INJECTABLE DO ANGULAR
import { Injectable } from '@angular/core';
//IMPORTA O MODELO PESSOA
import { Pessoa } from '../models/pessoa';
//IMPORTA A FUNÇÃO 'of' DO RxJS PARA RETORNAR UM OBSERVABLE
import { of } from 'rxjs';

//DEFINE QUE ESTE SERVIÇO PODE SER INJETADO EM QUALQUER PARTE DA APLICAÇÃO
@Injectable({
    providedIn: 'root',
})
export class PessoaService {

    //MODIFICADOR DE ACESSO private
    //CRIA UM ARRAY PARA ARMAZENAR pessoas
    private pessoas : Pessoa[] = [];

    //ADICIONA UMA NOVA PESSOA AO ARRAY
    adicionar(pessoa: Pessoa){
        this.pessoas.push(pessoa)

        //SALVA OS DADOS NO LOCALSTORAGE (DESATIVADO)
        //localStorage.setItem('pessoasStorage', JSON.stringify(this.pessoas))
    }

    //RETORNA A LISTA DE pessoas CADASTRADAS
    listar(): Pessoa[]{
    // Recupera os dados do LocalStorage (desativado).
    /*
    const dados = localStorage.getItem('pessoasStorage');

    if (dados) {
      this.pessoas = JSON.parse(dados);
    } else {
      this.pessoas = [];
    }
    */
        return this.pessoas
    }

    //RETORNA A QUANTIDADE DE PESSOAS CADASTRADAS
    tamanhoArray(): number{
        return this.pessoas.length;
    }

    //PROCURA UMA pessoa PELO ID E RETORNA UM OBSERVABLE
    buscarPorId(id: number){
        //PROCURA A pessoa CUJO ID SEJA IGUAL AO INFORMADO
        const pessoa = this.pessoas.find(elem => elem.id == id);

        //RETORNA A pessoa ENCONTRADA COMO OBSERVABLE
        return of(pessoa);
    }

    //ATUALIZA OS DADOS DE UMA pessoa EXISTENTE
    editar(pessoa: Pessoa){
        //ENCONTRA A POSIÇÃO DA pessoa NO ARRAY PELO ID
        const posArray = this.pessoas.findIndex(elem => elem.id === pessoa.id);

        //SE ENCONTROU A pessoa SUBSTITUI PELOS NOVOS DADOS
        if (posArray !== -1){
            this.pessoas[posArray] = pessoa;
        }
    }

    //EXCLUIR UMA pessoa PELO ID
    excluir(id: number){
        //CRIA UM NOVO ARRAY SEM A pessoa CUJO ID FOI INFORMADO
        this.pessoas = this.pessoas.filter(elem => elem.id !== id);
    }
}
