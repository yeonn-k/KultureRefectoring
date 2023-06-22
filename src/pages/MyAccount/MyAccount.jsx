import React, { useEffect, useState } from 'react';
import My from '../../components/My/My.jsx';
import { APIS } from '../../config.js';
import { M } from '../../components/My/My';
import { S } from './MyAccount';

const MyAccount = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`${APIS.users}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]));
  }, []);

  //userInfo Mock Data
  // useEffect(() => {
  //   fetch('data/userInfo.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserInfo(data);
  //     });
  // }, []);

  if (Object.keys(userInfo).length === 0) return null;

  const { nickname, profile_image_url, email, age_range, gender } = userInfo;
  const age = age_range.split('~')[0];
  const krGender = GENDER[gender];

  return (
    <>
      <M.Title>내 정보</M.Title>

      <M.Container>
        <My />
        <M.MainContainer>
          <M.SectionWrapper>
            <M.Text size="22px" weight="600">
              내 프로필
            </M.Text>
            <S.ProfileBox>
              <S.ProfileImg src={profile_image_url} alt={nickname} />
              <S.BasicInfo>
                <M.Text size="20px" weight="500">
                  {nickname}
                </M.Text>
                <S.TextUnit>
                  <M.Text size="18px" weight="400">
                    {age}대
                  </M.Text>
                  {gender && (
                    <M.Text size="18px" weight="400">
                      / {krGender}
                    </M.Text>
                  )}
                </S.TextUnit>
              </S.BasicInfo>
              <M.Text size="18px" weight="400">
                {email}
              </M.Text>
            </S.ProfileBox>
            <S.EditInfo>수정하기</S.EditInfo>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyAccount;

const GENDER = {
  female: '여성',
  male: '남성',
  null: '',
};
