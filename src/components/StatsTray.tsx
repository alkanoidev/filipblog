import { useEffect, useState } from "react";
import Stat from "./Stat";

type Props = {
  meta: {
    date: Date;
    readTime: number | string;
  };
};

export default function StatsTray({ meta }: Props) {
  const [date, setDate] = useState("");
  useEffect(() => {
    if (typeof meta.date !== undefined) {
      const date1 = new Date(meta.date);
      setDate(
        date1.toLocaleString("default", { month: "long" }) +
          " " +
          date1.getDate() +
          " " +
          date1.getUTCFullYear().toString()
      );
    }
  }, []);

  return (
    <div className="flex flex-wrap space-x-2">
      <Stat data={date} dontShowDot />
      <Stat
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        data={meta.readTime + " min"}
      />
    </div>
  );
}
