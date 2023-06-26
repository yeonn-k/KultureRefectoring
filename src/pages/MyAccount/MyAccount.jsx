import React, { useEffect, useState } from 'react';
import My from '../../components/My/My.jsx';
import { M } from '../../components/My/My';
import { LuImagePlus } from 'react-icons/lu';
import { APIS } from '../../config';
import { S } from './MyAccount';

const MyAccount = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isModify, setIsModify] = useState(false);
  const [userName, setUserName] = useState('');
  const [imgFile, setImgFile] = useState({});

  const handleFileChange = e => {
    const profileImg = e.target.files[0];
    if (!userInfo || userInfo.length === 0) {
      return;
    }
    setImgFile(profileImg);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handleModify = e => {
    const formData = new FormData();

    const NameData = { nickname: userName };
    const data = JSON.stringify(NameData);

    formData.append('profileImageUrl', imgFile);
    formData.append('data', data);

    if (userName !== '') {
      fetch(`${APIS.users}`, {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Update UserInfo') {
            window.location.reload();
            alert('정보가 수정되었습니다!');
            setIsModify(false);
          }
        });
    }
  };

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
              <S.ProfileWrap>
                {isModify && (
                  <>
                    <label htmlFor="fileUpload">
                      <S.ModifyImg />
                      <input
                        id="fileUpload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                    </label>

                    <S.ChangeImg />
                  </>
                )}
                <S.ProfileImg src={profile_image_url} alt={nickname} />
              </S.ProfileWrap>
              <S.BasicInfo>
                {isModify ? (
                  <S.InputWrapper>
                    <S.ChangeName onChange={handleNameChange} type="text" />
                    <S.CloseInput onClick={() => setIsModify(false)} />
                  </S.InputWrapper>
                ) : (
                  <M.Text size="20px" weight="500">
                    {nickname}
                  </M.Text>
                )}

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
            {!isModify ? (
              <S.EditInfo onClick={() => setIsModify(true)}>
                수정하기
              </S.EditInfo>
            ) : (
              <S.EditInfo onClick={handleModify}>저장하기</S.EditInfo>
            )}
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
