import Link from "next/link";

export default function BackButton({ to }: { to: string }) {
  return <Link href={"/" + "#" + to}>&larr; Go Back</Link>;
}
