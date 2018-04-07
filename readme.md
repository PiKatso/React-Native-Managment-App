# Manager App

## Planning

1. User stories

* As a user, I'd like to login
* As a user, I'd like to see a list of my employees
* As a user, I'd like to create new employees
* As a user, I'd like to view each employee individually
* As a user, I'd like to edit employees information
* As a user, I'd like to remove/fire employees

## Technologies Used

* [Git](https://git-scm.com/)
* [React](https://reactjs.org/)
* [React-Native](http://www.reactnative.com/)
* [React-Redux](https://github.com/reactjs/react-redux)
* [Redux](https://redux.js.org/)
* [React-Native-Router-Flux](https://github.com/aksonov/react-native-router-flux)
* [Firebase](https://firebase.google.com/)
* [React-Firebase](https://rnfirebase.io/)
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

## Firebase Rules

```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## License

MIT License
