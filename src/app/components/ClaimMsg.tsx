"use client"

import Typewriter from "typewriter-effect"

const context = "「お名前ドットコムは、その魅力的なキャンペーンで人々の目を引き、その代償に迷惑なメールを高頻度で送りつける、悪名高い悪質サービスです。」" as const

export default function ClaimMsg() {
	return (
		<div className="lg:text-2xl leading-loose">
			<Typewriter
				options={{
					strings: context,
					autoStart: true,
					delay: 100,
				}}
			/>
		</div>
	)
}
