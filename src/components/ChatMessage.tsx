import React from 'react';
import styled from 'styled-components';

type Props = {
    mine : boolean,
    image : string,
    text : string
}

const StyledContainer = styled.div`
    display : flex;
    position: relative;
    margin : 7px;
`;

function ChatMessage({ mine = true, image, text } : Props) {
  return (
    <StyledContainer
      style={{
        marginLeft: mine ? 20 : 0,
        alignSelf: mine ? '' : 'flex-end',
        marginRight: mine ? 0 : 20,
      }}
    >
      <div
        style={{
          maxWidth: '250px',
          padding: '10px',
          paddingTop: '5px',
          paddingBottom: '7px',
          borderRadius: 20,
          backgroundColor: mine ? '#eaa786' : '#f1eae2',
        }}
      >
        {
          image
            ? (
              <img
                width={200}
                height={150}
                style={{ alignSelf: mine ? 'flex-start' : 'flex-end' }}
                src={image}
              />
            )
            : null
        }
        {
          text
            ? (
              <span
                style={{
                  paddingTop: 3,
                  fontSize: 17,
                  color: mine ? '#fff' : '#000',
                }}
              >
                {text}
              </span>
            )
            : null
        }
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            flex: 1,
            justifyContent: mine ? 'flex-end' : 'flex-end',
            alignItems: mine ? 'flex-start' : 'flex-end',
          }}
        >
          <svg
            width={15}
            height={17}
            style={{
              position: 'absolute',
              top: '20px',
              left: mine ? '-6px' : '',
              right: mine ? '' : '-6px',
            }}
            viewBox="32.484 17.5 15.515 17.5"
            enableBackground="new 32.485 17.5 15.515 17.5"
          >
            <path
              d={mine
                ? 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'
                : 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'}
              fill={mine ? '#eaa786' : '#f1eae2'}
              x="0"
              y="0"
            />
          </svg>
        </div>
      </div>
    </StyledContainer>

  );
}

export default ChatMessage;