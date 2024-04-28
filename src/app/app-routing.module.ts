import { Usuario } from './usuario/usuario.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path: "usuarios",
    loadChildren: () => import('./usuario/usuario-listar/usuario-listar.module').then(modulo => modulo.UsuarioListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
