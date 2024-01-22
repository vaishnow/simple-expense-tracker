import categories from "../data/categories";

interface Props {
  filterBy: (category: string) => void;
}

const ExpenseFilter = ({ filterBy }: Props) => {
  return (
    <div className="bg-dark text-light mb-3 p-3 rounded shadow">
      <div className="d-flex align-items-center">
        <label
          htmlFor="filter"
          className="form-label pe-2 font-semibold text-nowrap flex-grow"
        >
          Filter by
        </label>
        <select
          onChange={(e) => filterBy(e.target.value)}
          name=""
          id="filter"
          className="form-control bg-secondary text-light"
        >
          <option key="All" value="All">
            All
          </option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
