import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NormalButton from 'components/atoms/Button/NormalButton';
import { useRequestDM } from 'modules/hooks';
import { removeTag } from 'lib';
import { MESSAGE_TYPE } from 'helper';
import { autoCompleteReset } from 'modules/actions/autoComplete';

const AutoComplete = () => {
  const sentenceList = useSelector(state => state.autoComplete.sentenceList);

  const dispatch = useDispatch();
  const onSendMessage = (text, type) => {
    dispatch(useRequestDM(text, type));
    dispatch(autoCompleteReset());
  };

  return (
    { sentenceList } && (
      <div className="auto_complete_div">
        {sentenceList.map(sentence => (
          <NormalButton
            label={removeTag(sentence)}
            styleDef={{
              height: '40px',
              color: 'orange',
              borderColor: '#f44336',
              borderRadius: '5px',
              marginBottom: '2px',
              backgroundColor: '#e7e7e7',
            }}
            clickEvt={() => onSendMessage(removeTag(sentence), MESSAGE_TYPE.query)}
          />
        ))}
      </div>
    )
  );
};

export default AutoComplete;
