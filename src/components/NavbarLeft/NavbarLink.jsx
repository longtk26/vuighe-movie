import { Link } from "react-router-dom";

function NavbarLink({ Icon, children, path }) {
    return (
        <Link to={path} className="flex items-center gap-4 pt-4 pb-2 pl-0">
            <Icon className="w-[20px] h-[18px]" />
            {children}
        </Link>
    );
}

export default NavbarLink;
