export default function PostSkeleton() {
  return (
    <div className="space-y-5 rounded-2xl bg-off-white dark:bg-on-surface-light p-5 h-52 w-full sm:w-80 relative">
      <div className="h-4 rounded-lg bg-on-surface-light/20 dark:bg-on-surface-dark/20"></div>
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg bg-on-surface-light/20 dark:bg-on-surface-dark/20"></div>
        <div className="flex gap-1">
          <div className="h-3 w-1/5 rounded-lg bg-on-surface-light/20 dark:bg-on-surface-dark/20"></div>
          <div className="h-3 w-1/5 rounded-lg bg-on-surface-light/20 dark:bg-on-surface-dark/20"></div>
        </div>
        <div className="h-3 w-4/5 rounded-lg bg-on-surface-light/10 dark:bg-on-surface-dark/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-on-surface-light/10 dark:bg-on-surface-dark/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-on-surface-light/10 dark:bg-on-surface-dark/10"></div>
        <div className="h-3 w-5/5 rounded-lg bg-on-surface-light/10 dark:bg-on-surface-dark/10"></div>
      </div>
    </div>
  );
}
