import React, {FC, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View, Text, Image, Input, Button} from 'native-base';
import {styles} from './style';
import {COLORS} from '../../constants/colors';
import userListsId from '../../../assets/input/leaderboard.json';
import {useAppDispatch} from '../../redux/hook';
import {searchUserId} from '../../redux/userId/userIdSlice';

const InputScreen: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const userLists = Object.values(userListsId);
  const isUser = userLists.find(item => item.uid === userId);

  const handleInput = () => {
    if (isUser) {
      navigation.navigate('Leaderboard');
      setErrorMsg(false);
      dispatch(searchUserId(userId));
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Image
            source={require('../../../assets/monkey.png')}
            size={44}
            alt="monkey"
          />
          <Text style={styles.title}>Leaderboard </Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.inputTitle}>To see your rank</Text>
          <Input
            placeholder="Input your id here"
            w="80%"
            backgroundColor={COLORS.white}
            onChangeText={text => {
              setUserId(text);
              setErrorMsg(false);
            }}
          />

          {errorMsg && (
            <Text style={styles.text}>
              Wrong User Id, please input Id correctly!
            </Text>
          )}

          <Button
            onPress={handleInput}
            size="lg"
            variant="solid"
            style={styles.button}>
            Click
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputScreen;
