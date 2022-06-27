import React, {FC} from 'react';
import {Box, FlatList, HStack, Text, Heading, Stack} from 'native-base';
import {styles} from './style';
import userId from '../../../assets/input/leaderboard.json';
import {selectUserId} from '../../redux/userId/userIdSlice';
import {useAppSelector} from '../../redux/hook';
import {showRank, isCurrentUser} from '../../utils/utils';

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
        {['Name', 'Rank', 'Number of bananas', 'isCurrentUser?'].map(item => (
          <Heading style={styles.header} fontSize="xs">
            {item}
          </Heading>
        ))}
      </Stack>
      <FlatList
        keyExtractor={item => item.uid}
        data={user}
        renderItem={({item, index}) => (
          <HStack>
            {[
              item.name,
              showRank(index, indexOfCurrentuser),
              item.bananas,
              isCurrentUser(index, indexOfCurrentuser),
            ].map(items => (
              <Text key={items} style={styles.text}>
                {items}
              </Text>
            ))}
          </HStack>
        )}
      />
    </Box>
  );
};

export default BoardScreen;
