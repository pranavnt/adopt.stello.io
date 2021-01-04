import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// Adopt: https://fa3wxlp4uv4.typeform.com/to/BbwkQs0U

export default function Home() {
  const [url, setUrl] = useState(
    "https://fa3wxlp4uv4.typeform.com/to/BbwkQs0U"
  );

  const selectedStyle = {
    backgroundImage: "linear-gradient(to right, #00d2ff, #3a7bd5)",
    color: "white",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Stello | Telescope Adoption</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <table style={{ width: "100%", padding: "1vh" }}>
          <thead>
            <tr>
              <td
                style={selectedStyle}
                onClick={() => {
                  document.getElementById("adopt").style.backgroundImage =
                    "linear-gradient(to right, #00d2ff, #3a7bd5)";
                  document.getElementById("adopt").style.color = "white";

                  document.getElementById(
                    "donate"
                  ).style.backgroundImage = null;
                  document.getElementById("donate").style.color = "black";

                  setUrl();
                }}
                id="adopt"
              >
                Adopt
              </td>
              <td
                onClick={() => {
                  document.getElementById("adopt").style.backgroundImage = null;
                  document.getElementById("adopt").style.color = "black";

                  document.getElementById("donate").style.backgroundImage =
                    "linear-gradient(to right, #00d2ff, #3a7bd5)";
                  document.getElementById("donate").style.color = "white";

                  setUrl();
                }}
                id="donate"
              >
                Donate
              </td>
            </tr>
          </thead>
        </table>

        <iframe style={{ height: "80vh", width: "100%" }} src={url} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/pranavnt/adopt.stello.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Stello
        </a>
      </footer>
    </div>
  );
}
