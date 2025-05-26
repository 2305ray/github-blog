import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssue } from "../../lib/axios";

interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  html_url: string;
  comments: number;
}

export function PublicationCard() {
  const { number } = useParams<{ number: string }>();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      try {
        if (number) {
          const response = await getIssue("2305ray", "github-blog", Number(number));
          setIssue(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar a issue:", error);
      }
    }

    fetchIssue();
  }, [number]);

  if (!issue) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ padding: "16px" }}>
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
      <p>Autor: {issue.user.login}</p>
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
      <p>Comentários: {issue.comments}</p>
      <small>
        Publicado em: {new Date(issue.created_at).toLocaleDateString("pt-BR")}
      </small>
    </div>
  );
}
