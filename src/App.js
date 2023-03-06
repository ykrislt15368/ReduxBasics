
import './App.css';
import { connect } from 'react-redux';
import { InAction } from './actions';
import { DecAction } from './actions';

function App({local_variable,InAction,DecAction}) {
  return (
    <div>
     <center>
      <h2>
        {local_variable}
      </h2>
      <button onClick={()=>InAction(5)}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  );
}

const mapStatetoProps = state =>({
  local_variable : state
})

export default connect(mapStatetoProps,{InAction,DecAction})(App);
