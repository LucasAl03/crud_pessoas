import { Routes } from '@angular/router';
import { Formulario } from './component/formulario/formulario';
import { HomeComponent } from './component/home-component/home-component';
import { Menu } from './component/menu/menu';

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
    }
];
