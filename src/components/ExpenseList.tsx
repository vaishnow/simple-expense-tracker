interface Expense {
  id: number;
  name: string;
  category: string;
  amount: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const expenseView = expenses;

  return (
    <>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseView.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td className="text-center">
                <button
                  onClick={() => onDelete(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3}>Total</th>
            <th>
              {expenses.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
