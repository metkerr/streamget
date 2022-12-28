import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <nav className="flex">
      <div
        id="nav-wrapper"
        className="flex items-center gap-8 font-semibold text-lg"
      >
        <h1 className="text-[32px] leading-[4rem] mr-[1.15rem]">Streamget</h1>
        <Link
          href="/"
          className={clsx({
            ["text-green-500 active"]: currentPath === "/",
          })}
        >
          home
        </Link>
        <Link
          href="/about"
          className={clsx({
            ["text-green-500 active"]: currentPath === "/about",
          })}
        >
          about
        </Link>
        <Link href="/login">logout</Link>
      </div>
    </nav>
  );
};
export default Navbar;
