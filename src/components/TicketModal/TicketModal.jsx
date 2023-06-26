import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { S } from './TicketModal';

const TicketModal = ({ setIsTicketModalOpen }) => {
  const handleCloseModal = () => {
    setIsTicketModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <S.Backdrop>
      <S.Modal>
        <S.ExitBtn onClick={handleCloseModal} />
        <QRCodeCanvas
          id="qrCode"
          value="www.google.com"
          size="150"
          bgColor="transparent"
          fgColor="#97FE67"
          level="H"
        />
        <S.Text>*이벤트 현장 매표소에서 본 QR코드를 제시해주세요.</S.Text>
      </S.Modal>
    </S.Backdrop>
  );
};

export default TicketModal;
