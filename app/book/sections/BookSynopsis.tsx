"use client";

import { useState } from "react";
import CardSlider from "@/components/CardSlider";
import Dropdown from "@/components/Dropdown";
import { sinopsisCerpen } from "@/constant";

export default function BookSynopsis() {
  const [bookIndex, setBookIndex] = useState(0);
  return (
    <section className="w-full flex flex-col items-center mt-12">
      <h2 className="text-3xl text-white font-extrabold text-center text-shadow">
        Sinopsis Buku
      </h2>
      <Dropdown
        data={sinopsisCerpen}
        className="mt-8"
        selectedID={bookIndex}
        setSelectedID={setBookIndex}
      />
      <CardSlider bookIndex={bookIndex} setBookIndex={setBookIndex} />
    </section>
  );
}
