import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save(props) {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content
        className={`testblocks-align-${props.attributes.alignment}`}
        tagName="p"
        value={props.attributes.content}
        style={ {
          backgroundColor: props.attributes.bg_color,
          color: props.attributes.text_color,
      } }
      />
    </div>
  );
}
