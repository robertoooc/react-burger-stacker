import React,{Component} from "react"
import BurgerStack from "./BurgerStack"
export default class BurgerPane extends Component{
    render(){
        return(
            <>
                <BurgerStack 
                ingredients={this.props.ingredients}
                />
                <button onClick={this.props.clear}>Clear</button>
            </>
        )
    }
}