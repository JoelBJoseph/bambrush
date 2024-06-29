import styles from "../navbar.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({item}) => {

    const currentPath = usePathname();

    const isActive = (path) => {
        return currentPath === path;
    }

    return(
        <Link href={item.url} key={item.title}
              className={`${styles.links} ${isActive(item.url) && styles.active}`}
              alt={item.title}>{item.title}</Link>
    );
}
export default NavLink