import { Head, Link } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import Layout from "@/Layouts/Layout";

export default function Iesmins({ auth }) {
    return (
        <Layout>
            <Head title="Iesmins" />
            <TypeAnimation
                className="text-white"
                sequence={["My glorious LeTeacher", 1000]}
                wrapper="span"
                speed={20}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
            />
        </Layout>
    );
}
