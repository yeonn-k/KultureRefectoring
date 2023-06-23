import React from 'react';
import My from '../../components/My/My.jsx';
import { M } from '../../components/My/My';
import { S } from './MyAuction';

const MyAuction = () => {
  return (
    <>
      <M.Title>내 입찰내역</M.Title>

      <M.Container>
        <My />
        <M.MainContainer>
          <M.SectionWrapper>
            <M.Text size="22px" weight="600">
              내역
            </M.Text>
            <S.HistoryBoxWrapper>
              <M.EmptyBox>아직 입찰내역이 없어요!</M.EmptyBox>
            </S.HistoryBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyAuction;
