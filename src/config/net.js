const server = 'http://192.168.3.28:7002';
// const server = 'http://172.19.187.203:7002';
const getArticalById = `${server}/artical/getArticalById`;
const getClassifiesAndArticals = `${server}/classify/getClassifiesAndArticals`;
const getClassifyNameById = `${server}/classify/getClassifyNameById`;

export {
  server,
  getArticalById,
  getClassifiesAndArticals,
  getClassifyNameById
}