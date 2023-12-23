import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { AreaChart, Waypoints, Fingerprint } from "lucide-react";
import Link from "next/link";

const features = [
	{
		name: "Analytics",
		description:
			"Get a better understanding of where your traffic is coming from.",
		icon: AreaChart,
	},
	{
		name: "Engagement",
		description: "Speak directly to your customers in a more meaningful way.",
		icon: Waypoints,
	},
	{
		name: "Security",
		description: "Your customers' data will be safe and secure.",
		icon: Fingerprint,
	},
];

export default function Home() {
	return (
		<>
			<MaxWidthWrapper>
				<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">
						Welcome to the Next.js + Tailwind CSS Starter
						<span className="text-blue-600"> test</span>.
					</h1>
					<p className="mt-6 text-lg max-w-prose text-muted-foreground">
						Hello World 2
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Link href="/signin" className={buttonVariants()}>
							Sign In
						</Link>
						<Button variant="ghost">Our Interface &rarr;</Button>
						{/* TODO: signin page */}
					</div>
				</div>
			</MaxWidthWrapper>

			<section className="border-t border-gray-200 bg-gray-50">
				<MaxWidthWrapper className="py-20">
					<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
										{<feature.icon className="w-1/3 h-1/3" />}
									</div>
								</div>
								<div className="mt-4 md:mt-0 md:ml-6 lg:mt-6 lg:ml-0">
									<h3 className="text-lg font-medium text-gray-900">
										{feature.name}
									</h3>
									<p className="mt-2 text-base text-muted-foreground">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}
