# Site pessoal de Marcelo Gonçalves

Landing page estática para o link da bio do Instagram.

O portfólio reúne Today Brazil, CRM da comunidade, Klooks, Balanços Patrimoniais, o perfil `@automati.zei` e uma chamada para um projeto secreto, sem detalhes ou data de lançamento. Os contatos continuam no Instagram pessoal e no LinkedIn.

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

O e-book e suas chamadas foram retirados do site. Os materiais originais do guia permanecem na pasta `ebook/` do projeto editorial, fora deste repositório público.

## Publicação

A pasta `site/` foi preparada para ser um repositório independente no GitHub. Isso evita publicar os materiais de trabalho, conteúdos em revisão e credenciais que ficam nas outras pastas do projeto.

O workflow `.github/workflows/pages.yml` publica automaticamente a landing page no GitHub Pages sempre que houver um envio para a branch `main`.

Depois de criar o repositório no GitHub:

1. Enviar o conteúdo desta pasta para a branch `main`.
2. Abrir `Settings`, depois `Pages`.
3. Em `Build and deployment`, selecionar `GitHub Actions`.
4. Acompanhar a primeira publicação na aba `Actions`.

O domínio personalizado poderá ser configurado depois sem mudar a estrutura da página.
