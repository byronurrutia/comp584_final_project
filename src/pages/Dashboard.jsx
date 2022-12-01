import { Outlet } from "react-router-dom";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";

export default function Dashboard() {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
}
