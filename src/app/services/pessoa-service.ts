import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root',
})
export class PessoaService {

    //MODIFICADOR DE ACESSO private
    private pessoas : Pessoa[] = []

    adicionar(pessoa: Pessoa){
        this.pessoas.push(pessoa)
    }

    listar(): Pessoa[]{
        return this.pessoas
    }
}
