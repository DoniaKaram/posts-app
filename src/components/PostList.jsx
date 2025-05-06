import { Table} from "react-bootstrap";
import PostItem from "./PostItem";
import { memo } from "react";

const PostList = ({ data ,deleteRecord}) => {
  console.log(data);
 
  return (
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
  );
};

export default memo(PostList);
