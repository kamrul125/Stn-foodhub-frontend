import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* নেভিগেশন বার */}
      <Navbar /> 
      
      {/* মেইন কন্টেন্ট এরিয়া যা বাকি জায়গা দখল করবে */}
      <main className="grow">
        {children}
      </main>
      
      {/* রিকোয়ারমেন্ট অনুযায়ী সব পেজের জন্য ফুটার */}
      <Footer />
    </div>
  );
}