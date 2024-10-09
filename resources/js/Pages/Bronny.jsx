import { Head, Link } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import Layout from "@/Layouts/Layout";

export default function Bronny({ auth }) {
    return (
        <Layout>
            <Head title="Bronny" />
            <TypeAnimation
                className="text-white"
                sequence={[
                    "Everything about glorious son of glorious LeDaddy",
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
