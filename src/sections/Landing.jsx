export default function Landing() {
  return (
    <section className="w-full lg:h-[85vh] flex max-sm:flex-col justify-center items-center px-8 max-sm:gap-8 place-self-center text-white">
      <div className="lg:w-2/5 max-sm:pt-20 p-12">
        <img
          src="mockup_book.png"
          alt="Mockup Book"
          className="object-cover max-sm:scale-150"
          style={{
            filter: "drop-shadow(2px 10px 10px rgba(255, 255, 255, 0.4))",
          }}
        />
      </div>
      <div className="lg:w-3/5 text-justify lg:pr-40 text-shadow">
        <h2 className="font-yeseva font-extrabold text-5xl pb-4 tracking-widest">
          lelana
        </h2>
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
