import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={"h-auto md:h-20 text-xl"}>
      <div className={"container mx-auto h-full"}>
        <div
          className={
            "flex flex-col md:flex-row justify-center md:justify-between items-center h-full space-y-4 md:space-y-0 py-2"
          }
        >
          <a
            href={"#"}
            className={
              "flex items-center justify-center md:justify-start w-full md:w-auto text-2xl text-violet-300 font-bold"
            }
          >
            <h1>Arash Jafarpour</h1>
          </a>
          <ul
            className={
              "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center md:items-end w-full md:w-auto"
            }
          >
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>blog</Link>
            </li>
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>portfolio</Link>
            </li>
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
