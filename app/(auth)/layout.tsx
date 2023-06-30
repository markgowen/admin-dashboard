export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex items-center justify-center h-4/5'>{children}</div>
  );
}
