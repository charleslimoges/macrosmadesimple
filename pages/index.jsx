import Head from "next/head";

const EMBED_URL = process.env.NEXT_PUBLIC_EMBED_URL;

export default function EmbeddedPage() {
  if (!EMBED_URL) {
    return (
      <main className="placeholder">
        <div>
          <h1>Set an embed URL</h1>
          <p>
            Add <code>NEXT_PUBLIC_EMBED_URL</code> to your environment variables to load a Notion page or any
            embeddable website here.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Embedded Content</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="viewer">
        <iframe src={EMBED_URL} title="Embedded content" allow="clipboard-read; clipboard-write" allowFullScreen />
      </main>
    </>
  );
}