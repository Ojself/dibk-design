// Dependencies
import React from "react";

// Components
import PDF from "./PDF";

// Assets
import { imageData } from "assets/svg/dibk-logo-base64";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/PDF",
    component: PDF,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const scalingStyles = args.signedDocument
        ? {
              scale: "0.90251",
              position: "relative",
              top: "-17px",
              marginBottom: "-147px"
          }
        : {
              position: "relative",
              top: "43px",
              marginBottom: "60px"
          };
    return (
        <PDF {...args}>
            <div className={["page", args.signedDocument ? "signed-document" : ""].join(" ")}>
                <div className="content-container" style={scalingStyles}>
                    {args.children}
                </div>
            </div>
        </PDF>
    );
};

const logoExample = <img src={imageData} alt="Direktoratet for byggkvalitet" className="heading-logo" />;

const h1Example = (
    <h1>
        Heading level 1 example <small>small text example</small>
    </h1>
);

const h2Example = <h2>Heading level 2 example</h2>;

const h3Example = <h3>Heading level 3 example</h3>;

const h4Example = <h4>Heading level 4 example</h4>;

const textParagraphsExample = (
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
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
            <dd>List item content</dd>
        </dl>
        <dl>
            <dt>List item title:</dt>
            <dd>List item content</dd>
            <dt>List item title:</dt>
            <dd>List item content</dd>
            <dt>List item title:</dt>
            <dd>List item content</dd>
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

const tableExample = <table>{tableExampleContent}</table>;

const tableWithoutBordersExample = <table className="no-border">{tableExampleContent}</table>;

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
                {textParagraphsExample}
                {uncheckedCheckboxExample}
                {checkedCheckboxExample}
            </section>
        </>
    )
};

export const Logo = Template.bind({});
Logo.args = {
    signedDocument: false,
    children: logoExample
};

export const H1 = Template.bind({});
H1.args = {
    signedDocument: false,
    children: h1Example
};

export const H2 = Template.bind({});
H2.args = {
    signedDocument: false,
    children: h2Example
};

export const H3 = Template.bind({});
H3.args = {
    signedDocument: false,
    children: h3Example
};

export const H4 = Template.bind({});
H4.args = {
    signedDocument: false,
    children: h4Example
};

export const Text = Template.bind({});
Text.args = {
    signedDocument: false,
    children: (
        <>
            {textParagraphsExample}
            {textListExample}
        </>
    )
};

export const DescriptionList = Template.bind({});
DescriptionList.args = {
    signedDocument: false,
    children: descriptionListExample
};

export const Table = Template.bind({});
Table.args = {
    signedDocument: false,
    children: tableExample
};

export const TableWithoutBorders = Template.bind({});
TableWithoutBorders.args = {
    signedDocument: false,
    children: tableWithoutBordersExample
};

export const Checkbox = Template.bind({});
Checkbox.args = {
    signedDocument: false,
    children: (
        <>
            {uncheckedCheckboxExample}
            {checkedCheckboxExample}
        </>
    )
};
