import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Two API arrays",
	description: "Displaying the elements of two lists from separate API calls",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="w-screen h-screen flex flex-col justify-center items-center">{children}</body>
		</html>
	);
}
