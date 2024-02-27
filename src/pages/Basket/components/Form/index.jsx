import { useForm, SubmitHandler } from "react-hook-form";
import "./style.scss";
import { BasketStore } from "../../../../Store/BasketStore";
export const Form = ({ basket }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("telephone", data.telephone);
    // formData.append("products", data.products);
    // TODO: не работает оттправка
    await fetch(
      "https://script.google.com/macros/s/AKfycbwODrgFQsB_8hvlasXmhaKMywgl6xdTzES9h2-A1DX6y_Q4ZMd5ZvRhDNmXFx9gVTRg9Q/exec",
      { method: "POST", body: formData }
    )
      .then((res) => console.log("успешная отправка гугл докс", res))
      .catch((error) => console.error("ошибка гугл докс!", error));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <span>realización del pedido</span>
      <input
        {...register("name", {
          required: true,
          maxLength: 20,
        })}
        placeholder="Nombre"
        className={errors.name ? "input-error" : ""}
      />
      <input
        {...register("telephone", {
          required: true,
          maxLength: 20,
          pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        })}
        placeholder="Número de teléfono"
        className={errors.telephone ? "input-error" : ""}
      />
      <button type="submit" className="btn-reset">
        comprar
      </button>
    </form>
  );
};
