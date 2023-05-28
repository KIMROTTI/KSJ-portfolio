import { Mobile, Pc } from "device";
import React from "react";
import { styled } from "styled-components";

import ae from "assets/icons/tech/ae.png";
import pc from "assets/icons/tech/pc.png";
import ps from "assets/icons/tech/ps.png";
import pt from "assets/icons/tech/pt.png";
import cs from "assets/icons/tech/cs.png";

const Wrapper = styled.div`
  /* margin-top: 64px; */
  padding-top: 84px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    /* padding-top: 84px; */
    padding-top: 0;
    margin-top: 100px;
  }
`;

const Container = styled.div`
  /* width: 1200px; */
  /* max-width: calc(100vw - 400px); */
  width: 100%;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

const TextBox = styled.div`
  width: auto;
  max-width: 100%;

  display: flex;
  flex-direction: column;
`;

const ProfileTitle = styled.span`
  font-family: "Alumni Sans";
  text-align: center;
`;

const ProfileText = styled.span`
  margin-top: 8px;
  text-align: center;
`;

const TechBox = styled.div`
  margin-top: 8px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 8px;
`;

const MainContentBox = styled.div`
  margin-top: 48px;
  width: 100%;
  height: auto;
  min-height: 320px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;
// const MainVideo = styled.video`
//   margin-top: 12px;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: relative;
//   z-index: 0;
// `;
const Mainiframe = styled.iframe`
  margin-top: 8px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 328px;
  min-height: 120px;
  /* width: 600px; */
  /* min-height: 100px; */
  /* object-fit: cover; */
  position: relative;
  z-index: 0;
`;
const Profile = () => {
  return (
    <div>
      <Pc>
        <Wrapper>
          <Container>
            <TextBox>
              <ProfileTitle>Education</ProfileTitle>
              <ProfileText>
                京都精華大学マンガ学部アニメーション学科
                <br />
                （2024年卒業予定）
              </ProfileText>
              <ProfileTitle style={{ marginTop: "48px" }}>Email</ProfileTitle>
              <ProfileText>rlatjdwo0824@gmail.com</ProfileText>

              <ProfileTitle style={{ marginTop: "48px" }}>
                Techninal Stack
              </ProfileTitle>

              <TechBox>
                <TechImage src={ae} />
                <TechImage src={ps} />
                <TechImage src={pt} />
                <TechImage src={pc} style={{ width: "52px", margin: "0" }} />
                <TechImage src={cs} />
              </TechBox>
            </TextBox>
            <MainContentBox>
              <TextBox>
                <ProfileTitle>Demo Sample</ProfileTitle>
              </TextBox>
              <Mainiframe
                height="1000"
                src="https://www.youtube.com/embed/PJwANDmB7Hc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen "
                allowfullscreen
              ></Mainiframe>
              {/* <MainVideo
                src="https://deuffzfddmyq6.cloudfront.net/artworks/main.mp4"
                poster="https://deuffzfddmyq6.cloudfront.net/artworks/lastcomp4.png"
                // autoPlay
                // loop
                preload="auto"
                controls={true}
              /> */}
            </MainContentBox>
          </Container>
        </Wrapper>
      </Pc>
      <Mobile>
        <Wrapper>
          <Container>
            <TextBox>
              <ProfileTitle>Education</ProfileTitle>
              <ProfileText>
                京都精華大学マンガ学部アニメーション学科
                <br />
                （2024年卒業予定）
              </ProfileText>
              <ProfileTitle style={{ marginTop: "48px" }}>Email</ProfileTitle>
              <ProfileText>rlatjdwo0824@gmail.com</ProfileText>

              <ProfileTitle style={{ marginTop: "48px" }}>
                Techninal Stack
              </ProfileTitle>

              <TechBox>
                <TechImage src={ae} />
                <TechImage src={ps} />
                <TechImage src={pt} />
                <TechImage src={pc} style={{ width: "52px", margin: "0" }} />
                <TechImage src={cs} />
              </TechBox>
            </TextBox>
            <MainContentBox>
              <TextBox>
                <ProfileTitle>Demo Sample</ProfileTitle>
              </TextBox>
              <Mainiframe
                src="https://www.youtube.com/embed/PJwANDmB7Hc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></Mainiframe>
              {/* <MainVideo
                src="https://deuffzfddmyq6.cloudfront.net/artworks/main.mp4"
                poster="https://deuffzfddmyq6.cloudfront.net/artworks/lastcomp4.png"
                // autoPlay
                // loop
                preload="auto"
                controls={true}
              /> */}
            </MainContentBox>
          </Container>
        </Wrapper>
      </Mobile>
    </div>
  );
};

export default Profile;
