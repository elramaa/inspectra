import { useEffect } from "react";
import Header from "../components/Header";
import Landing from "../sections/Landing";
import BookSynopsis from "../sections/BookSynopsis";
import Footer from "../components/Footer";

export default function BookPage() {
  useEffect(() => {
    document.title = "Lelana - Kumpulan Cerpen";
  }, []);
  return (
    <div className="relative max-w-[100vw] overflow-hidden">
      <Header />
      <Landing />
      <BookSynopsis />
      <Footer />
    </div>
  );
}
