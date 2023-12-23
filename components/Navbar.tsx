import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
	const user = null;

	return (
		<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<header className="relative bg-white">
				<MaxWidthWrapper>
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							{/* TODO: Mobile Nav */}
							<div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
								<NavItems />
							</div>
							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									{user ? null : (
										<Link
											href="/login"
											className={buttonVariants({
												variant: "ghost",
											})}
										>
											Login
										</Link>
									)}
									{user ? null : <Link href="/sign-up">Signup</Link>}
									{user ? null : (
										<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
									)}
									{user ? (
										<p>test</p>
									) : (
										<Link
											href="/create-account"
											className={buttonVariants({
												variant: "ghost",
											})}
										>
											Create Account
										</Link>
									)}
									{user ? (
										<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
									) : null}
									{user ? null : (
										<div className=" flex lg:ml-6">
											<span
												className="h-6 w-px bg-gray-200"
												aria-hidden="true"
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
};
export default Navbar;
