import './App.css';
import Header from "./components/common/header/Header";
import Content from "./components/common/content/Content";
import Footer from "./components/common/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {PageLayout} from "./components/common/header/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import ProfileContent from "./components/common/header/ProfileContent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <PageLayout>
                    <AuthenticatedTemplate>
                        <ProfileContent />
                    </AuthenticatedTemplate>
                    <UnauthenticatedTemplate>
                        <p>You are not signed in! Please sign in.</p>
                    </UnauthenticatedTemplate>
                </PageLayout>
                <Content greeting='Hello, my dear friend!'/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
