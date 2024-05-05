import Footer from "./components/Footer";
import Header from "./components/Header";
import EmojiContextProvider from "./context/EmojiContext";
import Game from "./pages/Game";
 

const MemoryApp = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <EmojiContextProvider>
        <Game />
      </EmojiContextProvider>
      <Footer />
    </div>
  );
};

export default MemoryApp;
