import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View, Text, Image, Input, Button} from 'native-base';
import React, {FC, useState} from 'react';
import userListsId from '../../input/leaderboard.json';
import {useDispatch} from 'react-redux';
import {searchUserId} from '../redux/userId/userIdSlice';

const InputScreen: FC = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const userLists = Object.values(userListsId);
  const isLogin = userLists.find(tiem => tiem.uid === userId);
  const handleSubmit = () => {
    if (isLogin) {
      navigation.navigate('Leaderboard');
      dispatch(searchUserId(userId));
      setErrorMsg(false);
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
            onPress={handleSubmit}
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
};

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
