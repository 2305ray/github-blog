import coverDetail from "../../assets/coverDetail.png";
import Logo from "../../assets/Logo.svg";
import { HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContent>
      <img src={coverDetail} alt="Capa" className="cover" />
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
    </HeaderContent>
  );
}
