import { useRouter } from "next/router";
import Header from "@/components/Header"
import Room from "@/components/Room"

export default function RoomPage() {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="container">
        <Room room={{title: "Tema studio"}}/>
      </main>
    </>
  );
}
