[README.md](https://github.com/user-attachments/files/32347868/README.md)
# github-blog

Um blog que usa as *issues* de um repositório do GitHub como se fossem posts. A aplicação busca o perfil de um usuário e as issues do repositório `2305ray/github-blog` através da API pública do GitHub, permitindo pesquisar publicações e abrir cada uma delas para ler o conteúdo completo. Projeto feito na trilha Ignite (Rocketseat) para praticar consumo de API REST com React.

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Axios (consumo da API do GitHub)
- styled-components
- phosphor-react (ícones)

## 📦 Como rodar o projeto

```bash
# clone o repositório
git clone https://github.com/2305ray/github-blog.git
cd github-blog

# instale as dependências
npm install

# rode em modo desenvolvimento
npm run dev
```

Outros scripts disponíveis:

- `npm run build` — gera a versão de produção
- `npm run preview` — visualiza o build de produção localmente
- `npm run lint` — roda o ESLint

## 📁 Estrutura

O `src/lib/axios.ts` centraliza as chamadas à API do GitHub (busca de usuário, listagem de issues e detalhe de uma issue). O `src/contexts/userApi.tsx` guarda o usuário buscado em um Context, disponível para toda a aplicação. As páginas (`src/pages`) exibem a listagem de publicações e o detalhe de cada issue, e os componentes reutilizáveis (cabeçalho, perfil, busca) ficam em `src/components`.
