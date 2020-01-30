import React from 'react';

// const Todos = (props) => (
//     <div className="Todos">
//         <label>{props.Todos.Content}</label>


//         {console.log(props.Todos.Content)}
//         <input type="checkbox"></input>
//         <input className="Todo" type="text" placeholder={props.Todos.Content}
//         onClick={(e)=>{e.target.value=props.Todos.Content}}
//         ></input>
//         <button className="Delete">Delete</button>
//     </div>
// )

// export default Todos;

class Todos extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.false)
        this.state = {
            Modify : false
        }
    }
    render() {
        if(this.state.Modify) {
            return (
                <div className="Todos">
                {console.log(this.props.Todos.Content)}
                <input type="checkbox"></input>
                <input className="Todo" type="text" placeholder={this.props.Todos.Content}
                onClick={(e)=>{e.target.value=this.props.Todos.Content}}
                // onChange={}
                ></input>
                <button className="Delete">Delete</button>
            </div>
            );
        } else

        return (
            <div className="Todos">
            <label className="TodoLavel"
            onClick={()=>this.setState({
                Modify : true
            })}
            >{this.props.Todos.Content}</label>
        </div>
        );
    }
}
 
export default Todos;