import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
  GradientPicker,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const [gradient, setGradient] = useState(null);

  //block control
  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };
  const onChangeAlignment = (newAlignment) => {
    setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  //inspector control
  const onChangeBGColor = (hexColor) => {
    setAttributes({ bg_color: hexColor });
  };

  const onChangeTextColor = (hexColor) => {
    setAttributes({ text_color: hexColor });
  };

  const onChangeGradient = (currentGradient ) => {
    setAttributes({ gradient: currentGradient });
    setGradient(currentGradient)
    console.log(gradient);
  };

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <AlignmentToolbar
          value={attributes.alignment}
          onChange={onChangeAlignment}
        />
      </BlockControls>
      <InspectorControls key="setting">
        <div id="testblock-controls">
          <ToggleGroupControl
            __nextHasNoMarginBottom
            isBlock
            onChange={onChangeAlignment}
            style={{
              border: "none",
            }}
          >
            <ToggleGroupControlOptionIcon
              label="Left"
              value="left"
              icon="editor-alignleft"
            />
            <ToggleGroupControlOptionIcon
              label="Center"
              value="center"
              icon="editor-aligncenter"
            />
            <ToggleGroupControlOptionIcon
              label="Right"
              value="right"
              icon="editor-alignright"
            />
            <ToggleGroupControlOptionIcon
              label="Justify"
              value="justify"
              icon="editor-justify"
            />
          </ToggleGroupControl>
          <fieldset>
            <legend className="blocks-base-control__label">
              {__("Background color", "testblock")}
            </legend>
            <ColorPalette // Element Tag for Gutenberg standard colour selector
              onChange={onChangeBGColor}
            />
          </fieldset>
          <fieldset>
            <legend className="blocks-base-control__label">
              {__("Text color", "testblock")}
            </legend>
            <ColorPalette onChange={onChangeTextColor} />
          </fieldset>
          <fieldset>
          <legend className="blocks-base-control__label">
            {__("Gradient", "testblock")}
          </legend>
          <GradientPicker
            __nextHasNoMargin
            onChange={onChangeGradient}
            value={gradient}
            gradients={attributes.gradients}
          />
          </fieldset>
        </div>
      </InspectorControls>
      <RichText
        className={attributes.className}
        style={{
          textAlign: attributes.alignment,
          backgroundColor: attributes.bg_color,
          color: attributes.text_color,
        }}
        tagName="p"
        onChange={onChangeContent}
        value={attributes.content}
      />
    </div>
  );
}
