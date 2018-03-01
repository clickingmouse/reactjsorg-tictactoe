var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//class Square extends React.Component{
function Square(props) {
  // constructor(props){
  //    super(props);
  //    this.state={
  //      value:null
  //    };//this.state
  //  }//constructor
  //  render () {
  return (
    //    <button className="squarebtn" onClick={()=>this.setState( {value:'X'})}>
    // "props.onClick" not "...onClick()" to pass it, not call it immediately
    React.createElement(
      'button',
      { className: 'squarebtn', onClick: props.onClick },
      props.value
    )
  );
  //  }// constructor 
}

////////////////////////////////////////////

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    // better to set state of all children at parent to allow descendant propogation  
    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      squares: Array(9).fill(null),
      xIsnext: true
    };

    return _this;
  }

  _createClass(Board, [{
    key: 'handleClick',
    value: function handleClick(i) {
      var squares = this.state.squares.slice();
      // flip value
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({ squares: squares,
        xIsNext: !this.state.xIsNext

      });
    }
  }, {
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this2 = this;

      //this to allow passing value prop to square
      // parenthises added after return to avoid auto ; insertion
      //pass down a function to children when clicked
      return React.createElement(Square, {
        value: this.state.squares[i], onClick: function onClick() {
          return _this2.handleClick(i);
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      var status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'status' },
          status
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        React.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      ); //return
    } //render

  }]);

  return Board;
}(React.Component); //Board Class

var Game = function (_React$Component2) {
  _inherits(Game, _React$Component2);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'game' },
        React.createElement(
          'div',
          { className: 'game-board' },
          React.createElement(Board, null)
        ),
        React.createElement(
          'div',
          { className: 'game-info' },
          React.createElement('div', null),
          React.createElement('ol', null)
        )
      ); //end return
    }
  }]);

  return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));