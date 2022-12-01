import { Outlet } from "react-router-dom";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";

export default function Dashboard(props) {
  console.log(props);
  return (
    <>
      <NavbarSection
        lightMode={props.lightMode}
        toggleMode={props.toggleMode}
      />
      <Outlet />
      <FooterSection lightMode={props.lightMode} />
    </>
  );
}
