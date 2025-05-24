import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黒猫台湾まつり｜川崎市二子新地で台湾文化体験！",
  description:
      "台湾グルメや雑貨、ワークショップが楽しめる「黒猫台湾まつり」",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
