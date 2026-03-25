import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  ScanQrCode,
  PackageCheck,
  ShieldCheck,
  Store,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Titik Verifikasi (Agent Checkpoint)",
    description:
      "Pelacakan presisi. Status barang update otomatis saat dipindai oleh agen di titik transit.",
    color: "text-blue-600",
  },
  {
    icon: PackageCheck,
    title: "Bukti Kondisi (Proof of Condition)",
    description:
      "Agen diwajibkan mengunggah foto kondisi fisik barang saat diterima untuk mencegah sengketa.",
    color: "text-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Pengambilan Aman (Secure Pick-up)",
    description:
      "Pelanggan mengambil barang menggunakan kode unik QR/OTP yang divalidasi oleh aplikasi Agen.",
    color: "text-purple-600",
  },
  {
    icon: Store,
    title: "Dasbor Merchant Mandiri",
    description:
      "Kelola produk, pantau order, dan lihat performa pengiriman dalam satu dasbor intuitif.",
    color: "text-orange-600",
  },
];

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

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Traxs - Solusi Manajemen Logistik Cerdas dengan Agent Checkpoint
        </title>
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
        {/* 1. Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ScanQrCode className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold tracking-tighter text-slate-950">
                Traxs<span className="text-blue-600">.</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a
                href="#features"
                className="hover:text-blue-600 transition-colors"
              >
                Fitur
              </a>
              <a
                href="#how-it-works"
                className="hover:text-blue-600 transition-colors"
              >
                Cara Kerja
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Gabung Agen
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 rounded-full px-5 shadow-sm"
              >
                Register
              </Button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6">
          {/* 2. Hero Section */}
          <section
            id="hero"
            className="py-20 md:py-32 flex flex-col items-center text-center relative"
          >
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

            <Badge
              variant="outline"
              className="mb-4 border-blue-200 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold shadow-inner"
            >
              SaaS Logistik Masa Depan
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-slate-950 max-w-4xl">
              Logistik Cerdas Tanpa{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Titik Buta</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/60 -z-10 rounded-sm"></span>
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-700 max-w-2xl leading-relaxed">
              Traxs menghubungkan toko, agen, dan pelanggan dalam satu platform.
              Pastikan keamanan barang dengan verifikasi fisik di setiap
              checkpoint hingga tangan pelanggan.
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
              <div className="aspect-[16/9] bg-slate-100 rounded-2xl flex items-center justify-center border-dashed border-2 border-slate-300">
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

          {/* 3. Problem & Solution */}
          <section
            id="problem"
            className="py-20 md:py-28 bg-white rounded-[2rem] my-10 border border-slate-100 shadow-sm px-8 md:px-16"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">
                  Masalah Logistik Klasik
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight mt-4 text-slate-950">
                  Rantai Pasok Tanpa Transparansi
                </h2>
                <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                  Apakah Anda lelah dengan komplain pelanggan karena barang
                  rusak atau hilang setelah keluar dari gudang? Sistem
                  konvensional memiliki &apos;blind spot&apos; antara kurir dan
                  tangan pelanggan. Input manual yang tinggi juga memperlambat
                  skala bisnis Anda.
                </p>
                <div className="mt-8 space-y-3 text-slate-700 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span> Blind spot
                    pelacakan saat transit
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span> Tidak ada bukti
                    kondisi fisik barang di checkpoint
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">❌</span> Risiko salah
                    pengambilan barang tinggi
                  </div>
                </div>
              </div>
              <div className="relative p-10 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                <ScanQrCode className="absolute top-8 right-8 h-16 w-16 text-blue-400 opacity-50" />
                <Badge className="bg-blue-100/20 text-blue-50 hover:bg-blue-100/20 border-transparent">
                  Solusi Traxs
                </Badge>
                <h3 className="text-3xl font-bold tracking-tight mt-4">
                  Visibilitas Total & Verifikasi Fisik
                </h3>
                <p className="mt-6 text-blue-100 leading-relaxed opacity-90">
                  Traxs memperkenalkan sistem **Checkpoint Agent**. Setiap kali
                  barang berpindah tangan ke agen, kondisi fisik divalidasi dan
                  difoto. Pelanggan hanya bisa mengambil barang dengan kode
                  keamanan unik. Transparansi penuh, keamanan terjamin.
                </p>
                <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-semibold">
                  Lihat Demo Aplikasi Agen
                </Button>
              </div>
            </div>
          </section>

          {/* 4. Key Features */}
          <section id="features" className="py-20 md:py-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge
                variant="outline"
                className="border-blue-200 bg-blue-50 text-blue-700"
              >
                Fitur Unggulan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4 text-slate-950">
                Didesain untuk Keamanan dan Skala
              </h2>
              <p className="mt-6 text-lg text-slate-700">
                Teknologi modern untuk mengeliminasi ketidakpastian dalam
                pengiriman barang.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group rounded-2xl bg-white"
                >
                  <CardHeader>
                    <div
                      className={`p-3 rounded-xl bg-slate-100 inline-block w-fit group-hover:bg-blue-50 transition-colors`}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold pt-4 tracking-tight text-slate-950">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 5. How it Works */}
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
                <Badge className="bg-blue-500 text-white hover:bg-blue-500 border-transparent">
                  Alur Kerja
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4 text-white">
                  Sederhana Namun Bertenaga
                </h2>
                <p className="mt-6 text-lg text-blue-200 opacity-90">
                  Bagaimana Traxs mengamankan setiap jengkal perjalanan paket
                  Anda.
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
        </main>

        {/* 6. Footer */}
        <footer className="border-t border-slate-200 bg-white mt-10">
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-12 text-sm text-slate-600">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <ScanQrCode className="h-7 w-7 text-blue-600" />
                <span className="text-xl font-bold tracking-tighter text-slate-950">
                  Traxs<span className="text-blue-600">.</span>
                </span>
              </div>
              <p>
                &copy; 2024 PT Traxs Teknologi Logistik. Hak Cipta Dilindungi.
              </p>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-slate-900">Perusahaan</h5>
              <a href="#" className="block hover:text-blue-600">
                Tentang Kami
              </a>
              <a href="#" className="block hover:text-blue-600">
                Karir
              </a>
              <a href="#" className="block hover:text-blue-600">
                Kontak
              </a>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-slate-900">Legal</h5>
              <a href="#" className="block hover:text-blue-600">
                Kebijakan Privasi
              </a>
              <a href="#" className="block hover:text-blue-600">
                Syarat & Ketentuan
              </a>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-slate-900">Dukungan</h5>
              <a href="#" className="block hover:text-blue-600">
                Pusat Bantuan
              </a>
              <a href="#" className="block hover:text-blue-600">
                Dokumentasi API
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
