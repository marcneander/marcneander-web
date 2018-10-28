import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, media } from '../../utils/cssVariables';

const propTypes = {
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${colors.borderLight};
    flex: 1;
`;

const StyledJob = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    color: ${colors.dark};
    background: #fff;
    border-radius: 3px;
    margin: 18px 0px;

    &:last-child ${JobInfo} {
        border-bottom: none;
    }
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

const Job = React.memo(props => {
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
});

Job.propTypes = propTypes;

export default Job;
