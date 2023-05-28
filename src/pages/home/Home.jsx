import { Mobile, Pc } from "device";
import React, { useEffect } from "react";
import { styled } from "styled-components";
// import home_video from "assets/videos/home/home_video.mp4";
// import home_poster from "assets/images/home/home_poster.webp";
// import home_mobile from "assets/images/home/home_mobile.webp";
import { Link } from "react-router-dom";
import mobile_contact from "assets/icons/menu/social_contact.svg";
import mobile_instargram from "assets/icons/menu/social_instargram.svg";
import mobile_twitter from "assets/icons/menu/social_twitter.svg";

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

// const MobileBackgroundImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   object-fit: cover;
//   opacity: 0.7;
// `;

const MobileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 36px;
  padding-top: 34vh;
`;

const MobileTMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
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

const MenuLink = styled(Link)`
  width: auto;

  margin-left: auto;
  display: flex;
  flex-direction: column;

  text-decoration: none;
`;

const MenuText = styled.span`
  /* text-decoration: underline; */

  height: auto;
  line-height: 100%;

  color: #dedede;
  font-family: "Alumni Sans";
  /* font-family: "Helvetica"; */
  /* font-family: "Pretendard"; */
  font-size: 1.4rem;
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

const ToggleSocialWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /* justify-content: space-between; */
  margin-top: 4px;
`;

const ToggleSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin: 0 4px;
`;

const ToggleSocialImg = styled.img`
  width: 100%;
  height: 100%;
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
          <MobileTMenu>
            <MobileTitleBox>
              <MobileTitleText>KIM SUNG JAE</MobileTitleText>
            </MobileTitleBox>
            <MenuLink to="/profile">
              <MenuText>PROFILE</MenuText>
            </MenuLink>
          </MobileTMenu>
          <MobileBox>
            <MobileVideoWrapper>
              <MobileVideo
                src="https://deuffzfddmyq6.cloudfront.net/videos/motel_1.mp4"
                // src={home_video}
                // poster={home_poster}
                // preload="none"
                playsInline
                autoPlay="autoplay"
                muted="muted"
                loop
              />
            </MobileVideoWrapper>
            <ToggleSocialWrapper>
              <ToggleSocialLink
                href="https://twitter.com/pinn_sj"
                target="_blank"
              >
                <ToggleSocialImg src={mobile_twitter} />
              </ToggleSocialLink>
              <ToggleSocialLink
                href="https://www.instagram.com/pinn_999/"
                target="_blank"
              >
                <ToggleSocialImg src={mobile_instargram} />
              </ToggleSocialLink>
              <ToggleSocialLink href="mailto:rlatjdwo0824@gmail.com">
                <ToggleSocialImg src={mobile_contact} />
              </ToggleSocialLink>
            </ToggleSocialWrapper>
            {/* <MenuWrapper>
              <MenuLink to="/profile">
                <MenuText>PROFILE</MenuText>
              </MenuLink>
            </MenuWrapper> */}
          </MobileBox>
        </MobileWrapper>
      </Mobile>
    </>
  );
};

export default Home;
