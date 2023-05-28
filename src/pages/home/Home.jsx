import { Mobile, Pc } from "device";
import React, { useEffect } from "react";
import { styled } from "styled-components";
// import home_video from "assets/videos/home/home_video.mp4";
// import home_poster from "assets/images/home/home_poster.webp";
// import home_mobile from "assets/images/home/home_mobile.webp";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 200px;
`;
const Container = styled.div`
  width: 1200px;
  height: 100%;
  min-height: calc(100vh - 84px);
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  /* opacity: 0.15; */
`;

const MobileBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  opacity: 0.7;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 36px;
  padding-top: 34vh;
`;

const MobileTitleBox = styled(Link)`
  width: auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  text-decoration: none;
`;

const MobileTitleText = styled.span`
  /* font-family: "Helvetica"; */
  font-family: "Alumni sans";
  width: auto;
  font-size: 1.5rem;
  font-weight: 400;
  color: #dedede;

  line-height: 100%;
`;

const MenuWrapper = styled.div`
  margin-top: 140px;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: flex-end; */
  /* justify-content: end; */
  /* margin-top: 120px; */
  /* padding-bottom: 100px; */
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const MenuText = styled.span`
  text-decoration: underline;
  color: #dedede;
  /* font-family: "Alumni Sans"; */
  /* font-family: "Helvetica"; */
  font-size: 1rem;
`;
const MobileBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MobileVideoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 4px;
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MobileVideo = styled.video`
  width: 100%;
  height: auto;
`;
const Home = ({ setIshome }) => {
  useEffect(() => {
    setIshome(window.location.pathname);
    return () => setIshome("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Pc>
        <Wrapper>
          <BackgroundVideo
            src="https://deuffzfddmyq6.cloudfront.net/videos/motel_1.mp4"
            // src={home_video}
            // poster={home_poster}
            // preload="none"
            autoPlay
            loop
            muted
          />
          <Container></Container>
        </Wrapper>
      </Pc>
      <Mobile>
        <MobileWrapper>
          <MobileTitleBox>
            <MobileTitleText>KIM SUNG JAE</MobileTitleText>
          </MobileTitleBox>
          <MobileBox>
            <MobileVideoWrapper>
              <MobileVideo
                src="https://deuffzfddmyq6.cloudfront.net/videos/motel_1.mp4"
                // src={home_video}
                // poster={home_poster}
                // preload="none"
                autoPlay
                loop
                muted
              />
            </MobileVideoWrapper>
            <MenuWrapper>
              <MenuLink to="/profile">
                <MenuText>PROFILE</MenuText>
              </MenuLink>
            </MenuWrapper>
          </MobileBox>
        </MobileWrapper>
      </Mobile>
    </>
  );
};

export default Home;
