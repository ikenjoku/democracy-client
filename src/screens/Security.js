import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DeviceInfo from "react-native-device-info";

const ScrollWrapper = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30;
  padding-horizontal: 48;
`;

const Logo = styled.Image.attrs({
  source: require("../../assets/images/logo-text10X.png")
})``;

const Text = styled.Text`
  font-size: 18;
  padding-left: 12;
  padding-bottom: 5;
`;

const SecurityList = styled.View`
  padding-vertical: 44;
`;

const EntryWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16;
`;

const CheckIcon = styled(SimpleLineIcons).attrs({
  size: 31,
  color: "#000000"
})``;

const ProcessImageWrapper = styled.View`
  flex-direction: row;
`;

const ProcessImage = styled.Image``;

const Version = styled.Text`
  font-size: 15;
  color: #8f8e94;
  padding-top: 28;
  padding-bottom: 11;
`;

const SecurityEntry = ({ color, text }) => (
  <EntryWrapper>
    <CheckIcon name="check" color={color} />
    <Text>{text}</Text>
  </EntryWrapper>
);

SecurityEntry.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

class Security extends Component {
  constructor(props) {
    super(props);

    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {
          text: "Sicherheit".toUpperCase()
        }
      }
    });
  }

  render() {
    const version = `Version: ${DeviceInfo.getReadableVersion()
      .split(".")
      .slice(0, 3)
      .join(".")} (${DeviceInfo.getBuildNumber()})`;
    return (
      <ScrollWrapper>
        <Wrapper>
          <Logo />
          <SecurityList>
            <SecurityEntry
              text="SSL-Verschlüsselung"
              color="rgb(113, 211, 172)"
            />
            <SecurityEntry
              text="Anonymes Abstimmen"
              color="rgb(113, 211, 172)"
            />
            <SecurityEntry
              text="Nutzerverifikation: Einladung"
              color="rgb(234, 168, 68)"
            />
            <SecurityEntry text="SMS-Verifikation" color="rgb(143,142,148)" />
            <SecurityEntry
              text="Beweisbare Auszählung"
              color="rgb(143,142,148)"
            />
          </SecurityList>
          <ProcessImageWrapper>
            <ProcessImage
              source={require("../../assets/images/sescurity-process.png")}
            />
          </ProcessImageWrapper>
          <Version style={{ paddingTop: 36 }}>{version}</Version>
        </Wrapper>
      </ScrollWrapper>
    );
  }
}

Security.propTypes = {};

export default Security;
