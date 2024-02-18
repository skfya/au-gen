import Link from "next/link";
import Header from "../header";
import styles from './page.module.css'

export default function About() {
    return(
        <div>
            <Header />
            <div className={styles.bubble}>
                <p>AU stands for Alternate Universe. This term is often used by fans in relation to fanfiction in order to clarify a story exists outside of the canon universe, or the universe established in the original work.</p>
                <p>This website uses human written prompts created by me to generate a random prompt given two or three names of people.</p>
                <p>Two names are required to generate a prompt. Entering a third name is optional and will generate prompts involving three people.</p>
                <p>Feel free to use these prompts as you'd like. If using a prompt to publish a work of art online, please share the link.</p>
                <p>This website was created by:</p>
                <ul>
                    <li><a href="https://twitter.com/JUH4RIN" target="_blank">@JUH4RIN</a>/<a href="https://twitter.com/swfuo" target="_blank">@swfuo</a> on Twitter</li>
                    <li><a href="https://www.tiktok.com/@planetnine_" target="_blank">planetnine_</a> on TikTok</li>
                </ul>
                <p>This website was created using Next.js and deployed through GitHub pages.</p>
                <p>Thank you for using my website!</p>
                <Link href="https://forms.gle/BcinYAvzM8BscZRC6" target="_blank">Submit a prompt or feedback</Link>
                <br />
                <Link href="https://ko-fi.com/skfya" target="_blank">Send support</Link>
            </div>
            <br />
            <Link href="/">Return</Link>
        </div>
    );
}