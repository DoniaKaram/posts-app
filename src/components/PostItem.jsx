import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostItem = ({ data, deleteRecord }) => {
  const navigate = useNavigate();

  const deleteHandler = (item) => {
    if (window.confirm(`Do you really want to delete record ${item.title}?`)) {
      deleteRecord(item.id);
    }
  };
  const records = data.map((el, index) => (
    <tr key={el.id}>
      <td>#{++index}</td>
      <td>{el.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success" onClick={()=>navigate(`post/${el.id}/edit`)} >Edit</Button>
          <Button variant="danger" onClick={() => deleteHandler(el)} >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default PostItem;
