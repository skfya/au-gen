import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function Header() {
    return(
        <div className={lora.className}>
            <h1>AU Generator</h1>
        </div>
    );
}
