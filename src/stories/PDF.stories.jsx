// Dependencies
import React from "react";

// Components
import PDF from "./PDF";
import ThemeProvider from "./ThemeProvider";

// Assets
import { imageData } from "assets/svg/dibk-logo-base64";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PDF",
  component: PDF,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    signedDocument: { control: "boolean" },
    orientation: { control: "radio", options: ["portrait", "landscape"] }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const scalingStyles = args.signedDocument
    ? {
        scale: "0.90251",
        position: "relative",
        top: "-17px",
        marginBottom: "-147px",
      }
    : {
        position: "relative",
        top: "43px",
        marginBottom: "60px",
      };
  return (
    <ThemeProvider theme={args.theme}>
      <PDF {...args}>
        <div
          className={[
            "page",
            args.signedDocument ? "signed-document" : "",
            args.orientation === "landscape" ? "landscape" : "",
          ].join(" ")}
        >
          <div className="content-container" style={scalingStyles}>
            {args.children}
          </div>
        </div>
      </PDF>
    </ThemeProvider>
  );
};

const logoExample = (
  <img
    src={imageData}
    alt="Direktoratet for byggkvalitet"
    className="heading-logo"
  />
);

const h1Example = (
  <h1>
    Heading level 1 example <small>small text example</small>
  </h1>
);

const h2Example = (
  <h2>
    Heading level 2 example <small>small text example</small>
  </h2>
);

const h3Example = <h3>Heading level 3 example</h3>;

const h4Example = <h4>Heading level 4 example</h4>;

const h5Example = <h5>Heading level 5 example</h5>;

const captionExample = (
  <caption>
    Caption with default size example
  </caption>
);

const captionH1Example = (
  <caption style={{ "--size": 1 }}>
    Caption with size 1 example
  </caption>
);

const captionH2Example = (
  <caption style={{ "--size": 2 }}>
    Caption with size 2 example
  </caption>
)

const captionH3Example = (
  <caption style={{ "--size": 3 }}>
    Caption with size 3 example
  </caption>
);
const captionH4Example = (
  <caption style={{ "--size": 4 }}>
    Caption with size 4 example
  </caption>
);

const captionH5Example = (
  <caption style={{ "--size": 5 }}>
    Caption with size 5 example
  </caption>
);

const textParagraphsExample = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
      <br />
      <span>Text without class</span>{" "}
      <span className="text-bold">Text with class .text-bold</span>{" "}
      <span className="text-italic">Text with class .text-italic</span>{" "}
      <span className="text-red">Text with class .text-red</span>{" "}
      <span className="text-muted">Text with class .text-muted</span>{" "}
      <div>
        <span className="block text-left">
          Text with class .block and .text-left
        </span>
        <span className="block text-center">
          Text with class .block and .text-center
        </span>
        <span className="block text-right">
          Text with class .block and .text-right
        </span>
      </div>
    </p>
  </>
);

const textListExample = (
  <>
    <div>
      <b>List item title: </b> List item content
    </div>
    <div>
      <b>List item title: </b> List item content
    </div>
    <div>
      <b>List item title: </b> List item content
    </div>
  </>
);

const descriptionListExample = (
  <>
    <dl style={{ "--title-width": "120px" }}>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </dd>
    </dl>
    <dl style={{ "--display-type": "stacked" }}>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>List item content</dd>
      <dt>List item title:</dt>
      <dd>
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </dd>
    </dl>
  </>
);

const tableExampleContent = (
  <>
    <thead>
      <tr>
        <th style={{ "--width": "200px" }}>Funksjon</th>
        <th>Table header</th>
        <th>
          Table-
          <br />
          header
        </th>
        <th>Table header</th>
        <th>Table header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table data</td>
        <td>Table data</td>
        <td>Table data</td>
        <td className="whitespace-nowrap">
          <div>Table data</div>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>Table data</td>
        <td>Table data</td>
        <td>Table data</td>
        <td className="whitespace-nowrap">
          <div>Table data</div>
          <div>Table data</div>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>Table data</td>
        <td>Table data</td>
        <td>Table data</td>
        <td className="whitespace-nowrap">-</td>
        <td>-</td>
      </tr>
    </tbody>
  </>
);

const tableExample = <table>{captionExample}{tableExampleContent}</table>;

const tableWithoutBordersExample = (
  <table className="no-border">{tableExampleContent}</table>
);

const gridExample = (
  <div className="grid" style={{ "--columns": "2"}}>
      <dl style={{ "--display-type": "stacked" }}>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
      </dl>
      <dl style={{ "--display-type": "stacked" }}>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
      </dl>
      <dl style={{ "--display-type": "stacked" }}>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
        <dt>List item title:</dt>
        <dd>List item content</dd>
      </dl>
  </div>
)

const blockquoteExample = <blockquote>Blockquote text</blockquote>;

const checkedCheckboxExample = (
  <div className="checkbox-container">
    <span className="checkbox">X</span>
    <span>Checked checkbox</span>
  </div>
);

const uncheckedCheckboxExample = (
  <div className="checkbox-container">
    <span className="checkbox"></span>
    <span>Unchecked checkbox</span>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  signedDocument: false,
  orientation: "portrait",
  children: (
    <>
      {logoExample}
      {h1Example}
      {textParagraphsExample}
      {textListExample}
      <section>
        {h2Example}
        {tableExample}
      </section>
      <section>
        {h2Example}
        {gridExample}
      </section>
      <section>
        {h3Example}
        {uncheckedCheckboxExample}
        {checkedCheckboxExample}
      </section>
    </>
  ),
};

export const Logo = Template.bind({});
Logo.args = {
  signedDocument: false,
  children: logoExample,
};

export const Headings = Template.bind({});
Headings.args = {
  signedDocument: false,
  children: (
    <>
      {h1Example}
      {h2Example}
      {h3Example}
      {h4Example}
      {h5Example}
    </>
  ),
};

export const Text = Template.bind({});
Text.args = {
  signedDocument: false,
  children: textParagraphsExample,
};

export const DescriptionList = Template.bind({});
DescriptionList.args = {
  signedDocument: false,
  children: descriptionListExample
};

export const Grid = Template.bind({});
Grid.args = {
  signedDocument: false,
  children: gridExample
};

export const Table = Template.bind({});
Table.args = {
  signedDocument: false,
  children: tableExample,
};

export const TableWithoutBorders = Template.bind({});
TableWithoutBorders.args = {
  signedDocument: false,
  children: tableWithoutBordersExample,
};

export const Caption = Template.bind({});
Caption.args = {
  signedDocument: false,
  children: (
    <>
    <table>
      {captionExample}
      {tableExampleContent}
    </table>
    <table>
      {captionH1Example}
      {tableExampleContent}
    </table>
    <table>
      {captionH2Example}
      {tableExampleContent}
    </table>
    <table>
      {captionH3Example}
      {tableExampleContent}
    </table>
    <table>
      {captionH4Example}
      {tableExampleContent}
    </table>
    <table>
      {captionH5Example}
      {tableExampleContent}
    </table>
    </>
  ),
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  signedDocument: false,
  children: blockquoteExample,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  signedDocument: false,
  children: (
    <>
      {uncheckedCheckboxExample}
      {checkedCheckboxExample}
    </>
  ),
};
