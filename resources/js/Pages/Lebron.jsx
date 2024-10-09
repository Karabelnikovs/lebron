import { Head, Link } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import Layout from "@/Layouts/Layout";

export default function Lebron({ auth }) {
    return (
        <Layout>
            <Head title="Lebron" />

            <TypeAnimation
                className="text-white"
                sequence={[
                    "Lebron James is the GOAT",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Lebron James is the LEGEND",
                    1000,
                    "Lebron James is the GOD",
                    1000,
                    "Lebron James is the BEST",
                    1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
            />
        </Layout>
    );
}
