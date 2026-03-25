import Link from "next/link";
import { ScanQrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function LoginPage() {
  return (
    <div className="space-y-6">
      {/* Logo di atas Card */}
      <div className="flex flex-col items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <ScanQrCode className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold tracking-tighter text-slate-950">
            Traxs<span className="text-blue-600">.</span>
          </span>
        </Link>
      </div>

      <Card
        className="border-slate-200 shadow-xl shadow-slate-200/50"
        size="default"
      >
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Lupa password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Masuk Sekarang
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-slate-600">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Daftar Agen/Merchant
            </Link>
          </p>
        </CardFooter>
      </Card>

      {/* Footer minimalis di bawah card */}
      <p className="px-8 text-center text-xs text-slate-500">
        Dengan masuk, Anda menyetujui <br />
        <Link
          href="/dashboard"
          className="underline underline-offset-4 hover:text-blue-600"
        >
          Syarat & Ketentuan
        </Link>{" "}
        kami.
      </p>
    </div>
  );
}
