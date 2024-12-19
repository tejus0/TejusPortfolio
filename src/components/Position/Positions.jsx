import React from 'react';
import styled from 'styled-components';
import { positionsOfResponsibility } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 16px; /* Added left and right padding for spacing */
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px; /* Adjust title size for smaller screens */
  }
`;

const PositionCard = styled.div`
  background: ${({ theme }) => theme.card_bg || '#1E1E2E'};
  border: 2px solid #854CE6;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 16px; /* Adjust padding for smaller screens */
  }
`;

const PositionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || '#FFFFFF'};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px; /* Adjust font size for smaller screens */
  }
`;

const PositionLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary || '#854CE6'};
  text-decoration: none;
  margin-left: 12px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary_hover || '#6A3DBC'};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const PositionDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || '#B3B3B3'};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const Positions = () => {
  return (
    <Container id="positions">
      <Wrapper>
        <Title>Positions of Responsibility</Title>
        {positionsOfResponsibility.map((position) => (
          <PositionCard key={position.id}>
            <PositionTitle>{position.title}</PositionTitle>
            <PositionLink href={position.link} target="_blank" rel="noopener noreferrer">
              Link
                </PositionLink>
            <PositionDescription>{position.description}</PositionDescription>
          </PositionCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Positions;
