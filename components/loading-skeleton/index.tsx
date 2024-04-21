import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonLoader = styled.div`
  width: 100%;
  height: 100%;
  animation: ${pulse} 1.5s infinite;
  border-radius: 8px;
`;

interface Props {
  width: string;
  height: string;
}

export default function LoadingSkeleton({ width, height }: Props) {
  return <SkeletonLoader style={{ width, height }} />;
}
