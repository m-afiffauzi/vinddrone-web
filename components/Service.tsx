import React from "react";
import Container from "./ui/container";
import { ServiceCard } from "./ServiceCard";

const Service = () => {
  const services = [
    {
      name: "Event",
      desc: "Tangkap setiap momen terbaik dari acara Anda munggunakan drone untuk memberikan perspektif yang spektakuler dan hasil yang memukau.",
      image:
        "bg-[url(https://images.unsplash.com/photo-1658227633934-b589ca17d602?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
    {
      name: "Traveling",
      desc: "Rekam setiap momen petualangan Anda dari ketinggian dengan panorama menakjubkan, dan buat kenangan traveling yang tak terlupakan.",
      image:
        "bg-[url(https://images.unsplash.com/photo-1679306383809-14dbeb5431f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
    {
      name: "Wedding",
      desc: "Abadikan setiap momen indah pernikahan Anda dari sudut pandang yang luar biasa dari langit, yang akan menyempurnakan hari istimewa Anda.",
      image:
        "bg-[url(https://images.unsplash.com/photo-1677677402907-05f2883e3f66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
    {
      name: "Advertising",
      desc: "Tingkatkan kualitas iklan produk Anda menggunakan drone untuk mendapatkan hasil gambar dan video yang epik dan menarik pelanggan.",
      image:
        "bg-[url(https://images.unsplash.com/photo-1525015582196-5316b8a0afc9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
    {
      name: "Profiling",
      desc: "Buat video profil yang menarik dan profesional untuk perusahaan / instansi / lembaga Anda dan tingkatkan branding dan kepercayaan pelanggan.",
      image:
        "bg-[url(https://images.unsplash.com/photo-1678984239548-b07d1f909cc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
    {
      name: "Mapping",
      desc: "Gunakan drone untuk pemetaan lahan sawah / kebun / properti Anda sehingga proses dan hasil pemetaan menjadi lebih cepat, efisien dan presisi.",
      image:
        "bg-[url(https://plus.unsplash.com/premium_photo-1674019235252-407560edcc9b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
    },
  ];
  return (
    <section
      id="service"
      className="w-full min-h-screen bg-background -mt16 py-16 rounded-t-[22px]"
    >
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
          Layanan
        </h2>
        <h4 className="md:text-xl text-center mb-8">
          Kami melayani berbagai jenis kegiatan dokumentasi udara menggunakan
          drone.
        </h4>
        <div className="flex items-center justify-center flex-wrap mx-auto px-4 lg:px-40 xl:px-16 gap-2 xl:gap-12">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 font-light text-sm text-center text-neutral-600 dark:text-neutral-400">
          <p className="px-8">
            *Hubungi kami jika anda memerlukan drone untuk kegiatan spesifik
            lainnya
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Service;
