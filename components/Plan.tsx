import React from "react";
import Container from "./ui/container";
import { GlowingCard } from "./GlowingCard";

const Plan = () => {
  const plans = [
    {
      name: "Basic",
      battery: "1 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "Rp. 750.000",
      price: "Rp. 500.000",
      resolution: "Up To 2.7K Video",
      uptime: "Pilot Standby 1-2 Jam",
      addon: "Cinematic Edit*",
      link: "https://wa.me/082138351343?text=Halo Vinddrone, saya ingin pesan Paket Basic",
    },
    {
      name: "Pro",
      battery: "2 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "Rp. 1.000.000",
      price: "Rp. 750.000",
      resolution: "Up To 2.7K Video",
      uptime: "Pilot Standby 2-3 Jam",
      addon: "Cinematic Edit*",
      link: "https://wa.me/082138351343?text=Halo Vinddrone, saya ingin pesan Paket Pro",
    },
    {
      name: "Premium",
      battery: "3 Baterai",
      drone: "DJI Mavic Mini",
      memory: "MMC 32GB",
      exprice: "Rp. 1.250.000",
      price: "Rp. 1.000.000",
      resolution: "Up To 2.7K Video",
      uptime: "Pilot Standby 3-4 Jam",
      addon: "Include Cinematic Edit",
      link: "https://wa.me/082138351343?text=Halo Vinddrone, saya ingin pesan Paket Premium",
    },
  ];
  return (
    <section
      id="plan"
      className="w-full min-h-screen bg-background -mt16 py-16"
    >
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
          Paket
        </h2>
        <h4 className="md:text-xl text-center mb-8">
          Pilih paket sesuai kebutuhan anda.
        </h4>
        <div className="flex flex-wrap items-center justify-center md:grid lg:grid-cols-3 mx-auto gap-8 lg:gap-4 xl:gap-12">
          {plans.map((plan, i) => (
            <GlowingCard key={i} plan={plan} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 font-light text-sm text-center text-neutral-600 dark:text-neutral-400">
          <p>*Belum termasuk biaya transport</p>
          <p>
            *Cinematic Edit ( <span className="font-semibold">Rp. 50.000</span>{" "}
            )
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Plan;
