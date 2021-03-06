import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background: #222;
  padding: ${Constants.statusBarHeight + 20}px 20px 0px;
`;

export const Button = styled(RectButton)`
  background: #7159c1;
  padding: 15px 20px;
  border-radius: 4px;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const CalendarButton = styled.TouchableOpacity`
  border-color: #999;
  border-width: 2px;
  border-radius: 4px;
  margin-top: 20px;
  padding: 12px 20px;
`;

export const CalendarButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;