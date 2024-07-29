import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className={
        "bg-gray-950 text-white/80 min-h-screen grid grid-cols-1 items-cneter"
      }
    >
      <Navbar />
      <main>
        <div
          className={"text-3xl w-full h-lvh flex justify-center items-center"}
        >
          Hi, my name is Arash and something is trully wrong here 0123456789
        </div>
      </main>
      <Footer />
    </div>
  );
}
