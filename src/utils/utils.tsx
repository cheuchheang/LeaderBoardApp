export function showRank(index: number, indexOfCurrentuser: number) {
  return index === 9 && indexOfCurrentuser > 9
    ? indexOfCurrentuser + 1
    : index + 1;
}

export function isCurrentUser(index: number, indexOfCurrentuser: number) {
  return index < 9 && index === indexOfCurrentuser
    ? 'yes'
    : index === 9 && index === indexOfCurrentuser
    ? 'yes'
    : index === 9 && indexOfCurrentuser > 9
    ? 'yes'
    : 'no';
}
