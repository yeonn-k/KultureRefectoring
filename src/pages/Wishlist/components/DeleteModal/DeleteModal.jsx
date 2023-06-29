import React from 'react';

import { S } from './DeleteModal';

const DeleteModal = ({
  handleDeleteAll,
  handleDeleteModal,
  handleDeleteChecked,
  setIsDelete,
  type,
}) => {
  const handleCancel = () => {
    handleDeleteModal();
  };

  const handleApplyChecked = () => {
    handleDeleteChecked();
    setIsDelete(prev => !prev);
  };

  const handleApplyAll = () => {
    handleDeleteAll();
    setIsDelete(prev => !prev);
  };

  return (
    <S.DeleteModal>
      <S.DeleteModalBox>
        <S.Delete>삭제하시겠습니까?</S.Delete>
        <S.Line />
        <S.Button>
          <S.Apply
            onClick={type === 'all' ? handleApplyAll : handleApplyChecked}
          >
            확인
          </S.Apply>

          <S.LineLower />
          <S.Cancel onClick={handleCancel}>취소</S.Cancel>
        </S.Button>
      </S.DeleteModalBox>
    </S.DeleteModal>
  );
};

export default DeleteModal;
