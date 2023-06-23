import React, { useEffect, useState } from 'react';
import My from '../../components/My/My.jsx';
import { APIS } from '../../config.js';
import { M } from '../../components/My/My';
import { S } from './MyOrder';
import TicketModal from '../../components/TicketModal/TicketModal.jsx';

const MyOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    fetch(`${APIS.order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrderList(data);
      });
  }, []);

  //orderList Mock Data
  // useEffect(() => {
  //   fetch('data/orderList.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderList(data);
  //     });
  // }, []);

  return (
    <>
      <M.Title>내 이벤트</M.Title>

      <M.Container>
        <My />

        <M.MainContainer>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                내 티켓
              </M.Text>
            </M.SectionTitleWrapper>
            <S.TicketBoxWrapper>
              {orderList.length === 0 ? (
                <M.EmptyBox>유효한 티켓이 없어요!</M.EmptyBox>
              ) : (
                orderList.map(
                  ({ id, name, image_url, location, event_start_date }) => {
                    if (new Date(event_start_date) < new Date()) {
                      return null;
                    } else
                      return (
                        <S.TicketBox key={id}>
                          <S.TicketImage src={image_url} />
                          <S.TicketInfo>
                            <M.Text size="22px" weight="500">
                              {name}
                            </M.Text>
                            <M.Text size="16px" weight="400">
                              {event_start_date} ・ {location}
                            </M.Text>
                          </S.TicketInfo>
                          <M.CTABtn onClick={handleOpenModal}>
                            티켓 확인하기
                          </M.CTABtn>
                          {isModalOpen ? (
                            <TicketModal setIsModalOpen={setIsModalOpen} />
                          ) : null}
                        </S.TicketBox>
                      );
                  }
                )
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                지난 이벤트
              </M.Text>
            </M.SectionTitleWrapper>
            <S.TicketBoxWrapper>
              {orderList.length === 0 ? (
                <M.EmptyBox>지난 이벤트가 없어요! </M.EmptyBox>
              ) : (
                orderList.map(
                  ({ id, name, image_url, location, event_start_date }) => {
                    if (new Date(event_start_date) > new Date()) {
                      return null;
                    } else
                      return (
                        <S.TicketBox key={id}>
                          <S.TicketImage src={image_url} />
                          <S.TicketInfo>
                            <M.Text size="22px" weight="500">
                              {name}
                            </M.Text>
                            <M.Text size="16px" weight="400">
                              {event_start_date} ・ {location}
                            </M.Text>
                          </S.TicketInfo>
                          <M.CTABtnSecondary>리뷰 남기기</M.CTABtnSecondary>
                        </S.TicketBox>
                      );
                  }
                )
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyOrder;
