import { Head, Link } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import Layout from "@/Layouts/Layout";

export default function Stats({ auth }) {
    return (
        <Layout>
            <Head title="Stats" />
            <TypeAnimation
                className="text-white"
                sequence={["All glorious LeStats", 1000]}
                wrapper="span"
                speed={20}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
            />
        </Layout>
    );
}
