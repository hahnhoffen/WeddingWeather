import { NavLink as RouterNavLink } from "react-router-dom";
import type { ReactNode } from "react";

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

function NavLink({ to, children }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        [
          "transition-colors",
          "hover:text-sky-300",
          isActive ? "text-sky-300 font-medium" : "text-slate-300",
        ].join(" ")
      }
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
