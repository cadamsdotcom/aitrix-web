import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-4">
      <div className="container">
        <div className="row text-center">
          {banner.image && (
            <Image
            src={banner.image}
            width={750}
            height={390}
            alt="banner image"
            priority
          />
          )}
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold mt-12">{banner.title}</h1>
            <p className="mt-4">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
