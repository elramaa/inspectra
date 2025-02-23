import Header from "@/components/Header";
import Landing from "./sections/Landing";
import BookSynopsis from "./sections/BookSynopsis";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerpen: Lelana",
  description: "",
};

export default function BookPage() {
  return (
    <div className="relative max-w-[100vw] overflow-hidden">
      <Header />
      <Landing />
      <BookSynopsis />
      <Footer />
    </div>
  );
}
