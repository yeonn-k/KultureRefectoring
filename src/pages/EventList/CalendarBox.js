import styled from 'styled-components';

export const CalenderBox = styled.div`
  width: 400px;
  height: 270px;
  font-family: 'Pretendard';

  .react-calendar {
    width: 800px;
    max-width: 100%;
    padding: 10px 13px;
    border-radius: 10px;
    background-color: #494949;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 16px;
    color: #fff;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    border-bottom: 1px solid #8c8c8c;
  }

  .react-calendar__navigation__arrow {
    width: 28px;
    height: 28px;
    font-size: 20px;
    color: #fff;
    margin: 6px;
  }

  .react-calendar__tile {
    padding: 3px;
  }

  .react-calendar__month-view__days__day {
    abbr {
      display: inline-block;
      color: #fff;
      background-color: #555454;
      width: 44px;
      height: 27px;
      line-height: 27px;
    }
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #97fe67;

    abbr {
      color: #97fe67;
    }
  }

  .react-calendar__tile--active {
    background-color: #97fe67;
    color: #97fe67;
  }

  .react-calendar__tile--now {
    background: #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #fff;
  }
  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    abbr {
      color: #8c8c8c;
    }
  }

  .react-calendar__month-view__weekdays {
    margin-top: 2px;
    text-align: center;
    text-transform: lowercase;
  }
`;
