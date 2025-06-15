import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css'
})
export class AutenticarUsuario {

  //injeções de dependência
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  //estrutura do formulário
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]]
  });

  //método para capturar o submit do formulário
  onSubmit() {
    //fazendo uma requisição HTTP POST para autenticar o usuário
    this.http.post('http://localhost:8081/api/usuarios/autenticar', this.form.value)
      .subscribe({ //aguardando a resposta da requisição
        next: (response) => { console.log(response); }, //capturando a resposta de sucesso
        error: (e) => { console.log(e.error); } //capturando a resposta de erro
      })
  }

}
