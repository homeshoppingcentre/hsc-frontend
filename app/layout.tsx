// app/layout.tsx

export const metadata = {
  title: 'HSC Marketplace',
  description: 'Buy and sell everything on HSC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
