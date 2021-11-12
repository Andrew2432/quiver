import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AboutBriefCard from './AboutBriefCard';
import { AboutBriefProps, CreateDomainSkillsProps } from './AboutBriefProps';

function createDomainSkillsOld({ domainSkills }: CreateDomainSkillsProps) {
  const domainSkillElements = [];

  for (let i = 0; i < domainSkills.length; i++) {
    if (domainSkills[i + 1] != null) i++;

    domainSkillElements.push(
      createDomainSkillRow({ domainSkills: domainSkills.slice(i, i + 1) })
    );
  }

  return <>{domainSkillElements}</>;
}

function createDomainSkills({ domainSkills }: CreateDomainSkillsProps) {
  return React.Children.toArray(
    domainSkills.map((domainSkill, index) => (
      <AboutBriefCard domainSkill={domainSkill} key={index} />
    ))
  );
}

function createDomainSkillRow({ domainSkills }: CreateDomainSkillsProps) {
  return (
    <Row className={`text-center justify-content-center`}>
      {domainSkills[0] && <AboutBriefCard domainSkill={domainSkills[0]} />}
      {domainSkills[1] && <AboutBriefCard domainSkill={domainSkills[1]} />}
    </Row>
  );
}

function AboutBrief({ domainSkills }: AboutBriefProps) {
  return (
    <Container className={`my-5`}>
      <Row>
        <Col>
          <h2 className={`text-center`}>
            <strong>I am a</strong>
          </h2>
        </Col>
      </Row>
      <Row
        className={`d-flex align-items-stretch justify-content-center text-center`}
      >
        {domainSkills && createDomainSkills({ domainSkills })}
      </Row>
    </Container>
  );
}

export default AboutBrief;
