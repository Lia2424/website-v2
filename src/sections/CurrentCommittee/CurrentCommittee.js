import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import Layne from "../../res/images/s24execs/Layne.jpg";
import Dora from "../../res/images/s24execs/Dora.png";
import Sachi from "../../res/images/s24execs/Sachi.jpg";
import Damilola from "../../res/images/s24execs/Dami.png";
import Hanya from "../../res/images/s24execs/Hanya.jpg";
import Jemima from "../../res/images/s24execs/Jemima.jpg";
import Vanshika from "../../res/images/s24execs/Vanshika.jpg";
import Neelab from "../../res/images/s24execs/Neelab.jpg";
import Shriya from "../../res/images/s24execs/Shriya.png";
import Amya from "../../res/images/s24execs/Amya.jpg";

import claudia from "../../res/images/w25execs/claudia.jpg";
import molly from "../../res/images/w25execs/molly.jpg";
import amanda from "../../res/images/w25execs/amanda.png";
import anne from "../../res/images/w25execs/anne.jpeg";
import fatema from "../../res/images/w25execs/fatema.jpg";
import iris from "../../res/images/w25execs/iris.jpeg";
import madeline from "../../res/images/w25execs/madeline.jpg";
import neelab from "../../res/images/w25execs/neelab.jpg";
import ruby from "../../res/images/w25execs/ruby.jpg";
import samantha from "../../res/images/w25execs/samantha.jpg";
import shriya from "../../res/images/w25execs/shriya.jpg";
import yiyan from "../../res/images/w25execs/yiyan.jpeg";
import yuyeon from "../../res/images/w25execs/yuyeon.jpg";

import helena from "../../res/images/s25execs/helena.png";
import jemima from "../../res/images/s25execs/jemima.png";
import Iris from "../../res/images/s25execs/iris.png";
import lia from "../../res/images/s25execs/lia.png";
import Ruby from "../../res/images/s25execs/ruby.png";
import layne from "../../res/images/s25execs/layne.png";
import karen from "../../res/images/s25execs/karen.png";
import shreeya from "../../res/images/s25execs/shreeya.png";
import vijeta from "../../res/images/s25execs/vijeta.png";


import CurrentCommitteeCard from "../../components/CurrentCommitteeCard/CurrentCommitteeCard";
import { GridColumn } from "semantic-ui-react";
import {
  StyledCurrExecSectionWrapper,
  StyledExecWrapper,
  StyledGridColumn,
  StyledMobileTerm,
} from "./styles";

// Component for current executives section
class CurrentCommittee extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  renderCard = (picture, name, position) => {
    return (
      <CurrentCommitteeCard picture={picture} name={name} position={position} />
    );
  };

  renderComputerSize(executives) {
    return (
      <StyledExecWrapper columns={4}>
        {Object.entries(executives).map(([key, execInfo]) => (
          <GridColumn>
            {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
          </GridColumn>
        ))}
      </StyledExecWrapper>
    );
  }

  renderMobileSize(executives) {
    return (
      <div>
        <StyledMobileTerm>{currentExecStrings.term}</StyledMobileTerm>
        <StyledExecWrapper columns={2}>
          {Object.entries(executives).map(([key, execInfo]) => (
            <StyledGridColumn>
              {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
            </StyledGridColumn>
          ))}
        </StyledExecWrapper>
      </div>
    );
  }

  render() {
    const { screenWidth } = this.state;
    // Change current executives' images, names, and positions here
    const executives = {
      exec1: {
        pic: helena,
        name: "Helena Xu",
        position: "Co-chair",
      },
      exec2: {
        pic: jemima,
        name: "Jemima Vijayasenan",
        position: "Co-chair",
      },
      exec3: {
        pic: iris,
        name: "Iris Mo",
        position: "Secretary",
      },
      exec4: {
        pic: lia,
        name: "Lia Moradpour",
        position: "Systems Administrator",
      },
      exec5: {
        pic: layne,
        name: "Layne Lim Ah Tock",
        position: "Director of Outreach and Internal Affairs",
      },
      exec6: {
        pic: ruby,
        name: "Ruby Zhou",
        position: "Director of Publicity",
      },
      exec7: {
        pic: karen,
        name: "Karen Wang",
        position: "Director of Publicity",
      },
      exec8: {
        pic: shreeya,
        name: "Shreeya Santha",
        position: "Director of Finance",
      },
      exec9: {
        pic: vijeta,
        name: "Vijeta Lalwani",
        position: "First Year Representative",
      },
    };

    return (
      <StyledCurrExecSectionWrapper>
        <SectionTitleDescription
          title={currentExecStrings.title}
          description={screenWidth <= 425 ? "" : currentExecStrings.term}
        />
        {screenWidth <= 425
          ? this.renderMobileSize(executives)
          : this.renderComputerSize(executives)}
      </StyledCurrExecSectionWrapper>
    );
  }
}

export default CurrentCommittee;
