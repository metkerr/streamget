import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { signOut } from "next-auth/react";

const Navbar = (props: any) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const isLogin: boolean =
    props.passedData != undefined || props.passedData != null;

  return (
    <nav className="flex">
      <div
        id="nav-wrapper"
        className="flex items-center gap-8 font-semibold text-lg"
      >
        <h1 className="text-[32px] leading-[4rem] mr-[1.15rem]">Streamget</h1>
        {isLogin && (
          <Link
            href="/"
            className={clsx({
              ["text-green-500 active"]: currentPath === "/",
            })}
          >
            home
          </Link>
        )}
        <Link
          href="/about"
          className={clsx({
            ["text-green-500 active"]: currentPath === "/about",
          })}
        >
          about
        </Link>
        {isLogin ? (
          <Link href="/login" onClick={() => signOut()}>
            logout
          </Link>
        ) : (
          <Link href="/login">login</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
