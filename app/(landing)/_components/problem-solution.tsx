import { Button } from "@/components/ui/button";
import { ScanQrCode } from "lucide-react";

function ProblemSolution() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 bg-white rounded-[2rem] my-10 border border-slate-100 shadow-sm px-8 md:px-16"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mt-4 text-slate-950">
            Rantai Pasok Tanpa Transparansi
          </h2>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Apakah Anda lelah dengan komplain pelanggan karena barang rusak atau
            hilang setelah keluar dari gudang? Sistem konvensional memiliki
            &apos;blind spot&apos; antara kurir dan tangan pelanggan. Input
            manual yang tinggi juga memperlambat skala bisnis Anda.
          </p>
          <div className="mt-8 space-y-3 text-slate-700 font-medium">
            <div className="flex items-center gap-3">
              <span className="text-red-500">❌</span> Blind spot pelacakan saat
              transit
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500">❌</span> Tidak ada bukti kondisi
              fisik barang di checkpoint
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500">❌</span> Risiko salah pengambilan
              barang tinggi
            </div>
          </div>
        </div>
        <div className="relative p-10 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20">
          <ScanQrCode className="absolute top-8 right-8 h-16 w-16 text-blue-400 opacity-50" />

          <h3 className="text-3xl font-bold tracking-tight mt-4">
            Visibilitas Total & Verifikasi Fisik
          </h3>
          <p className="mt-6 text-blue-100 leading-relaxed opacity-90">
            Traxs memperkenalkan sistem **Checkpoint Agent**. Setiap kali barang
            berpindah tangan ke agen, kondisi fisik divalidasi dan difoto.
            Pelanggan hanya bisa mengambil barang dengan kode keamanan unik.
            Transparansi penuh, keamanan terjamin.
          </p>
          <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-semibold">
            Lihat Demo Aplikasi Agen
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
