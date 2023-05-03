import Link from "next/link";

export default function BackButton({ to }: { to: string }) {
  return (
    <Link href={"/" + "#" + to}>
      <div className="flex rounded-lg bg-surface-light dark:bg-surface-dark p-2 text-dark dark:text-light font-bold gap-2 items-center justify-center hover:cursor-pointer">
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Go Back
      </div>
    </Link>
  );
}
