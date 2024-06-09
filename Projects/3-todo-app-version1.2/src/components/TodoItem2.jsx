function TodoItem2(){

let todoName = 'Go to School';
let tododate = '04/10/2023';



  return <div className="container">
  <div className="row todo-row">
  <div className="col-6">
  {todoName}
  </div>
  <div className="col-4">
{tododate}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger todo-btn">Delete</button>
  </div>
</div>
</div>
}
 export default TodoItem2