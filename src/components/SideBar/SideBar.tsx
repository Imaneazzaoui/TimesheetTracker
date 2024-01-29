import "./sidebar.css";
import { ReactNode } from "react";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { PiProjectorScreenChart } from "react-icons/pi";

const routes = [
  {
    path: "/Home",
    name: "Tableau de bord",
    icon: <LuLayoutDashboard />,
  },
  {
    path: "/Calendar",
    name: "Feuille de temps",
    icon: <BsCalendar2WeekFill />,
  },
  {
    path: "/Projects",
    name: "Liste des projets",
    icon: <PiProjectorScreenChart />,
  },
  {
    path: "/users",
    name: "Utilisateurs",
    icon: <FaUser />,
  },
  {
    path: "/Prestataires",
    name: "Prestataires",
    icon: <FaUser />,
  },
  {
    path: "/Setting",
    name: "Paramètres",
    icon: <BiCog />,
  },
  {
    path: "/",
    name: "Déconnexion",
    icon: <FaHome />,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top" style={{ marginBottom: "15px" }}>
        <span className="logo">
          <img src="../../src/assets/logo-light-fr.png" alt="Logo" />
        </span>
      </div>
      <hr style={{ borderColor: "#3D456F" }} />

      <section
        className="routes"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {routes.map((route) => (
          <div key={route.name}>
            <Link to={route.path} className="links">
              <div className="icon">{route.icon}</div>
              {route.name}
            </Link>
            <hr style={{ borderColor: "#3D456F" }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
