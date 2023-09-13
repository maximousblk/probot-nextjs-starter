export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Awesome GitHub App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
