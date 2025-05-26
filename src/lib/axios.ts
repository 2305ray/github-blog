import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const searchIssue = (query: string) => {
  return api.get("/search/issues", {
    params: {
      q: query,
    },
  });
};

// Função para buscar todas as issues de um repositório específico.
export const getIssues = (owner: string, repo: string) => {
  return api.get(`/repos/${owner}/${repo}/issues`);
};

// Função para buscar uma issue específica pelo número dela.
export const getIssue = (owner: string, repo: string, issue_number: number) => {
  return api.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
};