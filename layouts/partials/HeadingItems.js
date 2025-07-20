import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const HeadingItems = ({ items }) => {
  return (
    <>
        {items.map((item, index) => (
      <section className="section my-4" key={index}>
        <div className="container">
          <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{item.title}</h1>
            <p className="mt-4">{markdownify(item.content)}</p>
            {item.button?.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={item.button?.link}
                rel={item.button?.rel}
              >
                {item.button?.label}
              </Link>
            )}
          </div>
        </div>
      </div>
      </section>
        ))}
    </>
  );
};

export default HeadingItems;
