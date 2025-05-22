import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { SearchIssue } from "../../components/SearchIssue";
import { PublicationsContainer } from "./styles";

export function Publications() {
  return (
    <>

      <Header />
      <Perfil />

      <PublicationsContainer>
      <SearchIssue />
      </PublicationsContainer>
    </>
  );
}
