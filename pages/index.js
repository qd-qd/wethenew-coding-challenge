import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Wethenew</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>

    <main>
      <h1 className="title">Welcome</h1>
    </main>

    <style jsx>{`
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default Home;
