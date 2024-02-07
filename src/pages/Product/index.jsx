import { useLocation } from "react-router-dom";

export const ProductPage = () => {
  const { state } = useLocation();
  const { title, type, subDescr } = state;
  return (
    <main>
      {
        <div>
          <h1>{title}</h1>
          <span>{subDescr}</span>
        </div>
      }
    </main>
  );
};
