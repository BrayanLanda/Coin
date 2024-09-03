
export default async function DashboardAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid place-items-center h-full">
      <h1>Admin</h1>
      {children}
    </div>
  );
}
