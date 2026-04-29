import Image from "next/image";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 ">
      <main className="flex flex-1 w-full max-w-3xl flex-col ">
       <HomePage></HomePage>
      </main>
    </div>
  );
}
