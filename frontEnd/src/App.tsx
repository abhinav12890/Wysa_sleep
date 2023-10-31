import "./globals.css";
import { Routes, Route } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Routes>
      {/* public routes */}
      {/* <Route element={<AuthLayout />}>
      <Route path="/sign-in" element={<SigninForm />} />
      <Route path="/sign-up" element={<SignupForm />} />
    </Route> */}
      {/* private routes */}
      <Route index element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default App;


