import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './lib/components/NavigationBar';
import List from './lib/components/List';
import Button from './lib/components/Button';
import CheckBoxInput from './lib/components/CheckBoxInput';
import RadioButtonInput from './lib/components/RadioButtonInput';
import Header from './lib/components/Header';
import Select from './lib/components/Select';
import LoadingAnimation from './lib/components/LoadingAnimation';
import ContentBox from './lib/components/ContentBox';
import './lib/style/base/fonts.css';

ReactDOM.render(
  <NavigationBar primaryListItems={[{ name: 'Primary item 1', listItems: ['Sub item 1', 'Sub item 2'] }, 'Primary item 2', { name: 'Primary item 3', href: 'test.no' }]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} />,
  document.getElementById('navigation-bar')
);

ReactDOM.render(
  <List listItems={['item 1', 'item 2']} />,
  document.getElementById('list')
);

ReactDOM.render(
  <Button content="dummy button" />,
  document.getElementById('button')
);

ReactDOM.render(
  <Header content="Title for content" size={2} />,
  document.getElementById('header')
);

ReactDOM.render(
  <Select id="select" options={['option 1', 'option 2', { key: 'option 3', value: 'value 3' }]} />,
  document.getElementById('select')
);

ReactDOM.render(
  <LoadingAnimation />,
  document.getElementById('loading-animation')
);

ReactDOM.render(
  <ContentBox title="Title for box" content="Content for box" />,
  document.getElementById('content-box')
);


ReactDOM.render(
  <ContentBox title="Title for box" content="Content for box" />,
  document.getElementById('content-box')
);


const CheckBoxInputTest = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const handleCheckbox1Toggle = () => {
    setIsChecked1(!isChecked1);
  }
  const handleCheckbox2Toggle = () => {
    setIsChecked2(!isChecked2);
  }
  const handleCheckbox3Toggle = () => {
    setIsChecked3(!isChecked3);
  }
  return (
    <React.Fragment>
      <CheckBoxInput id="checkBoxInput-1" checked={isChecked1} onChange={handleCheckbox1Toggle} name="checkbox" >
        <span>Label for checkbox 1</span>
      </CheckBoxInput>
      <CheckBoxInput id="checkBoxInput-2" checked={isChecked2} onChange={handleCheckbox2Toggle} name="checkbox" >
        <span>Label for checkbox 2</span>
      </CheckBoxInput>
      <CheckBoxInput id="checkBoxInput-3" checked={isChecked3} onChange={handleCheckbox3Toggle} name="checkbox" >
        <span>Label for checkbox 3</span>
      </CheckBoxInput>
    </React.Fragment>
  )
}

ReactDOM.render(
  <CheckBoxInputTest />,
  document.getElementById('checkbox-input')
);



const RadioButtonTest = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleRadiobuttonSelect = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <React.Fragment>
      <RadioButtonInput id="radioButtonInput-1" checked={selectedValue === 'value1'} inputValue="value1" onChange={handleRadiobuttonSelect} name="radioButton">
        <span>Label for radio button 1</span>
      </RadioButtonInput>
      <RadioButtonInput id="radioButtonInput-2" checked={selectedValue === 'value2'} inputValue="value2" onChange={handleRadiobuttonSelect} name="radioButton">
        <span>Label for radio button 2</span>
      </RadioButtonInput>
      <RadioButtonInput id="radioButtonInput-3" checked={selectedValue === 'value3'} inputValue="value3" onChange={handleRadiobuttonSelect} name="radioButton">
        <span>Label for radio button 3</span>
      </RadioButtonInput>
    </React.Fragment>
  )
}

ReactDOM.render(
  <RadioButtonTest />,
  document.getElementById('radiobutton-input')
);