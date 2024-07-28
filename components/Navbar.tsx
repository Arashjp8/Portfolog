import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={"h-12 border border-lime-400 text-xl"}>
      <div className={"container mx-auto h-full"}>
        <div className={"flex justify-center items-center h-full"}>
          <ul className={"flex space-x-8 border border-sky-400"}>
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>item 1</Link>
            </li>
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>item 2</Link>
            </li>
            <li className={"hover:underline hover:text-white"}>
              <Link href={"#"}>item 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
