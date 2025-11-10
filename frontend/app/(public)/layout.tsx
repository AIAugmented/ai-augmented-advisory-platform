import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-[calc(var(--header-height))] flex min-h-[calc(100vh-var(--header-height))] flex-col overflow-y-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
