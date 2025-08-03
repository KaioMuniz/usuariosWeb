
# Projeto: usuariosWeb

Este é um projeto desenvolvido em Angular para a criação e gerenciamento de usuários na web.
O **usuariosWeb** é uma aplicação web construída com Angular, que permite o gerenciamento de usuários. O sistema possibilita o cadastro, edição e remoção de usuários, entre outras funcionalidades que serão descritas abaixo.

<a href="https://youtu.be/a5LQhYKkElM">
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXZwZXVjamgwcjhiYXBwYTQwOHpoZXBxNWM1YXpneGMzbzFuY203eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jJJX0YkH5XtcfddEQa/giphy.gif" alt="Assista ao vídeo" width="360">
      </a>


### Organização dos Pacotes

```
src/
└── app/                                    # Diretório principal da aplicação Angular
    ├── app.ts                              # Módulo principal da aplicação
    ├── app.config.ts                       # Arquivo de configuração da aplicação
    ├── app.routes.ts                       # Rotas principais da aplicação
    ├── app.html                            # Template principal (geral)
    ├── app.css                             # Estilo global da aplicação
    ├── modules/                            # Agrupamento de módulos por contexto
    │   ├── admin/                          # Módulo de funcionalidades administrativas
    │   │   └── painel-principal/           # Tela inicial do painel administrativo
    │   │       ├── painel-principal.ts     # Lógica do componente
    │   │       ├── painel-principal.html   # Template HTML
    │   │       ├── painel-principal.css    # Estilos específicos
    │   │       └── painel-principal.spec.ts# Testes automatizados
    │   └── login/                          # Módulo responsável pela autenticação
    │       ├── autenticar-usuario/         # Tela de login
    │       │   ├── autenticar-usuario.ts   # Lógica de autenticação
    │       │   ├── autenticar-usuario.html # Template HTML
    │       │   ├── autenticar-usuario.css  # Estilos
    │       │   └── autenticar-usuario.spec.ts # Testes
    │       └── criar-usuario/              # Tela de criação de conta
    │           ├── criar-usuario.ts        # Lógica de criação
    │           ├── criar-usuario.html      # Template HTML
    │           ├── criar-usuario.css       # Estilos
    │           └── criar-usuario.spec.ts   # Testes

```


## Estrutura do Projeto

- **src/app**: Contém todos os componentes e módulos do aplicativo.
- **src/assets**: Arquivos estáticos como imagens, ícones, etc.
- **src/environments**: Contém as configurações de ambiente (desenvolvimento e produção).
- **angular.json**: Arquivo de configuração do Angular.
- **package.json**: Arquivo que define as dependências do projeto e scripts para execução.


## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento de aplicações web.
- **Node.js**: Ambiente de execução para o JavaScript no lado do servidor.
- **TypeScript**: Linguagem usada no desenvolvimento da aplicação.
- **HTML/CSS**: Linguagens de marcação e estilo para o front-end.
- **JSON**: Para configuração de rotas e dados da aplicação.

## Como Iniciar o Projeto

### 1. Clone o repositório

```bash
git clone https://seu-repositorio.git
cd usuariosWeb-main
```

### 2. Instale as dependências

No diretório do projeto, execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

## Contato

Para dúvidas ou sugestões, entre em contato:  
- kkaioribeiro@gmail.com
- https://www.linkedin.com/in/kaiomuniz/

---

