import Sidebar from "./_components/Sidebar";
import Header from './_components/Header'


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
        <Header/>

        {children}

        </div>
        </body>
    </html>

  );
}
