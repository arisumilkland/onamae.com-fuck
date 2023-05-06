import ClaimMsg from "./components/ClaimMsg"
import Logo from "./components/Logo"
import Button from "./components/Button"

export default function Home() {
	return (
		<>
			<Logo />
			<ClaimMsg />
			<Button tab href="https://twitter.com/search?q=%E3%81%8A%E5%90%8D%E5%89%8D.com">
				Twitterで評判を見る
			</Button>
		</>
	)
}
