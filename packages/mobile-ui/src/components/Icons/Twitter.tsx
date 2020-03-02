import * as React from 'react';
import { Svg, SvgProps, Path } from 'react-native-svg';

const SvgTwitter = (props: SvgProps) => (
  <Svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
    <Path
      d="M903 212c43.766-27.585 77.064-71.023 93-123-40.94 25.662-85.838 44.051-134 54-37.968-43.113-92.603-70-153-70-116.07 0-210.073 99.24-210 222-.073 17 1.67 33.93 5 50-174.267-9.158-329.036-97.3-433-231-17.808 32.367-28.146 70.415-28 111-.146 76.853 36.939 144.704 93 185-34.123-1.615-66.52-11.697-95-28v3c.111 106.962 72.477 196.563 169 217-17.966 5.054-36.478 7.654-56 8-13.235-.346-26.458-1.677-39-4 26.486 87.738 104.08 151.911 196 154-71.904 59.103-162.482 94.487-261 94-16.822.487-33.591-.464-50-3 92.982 63.285 203.394 100 322 100 386.512 0 597.719-337.731 598-631-.281-9.27-.401-18.844-1-28 41.23-31.555 76.931-70.616 105-115-37.686 17.56-78.196 29.482-121 35z"
      fill={props.color}
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgTwitter;