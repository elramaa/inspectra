export default function Header() {
  return (
    <header className="w-screen h-[15vh] flex items-center px-8 py-4">
      <h1 className="flex">
        <div className="flex gap-2 items-center">
          <img src="inspectra.png" alt="Logo" className="size-12" />
          <span className="font-extrabold text-2xl">Inspectra</span>
        </div>
      </h1>
    </header>
  );
}
