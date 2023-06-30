import { connect } from "react-redux"
import { incrementCounterAction, decrementCounterAction } from './Counter/counterAction';
import React from "react";
class MyComponent extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <>
            <input type="button" value={"Counter++"} onClick={() => this.props.increaseCounter(1)} />
            <input type="button" value={"Counter + 5"} onClick={() => this.props.increaseCounter(5)} />
            <input type="button" value={"Counter--"} onClick={() => this.props.decreaseCountrer()} />
            <br />
            Result is=={this.props.counter}
         </>
      )
   }
}
const mapStateToProps = (stat) => {
   return {
      counter: stat.counter
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      increaseCounter: (parameter) => {
         dispatch(incrementCounterAction(parameter))
      },
      decreaseCountrer: () => {
         dispatch(decrementCounterAction())
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);