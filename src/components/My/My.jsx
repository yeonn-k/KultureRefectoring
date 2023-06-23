import React from 'react';
import { useNavigate } from 'react-router-dom';
import { M } from './My';

const My = () => {
  const navigate = useNavigate();

  return (
    <M.MenuContainer>
      {MENUS.map(({ id, title, path, icon }) => {
        return (
          <M.MenuButton
            key={id}
            backColor={props => props.theme.darkGrey}
            onClick={() => navigate(path)}
          >
            {icon}
            {title}
          </M.MenuButton>
        );
      })}
    </M.MenuContainer>
  );
};

export default My;

const MENUS = [
  { id: 1, title: '대시보드', path: '/dashboard', icon: <M.MenuDashboard /> },
  { id: 2, title: '내 정보', path: '/account', icon: <M.MenuAccount /> },
  { id: 3, title: '내 토큰', path: '/token', icon: <M.MenuToken /> },
  {
    id: 4,
    title: '내 입찰내역',
    path: '/auction',
    icon: <M.MenuAuction />,
  },
  {
    id: 5,
    title: '내 이벤트',
    path: '/order',
    icon: <M.MenuOrder />,
  },
];
