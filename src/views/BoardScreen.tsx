import {StyleSheet} from 'react-native';
import {Box, FlatList, HStack, Text, Heading, Stack} from 'native-base';
import React, {FC} from 'react';
import userId from '../../input/leaderboard.json';
import {useSelector} from 'react-redux';

const BoardScreen: FC = () => {
  const currentUser = useSelector(state => state.userId.uid);

  const userLists = Object.values(userId);

  userLists.sort((a, b) => b.bananas - a.bananas);

  const indexOfCurrentuser = userLists.findIndex(item => {
    return item.uid === currentUser;
  });
  if (indexOfCurrentuser > 9) {
    userLists.splice(9, 0, userLists.splice(indexOfCurrentuser, 1)[0]);
  }

  const user = userLists.slice(0, 10);
  // console.log(user);

  return (
    <Box style={styles.wrapper} safeArea={4}>
      <Stack direction="row" space="1">
        <Heading style={{flex: 2, color: '#fff'}} fontSize="xs">
          Name
        </Heading>
        <Heading style={{flex: 1.3, color: '#fff'}} fontSize="xs">
          Rank
        </Heading>
        <Heading style={{flex: 1.3, color: '#fff'}} fontSize="xs">
          Number of bananas
        </Heading>
        <Heading style={{flex: 1.5, color: '#fff'}} fontSize="xs">
          isCurrentUser?
        </Heading>
      </Stack>
      <FlatList
        keyExtractor={item => item.uid}
        data={user}
        renderItem={({item, index}) => (
          <HStack>
            <Text style={{...styles.text, flex: 2}}>{item.name}</Text>
            <Text style={{...styles.text, flex: 1.3}}>
              {index == 9 && indexOfCurrentuser > 9
                ? indexOfCurrentuser + 1
                : index + 1}
            </Text>
            <Text style={{...styles.text, flex: 1.3}}>{item.bananas}</Text>
            <Text style={{...styles.text, flex: 1.5}}>
              {index < 9 && index == indexOfCurrentuser
                ? 'yes'
                : index == 9 && indexOfCurrentuser > 9
                ? 'yes'
                : 'no'}
            </Text>
          </HStack>
        )}
      />
    </Box>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#4A4AB6',
  },
  text: {
    fontSize: 12,
    color: '#fff',
  },
});
