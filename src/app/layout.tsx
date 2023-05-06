import "./globals.css"
import { Noto_Sans_JP } from "next/font/google"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata = {
	title: "お名前ドットコムはくそ.jp",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className={notoSansJP.className}>
				<main className="min-h-screen flex flex-col items-center justify-center p-10 lg:p-24">
					<div className="max-w-3xl flex flex-col items-center justify-center gap-14">{children}</div>
				</main>
			</body>
		</html>
	)
}
