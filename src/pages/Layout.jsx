import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
