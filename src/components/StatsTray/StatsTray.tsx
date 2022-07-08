import { AiOutlineEye, AiOutlineHeart, AiOutlineRead } from "react-icons/ai";
import Stat from "../Stat/Stat";

type Props = {
  meta: {};
};

export default function StatsTray({ meta }: Props) {
  return (
    <div className="flex flex-wrap space-x-2">
      <Stat data={meta.date} dontShowDot />
      <Stat icon={<AiOutlineRead />} data={meta.readTime} />
      <Stat title="views" icon={<AiOutlineEye />} data={120} />
      <Stat title="likes" icon={<AiOutlineHeart />} data={20} />
    </div>
  );
}
