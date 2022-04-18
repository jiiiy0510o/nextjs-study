import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg"></img>
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
        }
        nav img {
          width: 100px;
          padding: 10px 0;
        }
        .active {
          color: tomato;
          font-weight: 700;
        }
        nav a {
          margin-top: 5px;
          font-size: 16px;
        }
        div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
