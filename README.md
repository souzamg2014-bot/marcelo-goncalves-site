# Site pessoal de Marcelo Gonçalves

Landing page estática para o link da bio do Instagram.

## Abrir localmente

Abra `index.html` diretamente no navegador. Para conferir o comportamento mais próximo da hospedagem, também é possível iniciar um servidor local nesta pasta:

```powershell
python -m http.server 8080
```

Depois, acesse `http://127.0.0.1:8080`.

## Estrutura

- `index.html`: conteúdo e links.
- `styles.css`: identidade visual e responsividade.
- `script.js`: menu móvel e ano do rodapé.
- `assets/`: imagem usada no perfil.
- `downloads/`: e-book distribuído pelo botão principal.

## Publicação

A pasta `site/` foi preparada para ser um repositório independente no GitHub. Isso evita publicar os materiais de trabalho, conteúdos em revisão e credenciais que ficam nas outras pastas do projeto.

O workflow `.github/workflows/pages.yml` publica automaticamente a landing page no GitHub Pages sempre que houver um envio para a branch `main`.

Depois de criar o repositório no GitHub:

1. Enviar o conteúdo desta pasta para a branch `main`.
2. Abrir `Settings`, depois `Pages`.
3. Em `Build and deployment`, selecionar `GitHub Actions`.
4. Acompanhar a primeira publicação na aba `Actions`.

Antes de publicar, confirmar o endereço do LinkedIn. O domínio personalizado poderá ser configurado depois sem mudar a estrutura da página.
