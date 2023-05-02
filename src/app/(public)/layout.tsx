// import '../styles/globals.css';

export const metadata = {
  title: 'Login',
  description: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <h1>Login Sistema</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
