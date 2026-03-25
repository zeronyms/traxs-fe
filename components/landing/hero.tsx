import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className="py-20 md:py-32 flex flex-col items-center text-center relative"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-slate-950 max-w-4xl">
        Logistik Cerdas Tanpa{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-blue-600">Titik Buta</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/60 -z-10 rounded-sm"></span>
        </span>
      </h1>

      <p className="mt-8 text-xl text-slate-700 max-w-2xl leading-relaxed">
        Traxs menghubungkan toko, agen, dan pelanggan dalam satu platform.
        Pastikan keamanan barang dengan verifikasi fisik di setiap checkpoint
        hingga tangan pelanggan.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-base rounded-full px-10 py-6 h-auto shadow-lg shadow-blue-500/20 group"
        >
          Coba Traxs Sekarang
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-base rounded-full px-10 py-6 h-auto border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
        >
          Pelajari Integrasi API
        </Button>
      </div>

      {/* Visual Placeholder */}
      <div className="mt-20 w-full max-w-6xl p-3 bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-blue-950/5 relative">
        <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center border-dashed border-2 border-slate-300">
          <Image
            src="/api/placeholder/1200/675" // Ganti dengan screenshot dashboard asli nanti
            alt="Traxs Dashboard Mockup"
            width={1200}
            height={675}
            className="rounded-2xl object-cover"
          />
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -left-10 bg-green-100 border-4 border-white p-4 rounded-3xl shadow-lg flex items-center gap-3">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
          <div>
            <div className="font-bold text-lg">Verifikasi Berhasil</div>
            <div className="text-sm text-slate-600">
              Agent: Toko Budi, Jakarta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
