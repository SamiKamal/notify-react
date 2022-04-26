import GlobalStyle from './GlobalStyles';
import Notify from './Notify';

function App() {
  return (
    <>
      <GlobalStyle />
        <Notify type='success' duration={5000}> 
          You just broke our code, congrats!
        </Notify>
    </>
  );
}

export default App;
