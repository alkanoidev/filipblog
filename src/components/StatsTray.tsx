import { useEffect, useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
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
      <Stat icon={<AiOutlineRead />} data={meta.readTime + " min"} />
    </div>
  );
}
