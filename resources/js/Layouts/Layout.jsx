import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link, usePage } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function Layout({ children, auth }) {
    const user = usePage().props.auth.user;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const images = [
        "/storage/images/lebron-heat.jpg",
        "/storage/images/lebron-ball.jpg",
        "/storage/images/lebron-tired.jpg",
        "/storage/images/lebron-shiny.jpg",
        "/storage/images/lebron-cavs.jpg",
        "/storage/images/lebron-family.jpg",
    ];

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);

            setTimeout(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % images.length
                );
                setFadeIn(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-black text-white/50">
                <img
                    id="background"
                    className={`absolute top-0 w-full h-full object-cover brightness-50 transition-opacity duration-500 ${
                        fadeIn ? "opacity-100" : "opacity-0"
                    }`}
                    src={images[currentImageIndex]}
                    alt="Background Image"
                />

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <header className="">
                        <nav className="absolute top-0 left-0 w-full flex  justify-center items-center">
                            <>
                                <Link
                                    href={route("lebron")}
                                    className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                >
                                    Lebron
                                </Link>

                                <Link
                                    href={route("lesperm")}
                                    className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                >
                                    LeSperm
                                </Link>

                                <Link
                                    href={route("lestats")}
                                    className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                >
                                    LeStats
                                </Link>

                                <Link
                                    href={route("lebryce")}
                                    className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                >
                                    LeBryce
                                </Link>

                                <Link
                                    href={route("goat")}
                                    className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                >
                                    LeIesmiņš
                                </Link>
                            </>
                            {user ? (
                                <>
                                    <Link
                                        href={route("profile.edit")}
                                        className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                    >
                                        LeProfile
                                    </Link>
                                    <Link
                                        method="post"
                                        href={route("logout")}
                                        className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                    >
                                        LeLogout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="font-bold rounded-md px-3 py-8  ring-1 ring-transparent transition  focus:outline-none  text-white hover:text-white/80 focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>
                    <main>{children}</main>
                    <footer className="font-bold absolute w-full flex justify-center bottom-0 py-8 text-center text-sm text-white/70">
                        Lebron Copyright © 2024
                    </footer>
                </div>
            </div>
        </>
        // <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
        //     {/* <div>
        //         <Link href="/">
        //             <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        //         </Link>
        //     </div> */}

        //     <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        //         {children}
        //     </div>
        // </div>
    );
}
