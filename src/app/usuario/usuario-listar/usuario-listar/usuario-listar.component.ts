import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrl: './usuario-listar.component.scss'
})
export class UsuarioListarComponent implements OnInit {

  usuario$: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();

  }

  listarUsuarios(){
    this.usuario$ = this.usuarioService.listar();
  }
}
