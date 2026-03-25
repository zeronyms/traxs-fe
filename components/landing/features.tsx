import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, PackageCheck, ShieldCheck, Store } from "lucide-react";

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

function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4 text-slate-950">
          Didesain untuk Keamanan dan Skala
        </h2>
        <p className="mt-6 text-lg text-slate-700">
          Teknologi modern untuk mengeliminasi ketidakpastian dalam pengiriman
          barang.
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
  );
}

export default Features;
