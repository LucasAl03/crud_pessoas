import { Routes } from '@angular/router';

import { Formulario } from './component/formulario/formulario';
import { HomeComponent } from './component/home-component/home-component';
import { Lista } from './component/lista/lista';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: Formulario
    },
    {
        path: 'cadastro/:id',
        component: Formulario
    },
    {
        path: 'lista',
        component: Lista
    }
];
