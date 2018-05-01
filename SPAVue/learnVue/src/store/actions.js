export const changeMsg = ({ commit }, payload) => {
  commit({
    type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
    msg: payload.msg
  });
};