import Comments from "../screens/Comments";
import StickyBox from "react-sticky-box";

const SideBar = (comments) => {
  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <h4>
        <strong>Latest Comments</strong>{" "}
      </h4>
      {comments.comments.map((comment, i) => {
        return <Comments comment={comment} key={i} />;
      })}
    </StickyBox>
  );
};
export default SideBar;
