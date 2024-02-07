import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { routeNames } from "../../navigation/routeNames";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header />
      <button onClick={() => navigate(routeNames.categories)}>go</button>
    </main>
  );
};
