import { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import './App.css';
import backgroundImg from './Assets/homeBackground.jpg';
import HomeView from './Components/Home/HomeView';
import UseBookData from './Components/Hooks/useFetchData';

const fade = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }

`;

const ImageContainer = styled.div`
  border: 1px solid #000;
  background-image: url(${backgroundImg});
  width: 1000px;
  height: 1000px;
  z-index: 2000;
  background-size: contain;
  opacity: 1;
  transition: all 500ms ease;
  animation: ${fade} 2s linear forwards;
`;

function App() {
  const [isLoading, fetchedBooks] = UseBookData();
  const [imgLoad, setImgLoad] = useState(false);

  const EmergeImage = () => {
    let image;
    setTimeout(() => {
      image = <ImageContainer style={{ opacity: 1 }} />;
    }, 1000);
    return image;
  };
  return (
    <div>
      <ImageContainer />
      {imgLoad ? null : <HomeView />}
    </div>
  );
}
export default App;
