This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Setup Babel for server
    1. See: https://babeljs.io/docs/en/babel-node
    1. Add `.babelrc`
        1. [reference config](https://github.com/Domiii/dbdi/blob/master/.babelrc)
    1. Install 
        1. missing plugins: `$ npm i --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-proposal-function-bind @babel/plugin-syntax-export-default-from`
        1. `npm i --save-dev @babel/core @babel/node @babel/cli`
        1. `npm i -s core-js@3`
        1. More dev tools: `npm i -D nodemon`
    1. Add scripts to `package.json`:
        1. Start server (without debugger): `nodemon --exec npx babel-node server`
        1. Debug + wait initially (without nodemon): `npx babel-node --inspect-brk server`
        1. Debug + nodemon: `nodemon --exec npx babel-node --inspect server`

4/17
* React setState pitfalls: State does not get updated immediately
    this.setState({a:1});
    console.assert(this.state.a === 1, 'this will fail!');
    this.setState({b:2});

    this.setState({c: this.state.a + this.state.b}); // Problem: a and b have not been modified right away, so value will not be as expected, c won't be 3.
    this.setState(prevState => ({ c: prevState.a + prevState.b })) // Fixed: Pass a function that will be called with the updated state, and before the next render.
* added CoinInfoModal
    * Found bug: modal backdrop shows up in white because of interference with materialize's css. (fixed by removing materialize's css)