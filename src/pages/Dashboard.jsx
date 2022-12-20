import { Outlet } from "react-router-dom";
import NavbarSection from "../components/NavbarSection";
import FooterSection from "../components/FooterSection";

export default function Dashboard(props) {
  return (
    <>
      {/* pass data used in dashboard */}
      <NavbarSection
        key={props.cartItems}
        lightMode={props.lightMode}
        toggleMode={props.toggleMode}
        cartItems={props.cartItems}
        removeItem={props.removeItem}
        checkout={props.checkout}
        isUser={props.isUser}
        toggleUser={props.toggleUser}
        clearUserCart={props.clearUserCart}
        updateUserCart={props.updateUserCart}
      />
      {/* show the pages that are nested in this router element
      between the nav and header */}
      <Outlet />
      <FooterSection lightMode={props.lightMode} />
    </>
  );
}
