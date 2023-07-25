import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="dark:bg-black">
            <Header />
            {children}
            <Footer />
        </section>
    );
  }