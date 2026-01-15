import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-120 grid grid-cols-1 md:grid-cols-2 bg-gray-50 m-30 border border-gray-200 shadow-lg overflow-hidden">
      <div className="hidden md:flex items-center justify-center">
        <Image
          src="/images/login_sideimage.png"
          alt="DAYDAD e-commerce illustration"
          width={650}
          height={650}
          priority
          className="object-contain border-r border-gray-200"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="md:flex items-center justify-center px-6 bg-gray-50">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
          <p className="text-gray-500 mb-6">Login to your DAYDAD account</p>

          <form className="space-y-4">
            {/* EMAIL */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <a href="#" className="text-sm text-[#DB4444] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              className="w-full bg-[#DB4444] hover:bg-[#c53a3a] text-white"
            >
              Login
            </Button>
          </form>

          {/* SIGNUP */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-[#DB4444] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
