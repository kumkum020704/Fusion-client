import { NavLink } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import styles from "./ConvenorBreadcumbs.module.css";

function ConvenorBreadcumbs() {
  return (
    <div className={styles.ctr}>
      <NavLink
        to="/Convenor"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Catalog
      </NavLink>
      <div className={styles.caret}>
        <CaretRight />
      </div>
      <NavLink
        to="/Convenor/inviteApplications"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Invite Applications
      </NavLink>
      <div className={styles.caret}>
        <CaretRight />
      </div>
      <NavLink
        to="/Convenor/BrowseApplications"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Browse Applications
      </NavLink>
    </div>
  );
}

export default ConvenorBreadcumbs;
