// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import Button from "./Button";
import Container from "./Container";
import Header from "./Header";
import Accordion from "./Accordion";
import Paper from "./Paper";
import NavigationBar from "./NavigationBar";
import CheckBoxList from "./CheckBoxList";
import CheckBoxListItem from "./CheckBoxListItem";
import RadioButtonList from "./RadioButtonList";
import RadioButtonListItem from "./RadioButtonListItem";

// Stylesheets
import style from "./Theme.module.scss";

const Theme = ({ theme }) => {
    const renderColors = (theme) => {
        return Object.keys(theme.colors).map((color) => {
            const colorClassName = style[color];
            return (
                <Fragment key={color}>
                    <div>{color}</div>
                    <div className={`${style.color} ${colorClassName}`}></div>
                </Fragment>
            );
        });
    };

    return theme ? (
        <React.Fragment>
            <NavigationBar theme={theme}></NavigationBar>
            <Container maxWidth="916px">
                <Paper noMargin>
                    <section>
                        <Header size={2}>Colors</Header>
                        <div className={style.colorPalette}> {renderColors(theme)}</div>
                    </section>
                    <section>
                        <Header size={2}>Typography</Header>
                        <Header size={1} htmlTag="p">
                            Heading size 1
                        </Header>
                        <Header size={2} htmlTag="p">
                            Heading size 2
                        </Header>
                        <Header size={3} htmlTag="p">
                            Heading size 3
                        </Header>
                        <Header size={4} htmlTag="p">
                            Heading size 4
                        </Header>
                        <Header size={5} htmlTag="p">
                            Heading size 5
                        </Header>
                        <p>Paragraph</p>
                        <p>
                            <a href="#theme">Hyperlink</a>
                        </p>
                    </section>
                    <section>
                        <Header size={2}>Accordions</Header>
                        <Accordion title="Accordion with default color">
                            <p>Accordion content</p>
                        </Accordion>
                        <Accordion title="Accordion with secondary color" color="secondary">
                            <p>Accordion content</p>
                        </Accordion>
                    </section>
                    <section>
                        <Header size={2}>Buttons</Header>
                        <Button color="primary" content="Primary button" arrow="left" />
                        <Button color="secondary" content="Secondary button" arrow="right" />
                    </section>
                    <section>
                        <Header size={2}>Checkboxes</Header>

                        <CheckBoxList legend="Default checkbox list">
                            <CheckBoxListItem
                                onChange={() => {
                                    console.log("onchange");
                                }}
                                checked={true}
                                name="checkboxlist"
                                id="checkboxList-listItem-1"
                            >
                                Label for checked checkbox
                            </CheckBoxListItem>
                            <CheckBoxListItem
                                onChange={() => {
                                    console.log("onchange");
                                }}
                                name="checkboxlist"
                                id="checkboxList-listItem-2"
                            >
                                Label for unchecked checkbox
                            </CheckBoxListItem>
                        </CheckBoxList>
                    </section>
                    <section>
                        <Header size={2}>Radio buttons</Header>
                        <RadioButtonList legend="Default radio button list">
                            <RadioButtonListItem
                                onChange={() => {
                                    console.log("onchange");
                                }}
                                inputValue="value 1"
                                name="radio-button-list-list-item"
                                id="radioButtonList-listItem-1"
                                checked={true}
                            >
                                Checked radio button
                            </RadioButtonListItem>
                            <RadioButtonListItem
                                onChange={() => {
                                    console.log("onchange");
                                }}
                                inputValue="value 2"
                                name="radio-button-list-list-item"
                                id="radioButtonList-listItem-2"
                            >
                                Unchecked radio button
                            </RadioButtonListItem>
                        </RadioButtonList>
                    </section>
                </Paper>
            </Container>
        </React.Fragment>
    ) : (
        "Select a theme"
    );
};

Theme.propTypes = {
    theme: PropTypes.object.isRequired
};

Theme.defaultProps = {};

export default Theme;
