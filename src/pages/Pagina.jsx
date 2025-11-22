import Header from "../components/Header";
import Footer from "../components/Footer";
import ImagesSection from "../components/ImagesSection";

//* componente principal
export default function Pagina() {
  return (
    <>
      <Header />

      <main>
        <ImagesSection />
        <section></section>
        <aside>{}</aside>
      </main>
      <Footer />
    </>
  );
}
