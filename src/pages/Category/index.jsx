import { useLocation, useNavigate, useParams } from "react-router-dom";

export const CategoryPage = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <main>
      {state.data.map((el) => {
        return (
          <div key={Math.random()}>
            <h2>{el.title}</h2>
            <button
              onClick={() =>
                navigate(el.title, {
                  state: {
                    data: el,
                  },
                })
              }
            >
              asdasd
            </button>
          </div>
        );
      })}
    </main>
  );
};
