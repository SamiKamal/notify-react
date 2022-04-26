import { useEffect, useState } from 'react';
import styled from 'styled-components';

type NotifyProps = {
  children: string;
  type: 'warning' | 'error' |  'success';
  duration: number;
}
interface WrapperProps {
  backgroundColor: string;
}

function Notify({ children, type, duration }: NotifyProps) {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // this code runs when the type changes
  useEffect(() => {
    
    if (type === 'error') {
      setBackgroundColor('#ff7066')

    } else if (type === 'success') {
      setBackgroundColor('#99cc33');

    } else if (type === 'warning'){
      setBackgroundColor('#ffcc00');
    }

  }, [type])
  
  // this code runs when the duration changes
  useEffect(() => {
    
    const timer = setTimeout(() => {      
      setIsVisible(false)
    }, duration);

    // clear timeout on unmount
    return () => clearTimeout(timer)
  }, [duration])
  
  // condintional rendering
  return isVisible ? (
    <Wrapper backgroundColor={backgroundColor}>
      <ButtonWrapper>

      </ButtonWrapper>
      <NotifyText>
        {children}
      </NotifyText>
      <CloseButton onClick={() => setIsVisible(false)}>
        +
      </CloseButton>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${p => p.backgroundColor};
  color: white;
  font-size: 28px;
  padding: 3rem 0;
  max-height: 33px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ButtonWrapper = styled.div`

`

const NotifyText = styled.p`
`

const CloseButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 72px;
  transform: rotate(45deg);
  cursor: pointer;
`

export default Notify