import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timeLineData } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
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
`;

const TimelineContainer = styled(Timeline)`
  width: 100%;
  max-width: 1000px;
`;

const Timelines = () => {
  return (
    <Container id="timeline">
      <Wrapper>
        <Title>Timeline</Title>
        <TimelineContainer>
          {timeLineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== timeLineData.length - 1 && (
                  <TimelineConnector style={{ background: '#854CE6' }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Wrapper>
    </Container>
  );
};

export default Timelines;
