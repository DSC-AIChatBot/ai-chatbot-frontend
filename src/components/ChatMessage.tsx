import React, { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    role : string,
    image : string,
    content : string
}

type StyledContainerProps = {
  align : string,
  left : string,
  right : string
}

type MessageContainerProps = {
  backgroundColor : string,
}

type MessageImageProps = {
  alignSelf : string,
}

type MessageTextProps = {
  color : string,
}

type BubbleIconContainerProps = {
  alignItems : string;
}

type BubbleStyledSvgProps = {
  left : string,
  right : string,
}

type BubbleStyledPathProps = {
  fill : string
}

const StyledContainer = styled.div`
  display : flex;
  position: relative;
  margin : 7px;
  margin-left : ${(props : StyledContainerProps) => props.left};
  align-self : ${(props : StyledContainerProps) => props.align};
  margin-right : ${(props : StyledContainerProps) => props.right};
`;

const MessageContainer = styled.div`
  max-width : 25vw;
  padding : 10px;
  padding-top : 5px;
  padding-bottom : 7px;
  border-radius : 20px;
  background-color :  ${(props : MessageContainerProps) => props.backgroundColor};
`;

const MessageImage = styled.img`
  width : 20vw;
  height : 15vh;
  align-self : ${(props : MessageImageProps) => props.alignSelf};
`;

const MessageText = styled.span`
  padding-top : 3px;
  font-size : 17px;
  color : ${(props : MessageTextProps) => props.color};
`;

const BubbleIconContainer = styled.div`
  position : absolute;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  z-index : -1;
  flex : 1;
  justify-content: flex-end;
  align-items : ${(props : BubbleIconContainerProps) => props.alignItems};;
`;

const BubbleStyledSvg = styled.svg`
  width : 15px;
  height : 17px;
  position : absolute;
  top : 20px;
  left : ${(props : BubbleStyledSvgProps) => props.left};
  right : ${(props : BubbleStyledSvgProps) => props.right};
`;

const BubbleStyledPath = styled.path`
  fill : ${(props : BubbleStyledPathProps) => props.fill};
`;

function ChatMessage({ role, image, content } : Props) {
  const messagesRef = useRef<HTMLHeadingElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView();
    }
  }, [messagesRef]);

  useEffect(() => {
    scrollToBottom();
  }, []);

  if (role === "guest") {
    return (
      <StyledContainer
        align="flex-end"
        left="0"
        right="20"
        ref={messagesRef}
      >
        <MessageContainer
          backgroundColor="#D5919D"
        >
          {
            image
              ? (
                <MessageImage
                  alignSelf="flex-start"
                  src={image}
                />
              )
              : null
          }
          {
            content
              ? (
                <MessageText
                  color="#fff"
                >
                  {content}
                </MessageText>
              )
              : null
          }
          <BubbleIconContainer
            alignItems="flex-end"
          >
            <BubbleStyledSvg
              left=""
              right="-6px"
              viewBox="32.484 17.5 15.515 17.5"
              enableBackground="new 32.485 17.5 15.515 17.5"
            >
              <BubbleStyledPath
                fill="#D5919D"
                d={'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'}
                x="0"
                y="0"
              />
            </BubbleStyledSvg>
          </BubbleIconContainer>
        </MessageContainer>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer
      align="flex-start"
      left="20"
      right="0"
      ref={messagesRef}
    >
      <MessageContainer
        backgroundColor="#535063"
      >
        {
          image
            ? (
              <MessageImage
                alignSelf="flex-end"
                src={image}
              />
            )
            : null
        }
        {
          content
            ? (
              <MessageText
                color="#FFF"
              >
                {content}
              </MessageText>
            )
            : null
        }
        <BubbleIconContainer
          alignItems="flex-start"
        >
          <BubbleStyledSvg
            left="-6px"
            right=""
            viewBox="32.484 17.5 15.515 17.5"
            enableBackground="new 32.485 17.5 15.515 17.5"
          >
            <BubbleStyledPath
              d={'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'}
              fill="#535063"
              x="0"
              y="0"
            />
          </BubbleStyledSvg>
        </BubbleIconContainer>
      </MessageContainer>
    </StyledContainer>
  );
}

export default ChatMessage;