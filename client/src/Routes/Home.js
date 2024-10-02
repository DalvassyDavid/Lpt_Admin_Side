import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../pages/NavBar";
import Statistics from "../pages/Statistics";
import NewsEdit from "../pages/NewsEdit";
import Members from "../pages/Members";
import LoginAuthenticationPage from "../pages/LoginAuthenticationPage";
import YouTube from "../pages/YouTube";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginAuthenticationPage />}></Route>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Statistics />} />
          <Route path="stats" element={<Statistics />} />
          <Route path="newsedit" element={<NewsEdit />} />
          <Route path="members" element={<Members />} />
          <Route path="youtube" element={<YouTube />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
