import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import {
  PerfilContainer,
  PerfilContent,
  HeaderLink,
  FooterInformation,
} from "./styles";

import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

export function Perfil() {
  const { user, fetchUser } = useUser();
  useEffect(() => {
    fetchUser("2305ray");
  }, [fetchUser]);

  return (
    <PerfilContainer>
      <img src={user?.avatar_url} alt={user?.login} />

      <PerfilContent>
        <HeaderLink>
          <h1>{user?.name}</h1>
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowSquareOut />
          </a>
        </HeaderLink>
        <p>{user?.bio}</p>
        <FooterInformation>
          <p>
            <GithubLogo weight="fill" /> {user?.login}
          </p>

          <p>
            <Buildings weight="fill" /> {user?.company}
          </p>

          <p>
            <Users weight="fill" />
            {user?.followers} Seguidores
          </p>
        </FooterInformation>
      </PerfilContent>
    </PerfilContainer>
  );
}
