import { markdownify } from "@lib/utils/textConverter";
import Cta from "./components/Cta";

function Philosophy({ data }) {
  const { frontmatter } = data;
  const { title, subtitle, items, call_to_action } = frontmatter;
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="mx-auto text-center">
            {markdownify(title, "h1", "font-normal")}
            <p className="mt-4">
              {markdownify(subtitle, "span")}
            </p>
          </div>
          <div className="section row  -mt-6">
            {items.map((item, index) => (
              <div key={index} className="col-12 mt-6 md:col-6">
                <div className="p-12  shadow">
                  <div className="philosophy-head relative">
                    {markdownify(item.title, "h4")}
                  </div>
                  {markdownify(item.body, "p", "philosophy-body mt-4")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Philosophy;
