import React, { Fragment, useState } from 'react';
import Messages from '../messages/messages';
import Text from '../subcomponents/formComponents/Text';

const Formulaire = () => {
  const [inputText, setInputText] = useState();
  const [formData, setFormData] = useState({});
  const [hasChanged, setHasChanged] = useState(false);

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('');

  const recordData = e => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', inputText);
    setFormData(data);
    setHasChanged(false);
    setInputText('');

    // Set-up Message component props
    setSuccess('true');
    setMessage('This is a great success');
    setLevel('success');

    setTimeout(() => {
      setSuccess(false);
      setMessage('');
      setLevel('');
    }, 5000);
  };

  const showText = e => {
    setHasChanged(true);
    setInputText(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={recordData}>
        {/*<input*/}
        {/*  name={`name`}*/}
        {/*  type="text"*/}
        {/*  onChange={showText}*/}
        {/*  value={inputText || ''}*/}
        {/*/>*/}
        {/*TODO Un composant Text configurable*/}
        <Text
          name={`name`}
          type={`text`}
          onChange={showText}
          value={inputText || ''}
          placeHolder={'No placeholder'}
        />
        <button className={`btn btn-primary`}>Submit</button>
      </form>

      <div>
        <span>{hasChanged && inputText}</span>
      </div>
      {success && <Messages message={message} level={level} />}
    </Fragment>
  );
};

export default Formulaire;
