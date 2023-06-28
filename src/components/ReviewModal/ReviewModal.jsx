import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import { S } from './ReviewModal';

const ReviewModal = ({ setIsReviewModalOpen, eventId, name }) => {
  const [reviewText, setReviewText] = useState('');
  const [imageFile, setImageFile] = useState({});
  const [fileName, setFileName] = useState('*업로드할 이미지를 선택해주세요.');

  const navigate = useNavigate();

  const handleText = e => {
    setReviewText(e.target.value);
  };

  const handleFile = e => {
    const reviewImage = e.target.files[0];
    setImageFile(reviewImage);
    const { name } = reviewImage;
    setFileName(name);
  };

  const handleReviewPost = e => {
    const formData = new FormData();

    const reviewData = { eventId: eventId, content: reviewText };
    const data = JSON.stringify(reviewData);

    formData.append('imageUrls', imageFile);
    formData.append('data', data);

    if (reviewText !== '') {
      fetch(`${APIS.review}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('accessToken'),
        },
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Create_Completed') {
            navigate('/reviews');
            alert('리뷰가 등록되었습니다!');
            return;
          }
        });
    } else return;
  };

  const handleCloseModal = () => {
    setIsReviewModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <S.Backdrop>
      <S.Modal encType="multipart/form-data">
        <S.ExitBtn onClick={handleCloseModal} />
        <S.Title>리뷰 남기기</S.Title>
        <S.EventName>{name}</S.EventName>
        <S.ReviewText
          type="text"
          placeholder="공백 포함 90자 이내로 작성해주세요."
          onChange={handleText}
          value={reviewText}
        />
        <S.FileInputLabel>
          <S.ImagePlus />
          <S.FileInput
            onChange={handleFile}
            id="fileInput"
            type="file"
            name="image"
            accept="image/*"
          />
        </S.FileInputLabel>
        <S.FileAdded>{fileName}</S.FileAdded>

        <S.SubmitBtn onClick={handleReviewPost}>리뷰 등록하기</S.SubmitBtn>
      </S.Modal>
    </S.Backdrop>
  );
};

export default ReviewModal;
