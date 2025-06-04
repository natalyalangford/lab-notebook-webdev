const replaceItems = (input) => {
  return input
    .replace(/gold/gi, 'SHINY')
    .replace(/wander/gi, 'roam');
};

console.log(replaceItems('All that is gold does not glitter'));
// 'All that is SHINY does not glitter'

console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// 'Wisdom is better than silver or SHINY.'

console.log(replaceItems('Not all those who Wander are lost'));
// 'Not all those who roam are lost'