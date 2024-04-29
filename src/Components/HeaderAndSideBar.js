import { useState } from "react";
import useAuthentication from "../utils/useAuthentication";
import Header from "./Header";
import SideBar from "./SideBar";

const HeaderAndSideBar = () => {
  const [show, setShow] = useState(false);

  // Authentication
  useAuthentication();

  // Rendering the Component
  return (
    <div className='relative'>
      <Header show={show} setShow={setShow} />
      <SideBar show={show} setShow={setShow} />
    </div>
  )
}

export default HeaderAndSideBar;