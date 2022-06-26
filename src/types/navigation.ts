import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamsList = {
  Input: undefined;
  Leaderboard: undefined;
};

export type Props = NativeStackScreenProps<StackParamsList, 'Input'>;
