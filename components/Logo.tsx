import Image from "next/image";
import inspectra from "@/public/inspectra.png";

export default function Logo({
  className,
}: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className={`flex gap-2 items-center ${className}`}>
      <Image src={inspectra} alt="Logo" className="size-12" />
      <span className="font-extrabold text-2xl">Inspectra</span>
    </h1>
  );
}
