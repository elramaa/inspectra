import SideNav from "./components/SideNav";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen flex">
      <SideNav className="" />
      {children}
    </main>
  );
}
