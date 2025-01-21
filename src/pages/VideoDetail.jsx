// src/pages/VideoDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 20px;
  color: #fff;
  background-color: #141414;
  min-height: 80vh;
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
`;

const VideoTitle = styled.h1`
  margin-top: 20px;
  font-size: 24px;
`;

const VideoDescription = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #ccc;
`;

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://aluraflix-api-2qid.onrender.com/videos/${id}`);
        if (!response.ok) {
          throw new Error('Video no encontrado');
        }
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return <DetailContainer>Loading...</DetailContainer>;
  }

  return (
    <DetailContainer>
      <VideoPlayer controls>
        <source src={video.url} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </VideoPlayer>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoDescription>
        {/* Aquí puedes agregar una descripción o cualquier otro detalle del video */}
        Este es un video de ejemplo para mostrar cómo funciona la página de detalles.
      </VideoDescription>
    </DetailContainer>
  );
};

export default VideoDetail;
