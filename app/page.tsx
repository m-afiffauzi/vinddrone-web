import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import { revalidatePath } from "next/cache";

export default function Home() {
  revalidatePath("/");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Service />
      <Portfolio />
      <Footer />
    </main>
  );
}
