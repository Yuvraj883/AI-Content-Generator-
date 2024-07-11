import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className="">
        <Sidebar/>
        {children}</body>
    </html>

  );
}
