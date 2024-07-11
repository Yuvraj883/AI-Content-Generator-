// import { Dashboard } from "@mui/icons-material";
"use client"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


export default function Home() {
  const pathName = usePathname();
  const router = useRouter();
  if(pathName=='/'){
    router.push('/dashboard');
  }
  return (
   <div>

   </div>
  );
}
