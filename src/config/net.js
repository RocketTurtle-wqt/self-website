// const server1 = 'http://localhost:9000'
// const server2='http://localhost:9001'
const server = 'http://localhost:7002';
// const getArticalById = `${server1}/artical/getArticalById`;
// const getClassifiesAndArticals = `${server2}/classify/getClassifiesAndArticals`;
// const getClassifyNameById = `${server1}/classify/getClassifyNameById`;
const getArticalById = `${server}/artical/getArticalById`;
const getClassifiesAndArticals = `${server}/classify/getClassifiesAndArticals`;
const getClassifyNameById = `${server}/classify/getClassifyNameById`;

export {
  getArticalById,
  getClassifiesAndArticals,
  getClassifyNameById
}