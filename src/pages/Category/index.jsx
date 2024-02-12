import { useLocation, useNavigate } from "react-router-dom";

export const CategoryPage = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        {state.data.map((el) => {
          return (
            <div key={Math.random()}>
              <h2>{el.title}</h2>
              <button
                className="btn-reset"
                onClick={() =>
                  navigate(el.title, {
                    state: {
                      data: el,
                    },
                  })
                }
              >
                AGREGAR
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};
