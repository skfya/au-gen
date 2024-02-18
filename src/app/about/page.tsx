import Link from "next/link";
import Header from "../header";

export default function About() {
    return(
        <div>
            <Header />
            <div className="bubble">
                <p>AU stands for Alternate Universe. This term is often used by fans in relation to fanfiction in order to clarify a story exists outside of the canon universe, or the universe established in the original work.</p>
                <p>This website uses human written prompts created by me to generate a random prompt given two or three names of people.</p>
                <p>Two names are required to generate a prompt. Entering a third name is optional and will generate prompts involving three people.</p>
                <p>Feel free to use these prompts as you'd like. If using a prompt to publish a work of art online, please share the link.</p>
                <p>This website was created by:</p>
                <ul>
                    <li>@JUH4RIN and @swfuo on Twitter</li>
                    <li>planetnine_ on TikTok</li>
                    <li>planet9files on YouTube</li>
                </ul>
                <p>This website was created using React and GitHub pages.</p>
                <Link href="">Submit a prompt</Link>
                <br />
                <Link href="">Send support</Link>
                <br />
            </div>
            <Link href="/">Return</Link>
        </div>
    );
}