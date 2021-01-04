import Head from "next/head";
import styles from "../styles/Home.module.css";

// Adopt: https://fa3wxlp4uv4.typeform.com/to/BbwkQs0U

export default function Home() {
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
        <table style={{ width: "100%" }}>
          <tr>
            <td
              style={selectedStyle}
              onClick={() => {
                document.getElementById("projects").style.backgroundImage =
                  "linear-gradient(to right, #00d2ff, #3a7bd5)";
                document.getElementById("projects").style.color = "white";

                document.getElementById(
                  "experiences"
                ).style.backgroundImage = null;
                document.getElementById("experiences").style.color = "black";

                setContent(projects);
                console.log(content);
              }}
              id="projects"
            >
              Projects
            </td>
            <td
              onClick={() => {
                document.getElementById(
                  "projects"
                ).style.backgroundImage = null;
                document.getElementById("projects").style.color = "black";

                document.getElementById("experiences").style.backgroundImage =
                  "linear-gradient(to right, #00d2ff, #3a7bd5)";
                document.getElementById("experiences").style.color = "white";

                setContent(experiences);
                console.log(content);
              }}
              id="experiences"
            >
              Experience
            </td>
          </tr>
        </table>
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
