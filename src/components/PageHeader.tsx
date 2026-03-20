import TabNav from "./TabNav";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          {title}
        </h1>
        <div className="accent-underline mt-3" />
      </div>
      <TabNav />
    </div>
  );
};

export default PageHeader;
