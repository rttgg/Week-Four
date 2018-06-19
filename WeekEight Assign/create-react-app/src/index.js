import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function listItems(props) {
    return (
        <li onClick={props.onClick}>
        {props.item}
        </li>
    );
}
class ShoppingList extends React.Component {
    constructor(){
        super();
        this.state = {
            list: ['books', 'pen', 'paper']
        };
    }
addItem (){
    var item = document.getElementById("listItem").value;
    document.getElementById("listItem").value =" ";
    var newList = this.state.list.slice();
    newList.push(item);
    this.setState({list:newList});
}


    onClick(index) {
        var newList = this.state.list.slice();
        newList.splice(index, 1);
        this.setState({list:newList});
    }
    render(){
        var listItems = [];
        this.state.list.forEach((item,i) => {
            listItems.push(<listItems item={item} onClick={() =>
            this.onClick(i)} />)
        });
        return (
            <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <input type = "text" id="listItem" placeholder = "Add item"/>
            <button type ="button" onClick={() => this.addItem()}>
            Add </button>
            <ul>
            {listItems}
            </ul>
            </div>
        );
    }
}







ReactDOM.render(
    <ShoppingList name = "Roman" />,document.getElementById('root'));
