import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import FeedbackList from "./data/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/feedbackForm";
import AboutPage from "./pages/aboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/aboutIconLink";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
