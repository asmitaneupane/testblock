import { RichText } from "@wordpress/block-editor";

export default function Save(props) {
  const {
    attributes: { content },
  } = props;
  return <a>{<RichText.Content value={content} />}</a>;
}
