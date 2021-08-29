// import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Burgers",
      date: new Date(2021, 8, 27),
      amount: 5.99,
    },
    {
      id: "e2",
      title: "Gym Membership",
      date: new Date(2021, 7, 14),
      amount: 29.99,
    },
    {
      id: "e3",
      title: "Electricity Bill",
      date: new Date(2021, 8, 14),
      amount: 8.0,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense/>
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
