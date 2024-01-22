import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../data/categories";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "must contain at least 3 character(s)" })
    .max(20),
  category: z.enum(categories),
  amount: z
    .number({ invalid_type_error: "required" })
    .min(0.01, { message: "Price should be more than 0.01" })
    .max(10000000, { message: "Price should be less than 10000000" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  getData: (data: FormData) => void;
}

const Form = ({ getData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        getData(data);
        reset();
      })}
      className="p-3 rounded shadow"
      style={{ backgroundColor: "#bbb" }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Expense name
        </label>
        <input
          {...register("name")}
          placeholder="Eg: Milk"
          id="name"
          autoComplete="name"
          type="text"
          className="form-control"
        />
        <p className="text-danger">{errors.name?.message}</p>
      </div>
      <div className="my-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          {...register("category")}
          className="form-control"
          defaultValue="Other"
          name=""
          id="category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <p className="text-danger">{errors.category?.message}</p>
      </div>
      <div className="my-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          placeholder="Eg: 100"
          id="amount"
          type="number"
          className="form-control"
        />
        <p className="text-danger">{errors.amount?.message}</p>
      </div>
      <div className="d-flex">
        <button type="submit" className="btn btn-success border-dark ms-auto">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default Form;
