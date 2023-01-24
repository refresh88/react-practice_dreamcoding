array = {
  name: '엘리',
  mentors: [
    {
      name: '제이스',
    },
    {
      name: '이블린',
    },
  ],
};

const name = 'CH';

const test = { ...array, mentors: [...array.mentors, name] };

console.log(test);
console.log(array);
