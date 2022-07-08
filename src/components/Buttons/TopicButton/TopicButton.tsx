function TopicButton({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-tr p-[3px] my-2 mt-4 from-primary to-secondary rounded-md group">
      <button
        className="text-dark transition duration-200 capitalize 
        group-hover:bg-transparent bg-light dark:bg-dark dark:text-light 
        font-bold rounded-md px-3 group-hover:text-dark"
      >
        {title}
      </button>
    </div>
  );
}

export default TopicButton;
