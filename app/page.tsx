import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/login"}>
        <Button className="bg-[#DB4444] text-white px-6 rounded-sm m-2">
          Login
        </Button>
      </Link>
    </div>
  );
}
