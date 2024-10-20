import { NavLink } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import styles from "./ConvenorBreadcumbs.module.css";

function ConvenorBreadcumbs() {
  return (
    <div className={styles.ctr}>
      <NavLink
        to="/convenor/awards"
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
        to="/convenor/invite"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Invite Application
      </NavLink>
      <div className={styles.caret}>
        <CaretRight />
      </div>
      <NavLink
        to="/convenor/MCM_application"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Browse Application
      </NavLink>
    </div>
  );
}

export default ConvenorBreadcumbs;
