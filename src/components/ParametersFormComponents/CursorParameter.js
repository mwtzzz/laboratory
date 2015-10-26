import React from 'react';
import {ExplorerStore} from '../../stores/ExplorerStore';

export let CursorParameter = React.createClass({
  getInitialState: function() {
    return {value: '', error: null};
  },
  onChange: function(event) {
    let value = event.target.value;
    let error;
    //if (!value) { // < TODO
    //  error = 'Cursor is invalid.';
    //  this.setState({value, error});
    //  return;
    //}

    this.setState({value, error});
    ExplorerStore.setParam(this.props.param, value);
  },
  render: function() {
    let {value, error} = this.state;
    return <div className="optionsTable__pair">
      <div className="optionsTable__pair__title">
        Cursor
      </div>
      <div className="optionsTable__pair__content">
        <input type="text" value={value} onChange={this.onChange}/>
        {error ? <p className="optionsTable__pair__content__alert">
          {error}
        </p> : ''}
      </div>
    </div>
  }
});