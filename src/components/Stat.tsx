type PropTypes = {
  title?: string;
  data: string | number;
  icon?: React.ReactNode;
  dontShowDot?: boolean;
};

export default function Stat({ title, icon, data, dontShowDot }: PropTypes) {
  return (
    <>
      {!dontShowDot && (
        <div className="leading-none font-bold text-light-text/50 dark:text-dark-text/50">
          .
        </div>
      )}
      <div className="flex items-center gap-1 text-light-text/80 dark:text-dark-text/50">
        {icon && icon}
        {data}
        <span className="text-light-text/80 dark:text-dark-text/50">
          {title && title}
        </span>
      </div>
    </>
  );
}
