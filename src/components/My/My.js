import styled from 'styled-components';
import { MdGridView, MdAccountCircle } from 'react-icons/md';
import { LuDatabase, LuTicket } from 'react-icons/lu';
import { Mixin } from '../../styles/mixin';

export const M = {
  Text: styled.div`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.theme[props.col]};
    width: ${props => props.width};
  `,

  FlexEnd: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  CTABtn: styled.div`
    ${Mixin.flexCenter};
    padding: 5px 20px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.kultureGreen};
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  `,

  LearnMoreBtn: styled.img`
    width: 25px;
    &:hover {
      cursor: pointer;
      filter: brightness(170%);
    }
  `,

  Title: styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin: 50px 30px;
  `,

  Container: styled.div`
    display: flex;
  `,

  MenuButton: styled.div`
    display: flex;
    padding-left: 20px;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => props.backColor};
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.white};
    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.lightGrey};
    }
  `,

  MenuContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 30px;
  `,

  MenuDashboard: styled(MdGridView)`
    margin-right: 15px;
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  MenuAccount: styled(MdAccountCircle)`
    margin-right: 15px;
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  MenuToken: styled(LuDatabase)`
    margin-right: 15px;
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  MenuAuction: styled(LuTicket)`
    margin-right: 15px;
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin: 0 auto;
  `,

  SectionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  `,

  SectionTitleWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
  `,

  EmptyBox: styled.div`
    ${Mixin.flexCenter};
    padding: 30px;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.lightGrey};
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
  `,
};
