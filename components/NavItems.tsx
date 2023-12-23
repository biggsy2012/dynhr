/** @format */

"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState, RefObject, useEffect } from "react";
import NavItem from "./NavItem";

type Event = MouseEvent | TouchEvent;

type NavItemProps = {
	category: string;
	isOpen: boolean;
	isAnyOpen: boolean;
	handleOpen: () => void;
};

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			const el = ref?.current;
			if (!el || el.contains((event?.target as Node) || null)) {
				return;
			}

			handler(event); // Call the handler only if the click is outside of the element passed.
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]); // Reload only if ref or handler changes
};

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveIndex(null);
			}
		};
		document.addEventListener("keydown", handler);

		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, []);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	const handleOpen = (index: number) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className="flex gap-4 h-full" ref={navRef}>
			{PRODUCT_CATEGORIES.map((category, index) => {
				const isOpen = activeIndex === index;
				return (
					<NavItem
						key={category.value}
						category={category}
						isOpen={isOpen}
						handleOpen={() => handleOpen(index)}
						isAnyOpen={isAnyOpen}
					/>
				);
			})}
		</div>
	);
};

export default NavItems;
