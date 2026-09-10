# Lucas Beghetto Dias — Portfólio

Portfólio estático em HTML, CSS e JavaScript, baseado no currículo de Lucas Beghetto Dias. Não precisa de backend nem de instalação de dependências.

## Como abrir localmente

Abra o arquivo `index.html` no navegador. Para desenvolvimento local com Python:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

O portfólio usa `localStorage` para salvar os projetos adicionados pelo formulário. Isso significa que os projetos adicionados pelo navegador ficam salvos naquele navegador/dispositivo. Para deixar projetos fixos para todos os visitantes, edite o array `defaultProjects` no arquivo `script.js`.

## Conteúdo

- `index.html` — estrutura e conteúdo da página
- `style.css` — identidade visual responsiva
- `script.js` — filtros, animações e área de projetos editável
- `assets/profile.png` — foto extraída do currículo
- `Currículo.pdf` — currículo original para download
