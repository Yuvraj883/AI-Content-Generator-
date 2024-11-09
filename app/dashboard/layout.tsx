import Sidebar from "./_components/Sidebar";
import Header from './_components/Header';
import Footer from './_components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* Sidebar */}
        <div className="flex min-h-screen">
        <Sidebar />

        {/* Main content container */}
        <div className="flex flex-col flex-grow md:ml-[14%]">
          <Header />

          {/* Main content area that grows to push footer down */}
          <main className="flex-grow p-4">
            {children}
          </main>
          {/* Footer */}
</div>
</div>
          <Footer />

      </body>
    </html>
  );
}
