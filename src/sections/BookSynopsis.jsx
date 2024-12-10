import CardSlider from "../components/CardSlider";

export default function BookSynopsis() {
  return (
    <section className="w-full h-screen p-8 flex flex-col items-center">
      <h2 className="text-3xl text-white font-extrabold text-center pb-8">
        Sinopsis Buku
      </h2>
      <CardSlider />
    </section>
  );
}
