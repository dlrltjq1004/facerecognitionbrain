import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'매직 브레인은 사진에서 얼굴을 감지합니다'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
