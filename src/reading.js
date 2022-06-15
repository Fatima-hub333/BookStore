function userLoggedIn() {
  return {
    type: 'USER_LOGGED_IN',
    username: 'dave'
  };
}

redux so - called "actions" don't actually do anything. actions are just objects , plain & simple and inert. 

if you want an action to do something, that code needs to live inside a function. That function 'thunk' is a bundle of work to be document.

function getUser() {
  return function () {
    return axios.get('/current_user');
  };
}

middlewares look at avery action that passes through the FileSystem, & if its a function it calls that function.
redux will pass two arguments to thunk functions: dispatch - so that they can dispatch some new actions if they need to, & getState: so they can access the current state.

function logOutUser() {
  return function (dispatch, getState) {
    return axios.post('/logout').then(function () {
      dispatch(userLoggedOut());
    })
  }
}