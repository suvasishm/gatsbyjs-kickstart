import React from "react"
import SEO from "../components/seo";
import Layout from "../components/layout";
import {Link} from "gatsby";

export default function About() {
    return (
        <Layout>
            <SEO title="About Gatsby" />
            <div style={{ color: `teal` }}>
                <h1>About Gatsby</h1>
                <p>Such wow. Very React.</p>
                <p>No need to refresh the page to get this line appear!! Wow!! Lot's of less clicks/F5s!!! Clap Clap...</p>
            </div>
            <Link to="/">Go to Home</Link>
        </Layout>
    )
}