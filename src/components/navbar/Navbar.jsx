"use client";

import styles from "./Navbar.module.css";
import NavLink from "./navLink/NavLink.jsx";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Shop",
        url: "/shop",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

const Navbar = () => {

    const[open,setOpen] = useState(false)

    const session = false;

    return (
        <nav className={styles.container}>
            <div>
                <Link className={styles.logo} href={"/"}>
                    <Image src="/logo bambrush.jpg" alt={"logo"} width={150} height={100}/>
                </Link>
            </div>
            <div>
                <ul className={styles.ul}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                    ))}
                    {
                        session ? (
                            <button>Logout</button>
                        ) : (
                            <NavLink item={{title: "Login", url: "/sign-in"}}/>
                        )
                    }
                </ul>
            </div>
            <button onClick={() => setOpen(prev => !prev)} className={styles.menu}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}/>
                    ))}
                </div>
            }
        </nav>
    );
}
export default Navbar