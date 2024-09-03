export default function LayoutAuth({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="grid place-items-center h-full">
          <h1>navbar</h1>
          {children}
        </div>
    );
  }