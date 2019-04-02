import React from "react"
import Layout from "../components/layout/Layout"

import "../fontawesome/css/all.min.css"

import { Container, Row, Jumbotron, Col, Button } from "react-bootstrap"

export default () => (
  <Layout>
    <Jumbotron fluid style={jumbo_styles}>
      <Row style={{ marginTop: "3.5rem" }}>
        <Col>
          <h1>tldr; About me.</h1>
          <span>
            <p>
              So you are looking for a professional, communicative & punctual
              software engineer who likes to keep productive.
            </p>
          </span>
        </Col>
      </Row>
      <Row style={{ marginTop: "3.5rem" }}>
        <Col>
          <Button variant="primary">English CV download</Button>
        </Col>
        <Col>
          <Button variant="primary">Chinese CV download</Button>
        </Col>
      </Row>
    </Jumbotron>
    <hr />
    <Container fluid>
      <Row>
        <Col>
          <h3>Summary</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>I love Coffee. I mean, more than people normaly like coffee</h5>
          <p>
            I'm an Engineer, a husband, and a father. I currently live on two
            opposite ends of the world, standing with one foot in my home
            country of Sweden, and the other in my wife's country, China. I have
            high ambitions for my self, I want to build things that are new,
            refreshing, and makes a difference for others. I don't see my path
            with technology as merely a career path.
            <br />
            <br />
            My most advanced degree is MSc. Electrical Engineering: Design of
            Processors and Integrated Systems and what many people might not
            realize is that it’s actually a software degree, with VHDL as the
            main language. The difference is that VHDL code becomes transistor
            structures on silicon making up the chips, compared to other higher
            level code becomes instructions for the chips themselves. I took
            extra courses in JAVA, and scaled software development practices and
            did a minor in Software Engineering. I am convinced knowing the
            whole chain from electron to screen render makes me write better
            code.
            <br />
            <br />
            Right out of university I was soon becoming a father, and I got an
            offer to take up the role as an electronics engineer at a stable
            local company. Needless to say, it was a great start, the work was
            rewarding and I was learning brand new things everyday. 3.5 years
            down the line I increasingly saw myself doing the same tasks as the
            senior engineers, some with a decade more experience than me, and I
            realized that there were not more room for me to grow. I missed the
            software engineering side to things, and on my free time to fill the
            gap I had at work I was studying how to code. I spent many hours at
            teamtreehouse.com, freecodecamp, codecademy, Udemy. I realized that
            I want to change direction into what I was working towards on my own
            time.
            <br />
            <br />
            Fast forward: This year in January my son turned 3 years old, I quit
            my job and moved back to China with my wife to her home city, we
            were missing the fast paced life, and I had to change path before
            getting to comfortable in something I’m not passionate about.
            <br />
            <br />
            <strong>My goals for this year: </strong>
            Break into software engineering and finish my Bachelor in mandarin
            chinese.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Social:</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <i class="fab fa-github hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Github</span>
        </Col>
        <Col>
          <i class="fab fa-linkedin hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>LinkedIn</span>
        </Col>
        <Col>
          <i class="fab fa-twitter hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Twitter</span>
        </Col>
        <Col>
          <i class="fab fa-instagram hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Instagram</span>
        </Col>
        <Col>
          <i class="fab fa-hackerrank hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Hackerrank</span>
        </Col>
        <Col>
          <i class="fab fa-stack-overflow hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Stackoverflow</span>
        </Col>
        <Col>
          <i class="fab fa-angellist hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>Angellist</span>
        </Col>
      </Row>
      <hr />
      {/* This is the beginning of the career section*/}
      <Row>
        <Col>
          <h3>Past work experience</h3>
        </Col>
      </Row>
      {/* Axis Electronics Position*/}
      <Row>
        <Col>
          <h5>Electronics Engineer</h5>
        </Col>
      </Row>
      <Row>
        <Col>Axis Communications AB, Lund Sweden</Col>
        <Col>2015.09 - 2019.01</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            I designed analog & digital electronic circuits making up the
            computer that runs inside Network/IP-Surveillance Cameras
          </p>
          <strong>Connection to Software Development?</strong>
          <p>
            Scale: During a project my designs were to be produced in several
            thousands units monthly, if not properly tested for large scale
            production it would have cost the company vast amounts of money in
            several different ways. This means I know the importance of testing,
            maintainability, and how things tend to go when things go big.
          </p>
        </Col>
      </Row>
      <hr />
      {/* Wayne SW intern Position*/}
      <Row>
        <Col>
          <h5>Software Engineer Intern</h5>
        </Col>
      </Row>
      <Row>
        <Col>Wayne, A GE Energy business, Malmoe Sweden</Col>
        <Col>2014.06 - 2014.09</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Developed automated production HW tests using LabView, Machine
            Vision and Machine Learning.
            <br />
            Executed prototype plans for automated sensor calibration rig, Bench
            and equipment sourcing
          </p>
        </Col>
      </Row>
      <hr />
      {/* Electrolux SW+HW intern Position*/}
      <Row>
        <Col>
          <h5>Software & Hardware Engineer Intern</h5>
        </Col>
      </Row>
      <Row>
        <Col>Electrolux, Shanghai China</Col>
        <Col>2012.06 - 2012.08</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Product prototype development; Embedded Linux programming & Hardware
            implementation.
            <br />
            UX/UI Study: Design of Android application touch interfaces on small
            home appliances.
          </p>
        </Col>
      </Row>
      <hr />
      {/* This is the beginning of the education section*/}
      <Row>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      {/* Masters Degreee*/}
      <Row>
        <Col>
          <h5>MSc. Electrical Engineering</h5>
        </Col>
      </Row>
      <Row>
        <Col>Lund University, Lund Sweden</Col>
        <Col>2009.08 - 2015.08</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            <strong>Masters' specialization:</strong>
            <br /> Design of processors and integrated systems. That means VHDL
            coding, asynchronous data manipulation and complex cascading
            transistor structures on silicon.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <strong>Exchange@Zhejiang University:</strong>
        </Col>
        <Col>2011.06 - 2012.01</Col>
      </Row>
      <Row>
        <Col>
          <p>
            I was fortunate enough to spend half year at Zhejiang University as
            part of my Engineering program.
          </p>
        </Col>
      </Row>
      <hr />
      {/* Chinese Studies*/}
      <Row>
        <Col>
          <h5>Mandarin Chinese</h5>
        </Col>
      </Row>
      <Row>
        <Col>Zhejiang University, Hangzhou China</Col>
        <Col>2012.08 - 2013.08</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Inside of my engineering degree I had already taken one semester at
            Zhejiang University as part of a special program. After that I
            decided to go back and study Mandarin full time for a year. I'm
            married to the reason why and we have a 3 year old son today.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
  marginTop: "3rem",
  height: "22rem",
}

const icon_style = {
  fontSize: "5.5rem",
}

const font_size = {
  fontSize: "1.2rem",
}
