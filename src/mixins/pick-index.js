export default (chance) => (arr) => chance.natural({max: arr.length - 1});
