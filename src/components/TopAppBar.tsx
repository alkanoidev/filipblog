import ChangeThemeBtn from "./Buttons/ChangeThemeBtn";

function TopAppBar({ children }: { children: any }) {
  return (
    <div className="flex mx-auto w-full sm:w-[652px] lg:w-[1024px] justify-start items-start sm:items-center gap-3 flex-col sm:flex-row relative">
      <div className="flex items-center gap-2 min-w-max">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-[0.3rem]">
          <img
            src="/Avatar.webp"
            alt="avatar"
            className="rounded-full w-16 h-16 ring-2 bg-light dark:bg-dark transition-none ring-light dark:ring-dark"
          />
        </div>
        <div>
          <h2>Filip&apos;s Blog</h2>
        </div>
      </div>
      {children}
      <div className="absolute sm:relative right-0 top-5 sm:right-auto sm:top-auto">
        <ChangeThemeBtn />
      </div>
    </div>
  );
}

export default TopAppBar;
