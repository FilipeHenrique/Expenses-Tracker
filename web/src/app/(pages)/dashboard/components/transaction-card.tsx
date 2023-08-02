import { DollarSign } from "lucide-react";

export default function TransactionCard() {
  return (
    <div className="flex items-center">
      <DollarSign className="rounded-full bg-gray-300 p-2" size={40} />
      <div className="ml-4 space-y-1">
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium leading-none">Category</p>
          <p className="mt-1 text-xs font-light leading-none">02/10/2022</p>
        </div>
        <p className="text-muted-foreground text-sm">Transaction description</p>
      </div>
      <div className="ml-auto font-medium">+$1,999.00</div>
    </div>
  );
}
