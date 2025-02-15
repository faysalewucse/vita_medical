import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import vita from "../../assets/VITA.png";
import { useState } from "react";
import Container from "../Container";
import { Link, useNavigate } from "react-router-dom";
import { APPOINTMENT_PATH, DOCUMENTS_PATH, PROFILE_PATH } from "../../slugs";
import { Drawer } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Carte");

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const navItems = [
    {
      label: "Carte",
      path: "/",
    },
    {
      label: "Documents",
      path: DOCUMENTS_PATH,
    },
    {
      label: "Rendex-vous",
      path: APPOINTMENT_PATH,
    },
    {
      label: "Parameters",
      path: PROFILE_PATH,
    },
  ];

  return (
    <Container>
      <div className="flex justify-between p-5">
        <div className="flex items-center gap-2">
          <IoMdMenu
            className="md:hidden text-3xl text-primary"
            onClick={() => setOpen(true)}
          />
          <Link to="/">
            <img src={vita} alt="vita" className="w-16 h-6 my-auto" />
          </Link>
        </div>
        <div className="hidden md:flex text-base items-center gap-2 bg-background1 p-1 rounded-[20px]">
          {navItems.map((item, index) => (
            <p
              onClick={() => {
                setActive(item.label);
                navigate(item.path);
              }}
              className={`${
                active === item.label
                  ? "bg-primary text-white font-semibold"
                  : "text-gr"
              } py-2 px-10 rounded-[20px] text-center cursor-pointer`}
              key={index}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <IoMdNotificationsOutline className="text-3xl" />
          <img className="w-10" src={avatar} alt="avtr" />
        </div>
      </div>
      <Drawer
        title=""
        width="70%"
        onClose={onClose}
        open={open}
        placement="left"
      >
        <div className="md:hidden flex flex-col text-base gap-2 bg-background1 p-1 rounded-2xl">
          {navItems.map((item, index) => (
            <p
              onClick={() => {
                setActive(item);
                console.log(active);
                navigate(item.path);
              }}
              className={`${
                active === item.label ? "bg-primary text-white" : "text-gr"
              } py-2 px-5 rounded-2xl cursor-pointer`}
              key={index}
            >
              {item.label}
            </p>
          ))}
        </div>
      </Drawer>
    </Container>
  );
};

export default Navbar;
