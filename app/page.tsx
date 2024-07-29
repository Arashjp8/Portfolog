import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      style={{ gridTemplateRows: "auto 1fr auto" }}
      className={
        "bg-gray-950 text-white/80 min-h-screen grid grid-cols-1 items-cneter"
      }
    >
      <Navbar />
      <main className={"container mx-auto"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-3 gap-4 border border-sky-300 h-full min-h-[600px]"
          }
        >
          <div className={"md:col-span-2 grid grid-rows-3 gap-4"}>
            <div className={"border border-lime-300 row-span-2"}>2</div>
            <div className={"border border-violet-300 row-span-1"}>3</div>
          </div>
          <div className={"grid grid-rows-2 gap-4"}>
            <div className={"border border-rose-300 row-span-2"}>1</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
