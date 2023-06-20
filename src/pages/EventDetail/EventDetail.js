import styled from 'styled-components';
import { GoogleMap } from '@react-google-maps/api';

const BidingBtn = styled.button`
  width: 320px;
  height: 60px;
  background: #97fe67;
  border-radius: 10px;
  font-size: 20px;
  margin: 30px 0;

  &:hover {
    opacity: 85%;
  }
`;
const InstantBtn = styled(BidingBtn)`
  border: 2px solid #97fe67;
  color: #97fe67;
  background: transparent;
`;

const DetailTitle = styled.strong`
  padding: 20px 0 0 0;
  font-size: 22px;
  font-weight: 700;
  min-width: 155px;
`;

export const S = {
  DetailTitle,
  DetailContainer: styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  `,

  DetailLeft: styled.div`
    position: sticky;
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 0;
  `,
  DetailWrap: styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 20px 0 100px 20px;
  `,

  DetailMainTitle: styled.div`
    margin-top: 20px;
    font-size: 27px;
    font-weight: 600;
  `,
  DetailImg: styled.img`
    width: 600px;
    height: 600px;
    object-fit: cover;
    margin: 20px 0 0 0;
  `,
  DetailRight: styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    overflow-y: scroll;
    height: auto;
  `,
  DetailContentsWrap: styled.li`
    display: flex;
    text-align: left;
    line-height: 22px;
  `,

  Detailcontents: styled.p`
    font-size: 16px;
    font-weight: 400px;
    width: 434px;
    padding: 20px 0;
  `,
  StartPriceWrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    border-bottom: 1px solid grey;
  `,
  StartPrice: styled.span`
    font-size: 16px;
  `,

  PriceWrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
  `,

  DetailToken: styled.img`
    width: 23px;
    height: 24px;
    margin-bottom: -5px;
  `,

  RealTimePrice: styled.span`
    font-size: 22px;
    font-weight: 700;
  `,

  DetailBtnWrap: styled.div`
    display: flex;
    gap: 0 10px;
  `,

  DetailChart: styled.div`
    width: 650px;
    height: 300px;
    margin: 0 auto;
  `,
  BidingBtn,
  InstantBtn,

  TooltipImg: styled.img`
    width: 15px;
    height: 15px;
    margin-bottom: -2px;
    margin-right: 4px;
  `,

  mapContainer: styled.div`
    margin: 20px auto 0 auto;
  `,

  googlemapsContainer: styled(GoogleMap)`
    width: 600px;
    height: 600px;
  `,

  WrapperCard: styled.div`
    display: flex;
    gap: 0 20px;
    flex-wrap: wrap;
    justify-content: center;
  `,

  ChartContainer: styled.div`
    margin: 50px 0;
  `,

  MapContainer: styled.div`
    margin: 70px 0 0;
  `,

  MapLocation: styled.span`
    margin-left: 10px;
    color: #97fe67;
    font-weight: 200;
  `,
};
