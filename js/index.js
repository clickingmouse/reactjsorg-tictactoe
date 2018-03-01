var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
      //igonre click if someone won the game or if square is filled
      if (calculateWinner(squares) || squares[i]) {
        return;
      }

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
      var winner = calculateWinner(this.state.squares);
      var status = void 0;
      if (winner) {
        status = 'Winner:' + winner;
      } //if
      else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        } //else
      //  const status ='Next player:' + (this.state.xIsNext ? 'X':'O');
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

//helper function
function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}