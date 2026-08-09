import { FaCcVisa, FaGoogle } from "react-icons/fa";

interface PaymentMethod {
  name: string;
  icon: React.ReactNode;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "UPI",
    icon: <FaGoogle className="h-6 w-6" style={{ color: "#4285F4" }} />,
  },
  {
    name: "Credit Card",
    icon: <FaCcVisa className="h-6 w-6 text-blue-700" />,
  },
];

export function PaymentMethods() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {paymentMethods.map((method) => (
        <div
          key={method.name}
          className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 transition"
        >
          {method.icon}
          <span className="text-xs font-semibold">{method.name}</span>
        </div>
      ))}
    </div>
  );
}
