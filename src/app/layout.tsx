import type { Metadata } from "next";
import { Roboto } from "@next/font/google";
import "./globals.css";
import FirebaseProvider from "@/context/FirebaseContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "SkyFitnessPro",
  description: "Онлайн-тренировки для занятий дома",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <FirebaseProvider>
        <body className={roboto.className}>{children}</body>
      </FirebaseProvider>
    </html>
  );
}
