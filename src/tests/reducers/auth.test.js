import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should login', () => {
  const action = {
    type: 'LOGIN',
    uid: "123321321lkl321dsadaw"
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: "123321321dawdwa" }, action);
  expect(state).toEqual({});
});