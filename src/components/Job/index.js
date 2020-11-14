import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/cssVariables';

const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const StyledJob = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    border-radius: 3px;
    margin-bottom: 30px;
`;

const JobLogo = styled.img`
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
    width: 66px;
    height: 66px;

    ${media.sm`
        margin-right: 24px;
    `};
`;

const JobTitle = styled.h3`
    margin: 0;
    line-height: 22px;
    font-size: 16px;
`;

const JobLocation = styled.h4`
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
`;

const JobDuration = styled.h4`
    margin: 0;
    font-size: 12px;
    line-height: 22px;
    font-weight: 400;
`;

const JobDescription = styled.div`
    font-size: 14px;

    ul {
        padding-left: 16px;
    }
`;

const Job = (props) => {
    const { logo, alt, title, location, duration, children } = props;

    return (
        <StyledJob>
            <JobLogo src={logo} alt={alt} />
            <JobInfo>
                <JobTitle>{title}</JobTitle>
                <JobLocation>{location}</JobLocation>
                <JobDuration>{duration}</JobDuration>
                <JobDescription>{children}</JobDescription>
            </JobInfo>
        </StyledJob>
    );
};

export default Job;
