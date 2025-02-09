import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Policlinica",
  description: "atividade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
