import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top-color: #3498db;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingSpinner />
    </LoadingWrapper>
  );
};

export default Loading;
