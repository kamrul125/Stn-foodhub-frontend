import Navbar from "@/components/shared/navbar/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      <main className="grow">
        {children}
      </main>
      {/* চাইলে এখানে Footer দিতে পারেন */}
    </div>
  );
}