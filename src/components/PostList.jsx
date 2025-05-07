import { Button, Table} from "react-bootstrap";
import PostItem from "./PostItem";
import { memo } from "react";
import { Link } from "react-router-dom";
function handleLogout(){
  localStorage.clear();

}
const PostList = ({ data ,deleteRecord}) => {
  console.log(data);
 
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
       <PostItem data={data} deleteRecord={deleteRecord} />
      </tbody>
    </Table>
    <Link className="btn btn-danger" to={'/login'} onClick={handleLogout}>LOGOUT</Link>
    </>
  );
};

export default memo(PostList);
