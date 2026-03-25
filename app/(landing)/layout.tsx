import Footer from "../../components/landing/footer";
import Navbar from "../../components/landing/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
