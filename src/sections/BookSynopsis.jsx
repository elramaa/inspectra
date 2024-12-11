import { useState } from "react";
import CardSlider from "../components/CardSlider";
// import Dropdown from "../components/Dropdown";
// import { sinopsisCerpen } from "../constant";

export default function BookSynopsis() {
  const [bookIndex, setBookIndex] = useState(0);
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-white font-extrabold text-center pb-8">
        Sinopsis Buku
      </h2>
      <CardSlider bookIndex={bookIndex} setBookIndex={setBookIndex} />
      {/* <Dropdown data={sinopsisCerpen} className={"mt-20"} /> */}
    </section>
  );
}
