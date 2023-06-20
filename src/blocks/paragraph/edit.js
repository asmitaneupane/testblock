import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit(props) {
  const {
    attributes: { content },
    setAttributes,
  } = props;
  const onChangeContent = ( newContent ) => {
    setAttributes( { content: newContent } );
};
  const blockProps = useBlockProps();

  return (
    <RichText
      {...blockProps}
      tagName="p"
      onChange={onChangeContent}
      value={content}
    />
  );
}
