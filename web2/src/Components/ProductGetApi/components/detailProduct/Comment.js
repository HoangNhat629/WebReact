import React, { useState, useContext, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import axios from "axios";
import { Cart2 } from "./../../GlobalState";

export default function Comment({ product }) {
  const state = useContext(Cart2);
  const [user] = state.userAPI.user;
  const [comments, setComments] = useState(product?.comments);
  const [comment, setComment] = useState("");
  const [isLogged] = state.userAPI.isLogged;
  const [products] = state.productsAPI.products;
  const commentsRef = useRef();
  const [token] = state.token;

  const styles = {
    commentsInnerContainer: {
      height: "200px",
      overflowY: "auto",
      marginRight: "30px",
    },
  };

  const CommentPro = async (value, id) => {
    try {
      const {data}= await axios.post(
        `api/products/${id}/commentProduct`,
        {value},
        {
          headers: { Authorization: token },
        }
      );
      products.map((product) => {
        if (product._id === data._id) {
          return data;
        }
        return product;
      });
      console.log(data);
      return data.comments;
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleComment = async () => {
    const newComments = await CommentPro(`${user}: ${comment}`, product._id);
    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div styles={styles.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">
          <strong>Comments</strong>
        </Typography>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            <strong>{c.split(": ")[0]}</strong>
            {c.split(":")[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </div>
      {isLogged ? (
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            <strong>Write a comment</strong>
          </Typography>
          <TextField
            fullWidth
            minRows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment.length}
            color="primary"
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}