import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Plan from "@/components/Plan";
import { revalidatePath } from "next/cache";

export default function Home() {
  revalidatePath("/");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Plan />
      <Portfolio />
      <Footer />
    </main>
  );
}
