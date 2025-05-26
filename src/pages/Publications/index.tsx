import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { SearchIssue } from "../../components/SearchIssue";
import { PublicationsContainer, PublicationsContent } from "./styles";
import { getIssues } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}


export function Publications() {
  const [issues, setIssues] = useState<Issue[]>([]); //vai armazenar as issues
  const navigate = useNavigate(); //direciona pra outra pagina

  useEffect(() => {
    async function fetchIssues() {
      //Executa a função automaticamente quando o componente carrega
      try {
        const response = await getIssues("2305ray", "github-blog");
        setIssues(response.data);
      } catch (error) {
        console.error("Erro ao buscar issues:", error);
      }
    }

    fetchIssues();
  }, []);


  return (
    <>
      <Header />
      <Perfil />

      <PublicationsContainer>
        <SearchIssue />

        <PublicationsContent>
          {issues.map((issue) => (
            <div
              key={issue.id}
              onClick={() => navigate(`/issue/${issue.number}`)}
            >
              <h3>{issue.title}</h3>
              <p>{issue.body.substring(0, 100)}...</p> {/* só um resumo */}
              <small>
                {new Date(issue.created_at).toLocaleDateString("pt-BR")}
              </small>
            </div>
          ))}
        </PublicationsContent>
      </PublicationsContainer>
    </>
  );
}
