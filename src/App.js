import './App.css';
import Header from "./components/common/header/Header";
import Content from "./components/common/content/Content";
import Footer from "./components/common/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Content greeting='Hello, my dear friend!'/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
