import { markdownify } from "@lib/utils/textConverter";
import Cta from "./components/Cta";
import HeadingItems from "./partials/HeadingItems";
import ItemRows from "./partials/ItemRows";

function Offerings({ data }) {
  const { frontmatter } = data;
  const { title, subtitle, about, offerings, see_also, call_to_action } =
    frontmatter;
  return (
    <>
      <HeadingItems items={about} />
      <ItemRows items={offerings} />
      <Cta cta={call_to_action} />
      <HeadingItems items={see_also} />
    </>
  );
}

export default Offerings;
