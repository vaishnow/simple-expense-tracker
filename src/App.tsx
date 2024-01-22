import { useEffect, useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Milk", category: "Groceries", amount: 69 },
    { id: 2, name: "Bun", category: "Groceries", amount: 69 },
    { id: 3, name: "Medhu", category: "Other", amount: 69 },
    { id: 4, name: "Egg", category: "Groceries", amount: 69 },
    { id: 5, name: "Meat", category: "Groceries", amount: 69 },
    { id: 6, name: "Hair Dryer", category: "Utilities", amount: 69 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredView =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((item) => item.category === selectedCategory);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  useEffect(() => {
    expenses;
  }, [expenses]);

  return (
    <div className="container-fill bg-secondary">
      <Nav />
      <div className="row w-100">
        <div className="col-12 justify-self-center shrink p-4 p-sm-5 p-lg-3 col-lg-4">
          <Form
            getData={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="col px-lg-0 pt-3 ps-4">
          <ExpenseFilter filterBy={setSelectedCategory} />
          <ExpenseList expenses={filteredView} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
