import Providers from "../components/Providers/providers";
import { getSession } from "../auth";
import Header from "@/components/Header/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}