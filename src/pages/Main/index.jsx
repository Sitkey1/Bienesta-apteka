// import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
// import { routeNames } from "../../navigation/routeNames";

export const MainPage = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* <button onClick={() => navigate(routeNames.categories)}>go</button> */}
      </main>
    </div>
  );
};
