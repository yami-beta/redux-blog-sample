import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostForm } from "./PostForm";
import * as draftPostActions from "../actions/draftPost";
import * as postActions from "../actions/posts";

const mapStateToProp = ({ draftPost }) => {
  return { draftPost };
};

const mapDispatchToProp = dispatch => {
  return {
    draftPostActions: bindActionCreators(draftPostActions, dispatch),
    postActions: bindActionCreators(postActions, dispatch)
  };
};

export const PostFormContainer = connect(mapStateToProp, mapDispatchToProp)(
  PostForm
);
