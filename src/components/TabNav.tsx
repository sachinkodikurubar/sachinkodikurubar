import { NavLink } from "react-router-dom";

const tabs = [
  { label: "About", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const TabNav = () => {
  return (
    <nav className="flex items-center gap-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end={tab.path === "/"}
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default TabNav;
