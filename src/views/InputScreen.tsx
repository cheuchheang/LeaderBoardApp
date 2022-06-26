import React, {FC, useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View, Text, Image, Input, Button} from 'native-base';
import userListsId from '../../input/leaderboard.json';
import {useAppDispatch} from '../redux/hook';
import {searchUserId} from '../redux/userId/userIdSlice';

const InputScreen: FC = React.memo(({navigation}: any) => {
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
      console.log('Wrong User Id!!! Please input Id correctly');
      setErrorMsg(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Image
            source={require('./../../assets/monkey.png')}
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
            backgroundColor="#fff"
            onChangeText={text => {
              setUserId(text);
              setErrorMsg(false);
            }}
          />

          {errorMsg && (
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: 8,
              }}>
              Wrong User Id, please input Id correctly!
            </Text>
          )}

          <Button
            onPress={handleInput}
            size="lg"
            variant="solid"
            backgroundColor="#A4A6EA"
            style={styles.button}>
            Click
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#4A4AB6',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
    marginTop: 28,
  },
  containerInput: {
    flex: 2,
    alignItems: 'center',
  },
  inputTitle: {
    lineHeight: 32,
    marginTop: 28,
    marginBottom: 28,
    fontSize: 18,
    color: '#A4A6EA',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});

export default InputScreen;
