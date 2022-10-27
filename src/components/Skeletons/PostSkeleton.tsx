export default function PostSkeleton() {
  return (
    <div className="space-y-5 rounded-2xl bg-white dark:bg-off-dark p-5 h-52 w-full sm:w-72 relative shadow">
      <div className="h-4 rounded-lg bg-gray-400 dark:bg-rose-100/20"></div>
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg bg-gray-400 dark:bg-rose-100/20"></div>
        <div className="flex gap-1">
          <div className="h-3 w-1/5 rounded-lg bg-gray-400 dark:bg-rose-100/20"></div>
          <div className="h-3 w-1/5 rounded-lg bg-gray-400 dark:bg-rose-100/20"></div>
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-gray-300 dark:bg-rose-100/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-gray-300 dark:bg-rose-100/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-gray-300 dark:bg-rose-100/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-gray-300 dark:bg-rose-100/10"></div>
      </div>
    </div>
  );
}
