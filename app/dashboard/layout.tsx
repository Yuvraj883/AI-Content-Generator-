import Sidebar from "./_components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className="fixed">
        <Sidebar/>
        <div className="md:ml-[14%]">
        {children}

        </div>
        </body>
    </html>

  );
}
