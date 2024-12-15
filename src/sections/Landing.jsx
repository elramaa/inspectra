import { motion } from "motion/react";
import MockupBook from "../components/MockupBook";

export default function Landing() {
  return (
    <section className="w-full lg:h-[85vh] flex max-sm:flex-col justify-center items-center px-8 max-sm:gap-8 place-self-center text-white">
      <div className="h-full max-sm:h-[50vh] lg:w-2/5 relative">
        <MockupBook />
        <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-white text-shadow opacity-70 text-nowrap">
          Drag to rotate the book!
        </span>
      </div>
      <div className="lg:w-3/5 text-justify lg:pr-40 text-shadow">
        <motion.h2
          className="w-fit font-yeseva font-extrabold text-5xl pb-4 tracking-widest"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
        >
          lelana
        </motion.h2>
        <p className="pb-4">
          Lelana mengisahkan perjalanan melampaui batas ruang, waktu, dan jiwa,
          tempat para tokoh menghadapi tantangan, menemukan pelajaran, serta
          mengungkap makna di balik setiap langkah. Dalam kabut puncak, gemuruh
          ombak, hingga hutan penuh rahasia, mereka belajar bahwa setiap
          pertemuan membawa hikmah, dan setiap akhir adalah awal baru.
        </p>
        <p>
          &quot;In every step of the journey, the path whispers secrets only the
          brave can hear.&quot; Cerita ini mengajak kita merenungi langkah hidup
          kita sendiri: ke mana tujuan kita, apa yang kita tinggalkan, dan
          hikmah yang kita temukan di sepanjang jalan.
        </p>
      </div>
    </section>
  );
}
