import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

const Workflow = ({ workflow }) => {
  return (
    <section className="section pb-0">
      <div className="mb-8 text-center">
        {markdownify(
          workflow.title,
          "h2",
          "mx-auto max-w-[700px] font-bold leading-[44px]"
        )}
        {markdownify(workflow.description, "p", "mt-3")}
        {workflow.button.enable && (
          <Link
          className="btn btn-primary mt-4"
          href={workflow.button.link}
          rel={workflow.button.rel}
          >
            {workflow.button.label}
          </Link>
        )}
      </div>
      <Image
        src={workflow.image}
        alt="workflow image"
        width={1920}
        height={296}
      />
    </section>
  );
};

export default Workflow;
