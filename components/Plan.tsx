import React from "react";
import Container from "./ui/container";
import { GlowingCard } from "./GlowingCard";

const Plan = () => {
  const plans = [
    {
      name: "Paket Basic",
      battery: "1 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "IDR 600K",
      price: "IDR 500K",
      resolution: "Up To 2.7K Video",
      uptime: "1 Jam Kerja",
      addon: "*Cinematic FPV",
    },
    {
      name: "Paket Pro",
      battery: "2 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "IDR 700K",
      price: "IDR 600K",
      resolution: "Up To 2.7K Video",
      uptime: "2 Jam Kerja",
      addon: "*Cinematic FPV",
    },
    {
      name: "Paket Premium",
      battery: "3 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "IDR 900K",
      price: "IDR 750K",
      resolution: "Up To 2.7K Video",
      uptime: "3 Jam Kerja",
      addon: "*Cinematic FPV",
    },
  ];
  return (
    <section
      id="plan"
      className="w-full min-h-screen bg-background -mt16 py-16"
    >
      <Container>
        <h2 className="md:text-2xl font-bold text-center">Paket</h2>
        <h4 className="text-sm md:text-xl text-center">
          Pilih paket sesuai kebutuhan anda.
        </h4>
        <div className="flex flex-col items-center justify-center md:grid lg:grid-cols-3 mx-auto px-4 xl:px-24 gap-8 lg:gap-4 xl:gap-12 mt-12">
          {plans.map((plan, i) => (
            <GlowingCard key={i} plan={plan} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 font-light text-sm text-center text-neutral-600 dark:text-neutral-400">
          <p>*Belum termasuk biaya transport</p>
          <p>
            *Cinematic FPV ( <span className="font-semibold">IDR 50K</span> )
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Plan;
