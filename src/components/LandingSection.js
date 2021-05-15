import React from "react";
import styled from "styled-components";
import TsParticles from "./TsParticles";
import TypistText from "./TypistText";
import * as VFX from "react-vfx";

const Styles = styled.div`
  position: relative;
  margin: 20vh 0 ;

  .avatar-pic {
    border-radius: 15%;
    /* z-index: 2; */
    width: 20%;
    position: relative;
    margin: 0 auto;
  }

  h1 {
    position: relative;
    color: white;
    margin: 40px 0;
  }

  #cat-pic {
   position: absolute;
   top: 3vh;
   right: 10%;
   z-index: 0;
   width: 200px;     
  }

  #dog-pic {
   position: absolute;
   top: 10vh;
   left: 10%;
   z-index: 0; 
   width: 200px;    
  }

  @media (max-width: 1200px) {
     #dog-pic {
        left: 5%;
     }

     #cat-pic {
        right: 5%;
     }
  }

  @media (max-width: 1024px) {
     #cat-pic {
        width: 150px;
     }

     #dog-pic {
        width: 150px;
     }
  }

  @media (max-width: 768px) {
     #cat-pic {
        width: 90px;
        top: 0;
        right: 8%;
     }

     #dog-pic {
        width: 100px;
        top: 4vh;
        left: 8%;
     }
  }

  @media (max-width: 480px) {
      .avatar-pic {
         width: 25%;
      }

      #cat-pic {
         width: 80px;
         top: -1vh;
      }

      #dog-pic {
         width: 80px;
         top: 3vh;
      }
  }
`;

function LandingSection() {
  return (
    <Styles>
      <TsParticles />
      <div className="landing-section-container">
      <VFX.VFXProvider>
            <VFX.VFXImg
              id="dog-pic"
              src="doge.gif"
              alt="dogeGif"
              shader="rainbow"
            />
      </VFX.VFXProvider>
        <img
          src="https://avatars.githubusercontent.com/u/5865915?s=400&u=5fc166e95a00b64d9e232cfeeb0deb529aa6c3f4&v=4"
          className="avatar-pic"
          alt="avatar"
        />
        <h1>hi, I'm Trevor Armes.</h1>
        <TypistText />
        <VFX.VFXProvider>
            <VFX.VFXImg
              id="cat-pic"
              src="cat.gif"
              alt="catGif"
              shader="rainbow"
            />
        </VFX.VFXProvider>
      </div>
    </Styles>
  );
}

export default LandingSection;
