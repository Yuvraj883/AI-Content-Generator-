// "use client";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"; // Update with your backend URL

// export async function signUp(fullName: string, email: string, password: string) {
//   const response = await fetch(`${API_URL}/user/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ fullName, email, password }),
//   });

//   const data = await response.json();
//   if (!response.ok) throw new Error(data.error || "Signup failed");

//   return data; // Return user data if needed
// }

// export async function signIn(email: string, password: string) {
//   const response = await fetch(`${API_URL}/user/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();
//   if (!response.ok) throw new Error(data.error || "Login failed");

//   localStorage.setItem("token", data.token); // Store token in localStorage
//   return data;
// }

// export function signOut() {
//   localStorage.removeItem("token"); // Remove token from storage
// }

// export function getToken(): string | null {
//   return localStorage.getItem("token"); // Retrieve token
// }

// export function isAuthenticated(): boolean {
//   return !!getToken(); // Check if token exists
// }
