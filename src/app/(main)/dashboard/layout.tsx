import Sidebar from "@/components/dashboard/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/30 dark:bg-black font-sans">
      {/* বাম পাশে ফিক্সড সাইডবার */}
      <Sidebar role="admin" />
      
      {/* ডান পাশে মূল পেজ কন্টেন্ট */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}