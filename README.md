# Laboratório do Marcelo

Ferramentas e experiências gratuitas de Marcelo Gonçalves, como extensão dos conteúdos do Instagram `@marcelogoncalves.ofc` e do YouTube `@Marcelo-LousaViva`.

## Direção definida em 21/10/2026

A página principal passa de portfólio para laboratório público. O foco é abrir ferramentas próprias no navegador, testar ideias dos vídeos e aprender na prática. Acesso gratuito e sem cadastro, com convite para acompanhar os canais. Links para serviços externos não compõem o catálogo de ferramentas.

## Experiências disponíveis

- `promptlab/index.html`: biblioteca interativa fornecida por Marcelo. São 420 atalhos em 20 categorias e 60 combinações, com busca, seleção, favoritos e cópia do prompt. Os atalhos são convenções de escrita, não comandos oficiais de uma IA. As escolhas ficam no navegador do visitante. A biblioteca monta textos; não executa modelos de IA.
- `ferramentas/media-mediana/index.html`: simulador do estudo Quem a média representa? Quatro receitas fictícias de R$ 2.000 por mês ficam fixas e a quinta varia de R$ 0 a R$ 40.000. Gráfico, média, mediana e contas acompanham a alteração. A prévia original de 19/10 foi preservada; esta versão contém somente a ferramenta, sem vídeo ou voz sintética.

O arquivo `PromptLab_Instagram_Interativo-1.html` permanece intacto como original recebido. A página adaptada ganha retorno ao laboratório e acentos em azul. A antiga página de portfólio foi copiada para `../historico/site/2026-10-21-portfolio/`, fora deste repositório público; o histórico Git também a conserva.

## Abrir e conferir

Abra `index.html` no navegador ou execute `python -m http.server 8080` nesta pasta e acesse `http://127.0.0.1:8080`.

A home, o PromptLab e o simulador funcionam em uma hospedagem estática, sem dependências de build ou serviços de IA. Configuração pública do canal em `laboratorio.config.js`.

A verificação de integração está em `../verificacoes/site-laboratorio/`. Ela exercita busca, filtros, menu, navegação por teclado, seleção, favoritos, persistência e cálculos, em larguras de computador e celular. Não faz uma revisão editorial de cada um dos 420 atalhos.

## Acrescentar uma ferramenta dos vídeos

1. Criar uma pasta própria em `ferramentas/<nome>/`, com `index.html` e seus arquivos de apoio. Usar caminhos relativos, para manter o funcionamento no subdiretório do GitHub Pages.
2. Incluir uma pergunta clara, instruções curtas, variáveis editáveis, condições fixas, unidade e período. Distinguir exemplos fictícios, dados observados e hipóteses. Identificar fontes quando aplicável.
3. Oferecer retorno para `../../index.html#explorar`. Manter a identidade do laboratório; estudos Lousa Viva podem usar a paleta grafite da série.
4. Adicionar um `article.tool-card` em `#tool-grid`, com `data-category`, palavras de busca em `data-search`, descrição, recursos reais e link para a ferramenta. A busca e a contagem usam esses cartões automaticamente. Atualizar também a contagem inicial exibida sem JavaScript.
5. Quando o vídeo estiver público e confirmado, incluir seu link na página da ferramenta. Não usar o link do canal como se fosse o vídeo daquele episódio.
6. Testar as contas e as interações reais, o uso por teclado e a leitura em tela pequena. Só marcar como disponível quando funcionar. Ideias futuras ficam na seção Em bancada.

Não colocar credenciais, dados de clientes ou materiais de trabalho nesta pasta. Não enviar entradas do visitante para serviços externos sem um fluxo explícito para isso.

## GitHub Pages

Repositório: `souzamg2014-bot/marcelo-goncalves-site`, branch `main`.

O workflow `.github/workflows/pages.yml` publica esta pasta quando a branch principal recebe alterações. Atualizações de site não autorizam posts, anúncios ou agendamentos nas redes sociais. Manter o fluxo de revisão editorial próprio desses canais.
