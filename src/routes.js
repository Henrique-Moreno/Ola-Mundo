import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return(
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route path="/"  element={<Home />}/>
          <Route path="/about"  element={<About />}/>
        </Route>
        
        <Route path="/posts/:id/*"  element={<Post />}/>
        <Route path="*"  element={ <NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default AppRoutes;
