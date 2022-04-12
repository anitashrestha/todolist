# TODO LIST APP

## Install Redux in your application

- npm install redux react-redux
- create store.js inside src where we will write our logic for setting up our Redux store.
- in index.js import provider

## Creating Redux actions

- create action.js inside src
- Action cratores is that they abstract away all the actual code for the actions
-

## mapStateToProps

- state arguments passed to mapStateToProps is an object that represents the entire Redux state
- job of mapStateToProps is to take the state object and return another object conataining the pieces of the state that component needs access to.
-

## Redux persist

- this helps to show data even after refreshing the browser
- install package
- npm install redux-persist

automergelevel2 tells Redux Persist how to reconcile the initial and stored states of our application

## Redux best practices

- when we connect components to the redux store, file should export the connected and unconnected versions of a component
- keep Redux actions and async operations out of your reducers
-

## Sideeffect libraries

- Redux Thunk - easy
- Redux Saga is popular
