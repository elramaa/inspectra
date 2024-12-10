import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-40 bg-neutral-900 px-8 py-8 text-white">
      <div className="w-fit flex items-center gap-4 mx-auto mb-12 lg:mb-4">
        <div className="size-12 lg:size-20">
          <img src="inspectra.png" alt="Logo" className="object-cover" />
        </div>
        <h4 className="text-xl lg:text-2xl">XI-1 Inspectra MISA&apos;26</h4>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-4 lg:justify-between">
        <p>&copy; 2024 - 2026 INSPECTRA MISA&apos;26</p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/inspectramisa"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram className="size-8" />
          </a>
          <a
            href="https://www.tiktok.com/@inspectra.misa"
            target="_blank"
            className="cursor-pointer"
          >
            <FaTiktok className="size-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
