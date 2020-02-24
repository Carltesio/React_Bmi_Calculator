import React from "react";

$(function() {
  $('#select-method').change(function() {
      localStorage.setItem('todoData', this.value);
  });
  if(localStorage.getItem('todoData')){
      $('#edit').val(localStorage.getItem('todoData'));
  }
});

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <select id="select-method" 
        onChange={props.onChangeHandler}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs"
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cm"
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;