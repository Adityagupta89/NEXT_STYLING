import Footer from "..Footer/components/Footer";

function About() {
  return (
    <>
      <button className="btn btn-primary">Primary</button>
      <h2>Hello</h2>
    </>
  );
}
export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      (page)
      <Footer />
    </>
  );
};
