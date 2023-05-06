import Image from "next/image"

export default function Logo() {
	return <Image src="/logo.svg" alt="Logo" width={1090 / 3} height={127 / 3} priority />
}
