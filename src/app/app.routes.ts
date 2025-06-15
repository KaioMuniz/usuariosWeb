import { Routes } from '@angular/router';
import { CriarUsuario } from './modules/login/criar-usuario/criar-usuario';
import { AutenticarUsuario } from './modules/login/autenticar-usuario/autenticar-usuario';
import { PainelPrincipal } from './modules/admin/painel-principal/painel-principal';

export const routes: Routes = [
    {
        path: 'login/criar-usuario', component: CriarUsuario
    },
    {
        path: 'login/autenticar-usuario', component: AutenticarUsuario
    },
    {
        path: 'admin/painel-principal', component: PainelPrincipal
    },
    {
        path: '', redirectTo: '/login/autenticar-usuario', pathMatch: 'full'
    }
];
