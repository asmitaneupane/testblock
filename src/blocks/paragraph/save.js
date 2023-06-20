import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Save() {
  return (
    <p {...useBlockProps.save()}>
      {__("Hello from the front end", "block-example")}
    </p>
  );
}