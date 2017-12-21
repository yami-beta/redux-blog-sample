import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PostList } from "./PostList";

const mapStateToProp = ({ posts }) => {
  return { posts };
};

export const PostListContainer = connect(mapStateToProp)(PostList);
