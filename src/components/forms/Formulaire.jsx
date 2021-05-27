import React, { Fragment, useState } from 'react';

const Formulaire = () => {
  const [inputText, setInputText] = useState();
  const [formData, setFormData] = useState({});
  const [hasChanged, setHasChanged] = useState(false);

  const recordData = e => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', inputText);

    setFormData(data);

    setHasChanged(false);

    setInputText('');
  };

  const showText = e => {
    setHasChanged(true);
    setInputText(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={recordData}>
        <input
          name={`name`}
          type="text"
          onChange={showText}
          value={inputText || ''}
        />
        <button className={`btn btn-primary`}>Submit</button>
      </form>

      <div>
        <span>{hasChanged && inputText}</span>
      </div>
    </Fragment>
  );
};

export default Formulaire;
