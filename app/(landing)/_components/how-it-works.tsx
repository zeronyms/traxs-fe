import { Button } from "@/components/ui/button";

const steps = [
  {
    no: "1",
    title: "Order Masuk",
    desc: "Pesanan dari e-commerce terintegrasi masuk ke sistem Traxs.",
  },
  {
    no: "2",
    title: "Kirim ke Agen",
    desc: "Merchant memproses dan mengirim barang ke Agen Traxs tujuan.",
  },
  {
    no: "3",
    title: "Verifikasi Agen",
    desc: "Agen scan barang, cek kondisi, dan update status 'Siap Diambil'.",
  },
  {
    no: "4",
    title: "Pelanggan Ambil",
    desc: "Pelanggan datang ke Agen, tunjukkan kode aman, dan terima barang.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-slate-950 text-slate-100 rounded-[2rem] px-8 md:px-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=&apos;60&apos; height=&apos;60&apos; viewBox=&apos;0 0 60 60&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos;%3E%3Cg fill=&apos;none&apos; fill-rule=&apos;evenodd&apos;%3E%3Cg fill=&apos;%23ffffff&apos; fill-opacity=&apos;0.4&apos;%3E%3Cpath d=&apos;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 30V60h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z&apos;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4 text-white">
            Sederhana Namun Bertenaga
          </h2>
          <p className="mt-6 text-lg text-blue-200 opacity-90">
            Bagaimana Traxs mengamankan setiap jengkal perjalanan paket Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-700 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center bg-slate-900 md:bg-transparent p-6 rounded-2xl border border-slate-800 md:border-none"
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-extrabold shadow-xl shadow-blue-500/20 border-8 border-slate-950">
                {step.no}
              </div>
              <h4 className="text-xl font-bold mt-8 text-white tracking-tight">
                {step.title}
              </h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 rounded-full font-bold px-12"
          >
            Daftar Sebagai Merchant
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
