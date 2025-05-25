// "use client";
// import { useState } from "react";
// import { useAuth } from "../auth/useAuth";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const router = useRouter();

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       router.push("/dashboard"); // Redirect after login
//     } catch (error: any) {
//       alert(error.message);
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 mb-2"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 mb-2"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
