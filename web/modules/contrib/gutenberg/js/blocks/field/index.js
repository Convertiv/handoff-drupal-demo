/**
 * Generated by a build script. Do not modify.
 * Check orginal .jsx file.
 */
/* eslint-disable */

(function(Drupal2, wp2) {
  const { blocks, data, element, blockEditor } = wp2;
  const { registerBlockType } = blocks;
  const { dispatch, select } = data;
  const { Fragment } = element;
  const { RichText } = blockEditor;
  const __ = Drupal2.t;
  const settings = {
    title: __("Field"),
    description: __("Field block."),
    icon: "editor-textcolor",
    attributes: {
      tag: {
        type: "string",
        default: "h1"
      },
      text: {
        type: "string"
      },
      mappingField: {
        type: "string"
      },
      mappingAttribute: {
        type: "string"
      },
      placeholder: {
        type: "string",
        default: "Insert text"
      }
    },
    edit({ className, attributes, setAttributes }) {
      const { text, tag, placeholder } = attributes;
      return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement(
        RichText,
        {
          tagName: tag,
          value: text,
          placeholder,
          onChange: (newValue) => setAttributes({ text: newValue })
        }
      )));
    },
    save({ attributes }) {
      const { text } = attributes;
      return text;
    }
  };
  const category = {
    slug: "drupal",
    title: __("Drupal")
  };
  const currentCategories = select("core/blocks").getCategories().filter((item) => item.slug !== category.slug);
  dispatch("core/blocks").setCategories([category, ...currentCategories]);
  registerBlockType(`${category.slug}/field`, {
    category: category.slug,
    ...settings
  });
})(Drupal, wp);
