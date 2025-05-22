import {
    ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "phosphor-react";
import {
  PerfilContainer,
  PerfilContent,
  HeaderLink,
  FooterInformation,
  
} from "./styles";

export function Perfil() {
  return (
    <PerfilContainer>
      <img
        src="https://avatars.githubusercontent.com/u/167773794?s=400&u=64b2a8e6f3120354e3a6cdf3c2687bf827663298&v=4"
        alt=""
      />
      <PerfilContent>
        <HeaderLink>
          <h1>Cameron Williamson</h1>
          <a
            href="https://github.com/2305ray"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowSquareOut/>
          </a>
        </HeaderLink>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        <FooterInformation>
          <p>
            <GithubLogo weight="fill"/> Camronwll
          </p>

          <p>
            <Buildings weight="fill"/> RocketSeat
          </p>

          <p>
            <Users weight="fill"/> 32 Seguidores
          </p>
        </FooterInformation>
      </PerfilContent>
    </PerfilContainer>
  );
}
