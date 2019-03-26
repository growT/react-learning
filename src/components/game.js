import React, {Component} from 'react'
import './game.css'
// 入门 react 练习
// class Square extends Component{
//     render() {
//         return (
//             <button className="square" onClick={()=> this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
//函数定义简单的组件
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

//判断时候获胜
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}


class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null), //状态提升，
            xISNext: true,
        }
    }
    
    renderSquare(i) {
        return (
            <Square  value = {this.state.squares[i]} onClick={()=> this.handleClick(i)}/>
        );
    }
    handleClick(i) {
        let squares = this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return ;
        }
        squares[i] = this.state.xISNext ? 'x' : 'o';
        this.setState({
            xISNext: !this.state.xISNext,
            squares: squares});
    }
    render() {
        let winner = calculateWinner(this.state.squares);
        let status = '';
    
        if(winner) {
            status = 'Winner: ' + winner;
        }else {
            status = '下一个棋子是：' + (this.state.xISNext ? 'x' : 'o');
        }
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
    
}

export default Board;