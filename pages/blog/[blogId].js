import Head from "next/head";

function Blog({ title, description }) {
  const Id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">{Id}</h1>
    </>
  );
}
export default Blog;
export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${process.env.NEXT_PUBLIC_ANALYTICS_ID} and password ${password}``Connecting to database with username ${process.env.NEXT_PUBLIC_ANALYTICS_ID} and password ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
