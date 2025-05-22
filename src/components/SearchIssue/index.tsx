import { HeaderSearch, SearchContainer } from "./styles";

export function SearchIssue() {
  return (
    <SearchContainer>
      <HeaderSearch>
        <p>Publicações </p>
        <span>6 Publicações</span>
      </HeaderSearch>

      <input placeholder="Buscar Conteúdo" />
    </SearchContainer>
  );
}
