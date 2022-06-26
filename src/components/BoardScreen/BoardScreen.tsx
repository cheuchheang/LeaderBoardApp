import React, {FC} from 'react';
import {Box, FlatList, HStack, Text, Heading, Stack} from 'native-base';
import {styles} from './style';
import userId from '../../../assets/input/leaderboard.json';
import {selectUserId} from '../../redux/userId/userIdSlice';
import {useAppSelector} from '../../redux/hook';

const BoardScreen: FC = () => {
  const currentUser = useAppSelector(selectUserId);
  const userLists = Object.values(userId);
  userLists.sort((a, b) => b.bananas - a.bananas);
  const indexOfCurrentuser = userLists.findIndex(item => {
    return item.uid === currentUser;
  });
  if (indexOfCurrentuser > 9) {
    userLists.splice(9, 0, userLists.splice(indexOfCurrentuser, 1)[0]);
  }
  const user = userLists.slice(0, 10);

  return (
    <Box style={styles.wrapper} safeArea={4}>
      <Stack direction="row" space="1">
        <Heading style={styles.header1} fontSize="xs">
          Name
        </Heading>
        <Heading style={styles.header2} fontSize="xs">
          Rank
        </Heading>
        <Heading style={styles.header3} fontSize="xs">
          Number of bananas
        </Heading>
        <Heading style={styles.header4} fontSize="xs">
          isCurrentUser?
        </Heading>
      </Stack>
      <FlatList
        keyExtractor={item => item.uid}
        data={user}
        renderItem={({item, index}) => (
          <HStack>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text2}>
              {index === 9 && indexOfCurrentuser > 9
                ? indexOfCurrentuser + 1
                : index + 1}
            </Text>
            <Text style={styles.text3}>{item.bananas}</Text>
            <Text style={styles.text4}>
              {index < 9 && index === indexOfCurrentuser
                ? 'yes'
                : index === 9 && index === indexOfCurrentuser
                ? 'yes'
                : index === 9 && indexOfCurrentuser > 9
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
