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

export default function Edit(props) {
  const { attributes, setAttributes } = props;

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
    setAttributes({ gradients: currentGradient });
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
            value={attributes.gradients}
            gradients={ [
              {
                "gradient": "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                "name": "Vivid cyan blue to vivid purple",
                "slug": "vivid-cyan-blue-to-vivid-purple"
              },
              {
                "gradient": "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
                "name": "Light green cyan to vivid green cyan",
                "slug": "light-green-cyan-to-vivid-green-cyan"
              },
              {
                "gradient": "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
                "name": "Luminous vivid amber to luminous vivid orange",
                "slug": "luminous-vivid-amber-to-luminous-vivid-orange"
              },
              {
                "gradient": "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
                "name": "Luminous vivid orange to vivid red",
                "slug": "luminous-vivid-orange-to-vivid-red"
              },
              {
                "gradient": "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
                "name": "Very light gray to cyan bluish gray",
                "slug": "very-light-gray-to-cyan-bluish-gray"
              },
              {
                "gradient": "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
                "name": "Cool to warm spectrum",
                "slug": "cool-to-warm-spectrum"
              }
            ]}
          />
          </fieldset>
        </div>
      </InspectorControls>
      {
        attributes.gradients && (
          <style>
            {`.test-block-paragraph {
              background: ${attributes.gradients}
            }`}
          </style>
        )
      }
      <RichText
        className={`test-block-paragraph ` + attributes.className}
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
