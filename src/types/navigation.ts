import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamsList = {
  InputScreen: undefined;
  Leaderboard: undefined;
};

export type Props = NativeStackScreenProps<StackParamsList, 'InputScreen'>;
