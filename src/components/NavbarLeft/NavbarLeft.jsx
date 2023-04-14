import { useEffect, useRef } from "react";
import { animated } from "@react-spring/web";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosFilm } from "react-icons/io";
import { HiNewspaper, HiChartBar } from "react-icons/hi";
import { Link } from "react-router-dom";

import logo from "../../assets";
import Search from "../Search/Search";
import NavbarLink from "./NavbarLink";

function NavbarLeft({ onShow, style }) {
    // Use to click outside of navbarLeft
    const navbarRef = useRef();
    const handleCloseNavbar = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            onShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseNavbar, {
            passive: true,
        });

        return () =>
            document.removeEventListener("mousedown", handleCloseNavbar, {
                passive: true,
            });
    }, []);
    return (
        <animated.div
            className={`fixed left-0 top-0 bottom-0 bg-white w-[280px]
            shadow-navbar lg:hidden dark:bg-slate-800/90`}
            style={style}
            ref={navbarRef}
        >
            <div className="flex justify-between items-center px-2.5 mt-1">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-[50px] w-[156px]" />
                </Link>
                <AiOutlineClose
                    onClick={() => onShow(false)}
                    className="cursor-pointer"
                />
            </div>
            <div className="mt-4 px-2 text-sm">
                <Search navbar />
                <div className="flex flex-col mt-2">
                    <NavbarLink Icon={IoIosFilm} path="anime">
                        Anime
                    </NavbarLink>
                    <NavbarLink Icon={HiNewspaper} path="movie">
                        Movie
                    </NavbarLink>

                    <NavbarLink Icon={HiChartBar} path="bang-xep-hang">
                        BXH
                    </NavbarLink>
                </div>
            </div>
        </animated.div>
    );
}

export default NavbarLeft;
