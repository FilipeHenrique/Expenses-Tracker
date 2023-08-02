import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownUp, DollarSign, PiggyBank, Wallet } from "lucide-react";
import dynamic from "next/dynamic";
import TransactionCard from "./components/transaction-card";

const ExpensesPieChart = dynamic(
  () => import("./components/expenses-piechart"),
  { ssr: false },
);

export default function Dashboard() {
  const data = {
    balance: 45.231,
    transactionsNumber: 1200,
    income: 43.0,
    expenses: 4000,
    transactions: [
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
      {
        date: "11/30/2019",
        category: "Food",
        paymentMethod: "Debit Card",
        description: "Palmetto Cheese, Mint julep",
        amount: "6",
        type: "Expense",
      },
    ],
  };

  return (
    <div className="mt-4 flex flex-col px-52 py-10">
      <div className="grid w-full grid-cols-12 gap-6 self-start">
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <PiggyBank size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$ {data.income}</div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <DollarSign size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$ {data.expenses}</div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance</CardTitle>
            <Wallet size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$ {data.balance}</div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <ArrowDownUp size={16} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.transactionsNumber}</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-7 gap-4">
        <Card className="col-span-4 px-6 py-2">
          <CardHeader className="flex-column flex">
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>Jun 1 - Nov 30</CardDescription>
          </CardHeader>
          <ExpensesPieChart />
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {data.transactions.slice(0, 5).map((transaction, index) => {
              return <TransactionCard key={index} />;
            })}
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-7 gap-4">
        <Card className="col-span-4 px-6 py-2">
          <CardHeader className="flex-column flex">
            <CardTitle>Account - Balanço</CardTitle>
          </CardHeader>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Income / Expense</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6"></CardContent>
        </Card>
      </div>
    </div>
  );
}
