import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className={
        "border border-red-400 bg-gray-950 text-white/80 min-h-screen grid grid-cols-1 items-cneter"
      }
    >
      <Navbar />
      <main></main>
      <div className={"text-3xl w-full h-lvh flex justify-center items-center"}>
        something is trully wrong here 012398
      </div>
      <footer></footer>
    </div>
  );
}
