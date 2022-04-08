import React from "react";
import styles from "./Ribbon.module.css";

const Comments = ({ comment, user }) => {
  const port = "http://localhost:4000/";

  const avatar = comment.user.avatar
    ? port + comment.user.avatar
    : port + user.avatar;
  const login = comment.user.login ? comment.user.login : user.login;

  return (
    <div>
      <div className={styles.comments}>
        <span>
          <img width={16} src={comment} alt="" />
        </span>
        <div className={styles.userNickName}>
          <div className={styles.userImg}>
            <img width={24} height={24} src={avatar} alt="Аватарка юзера" />
          </div>
          <div className={styles.userLogin}>{login}:</div>
          <div className={styles.userComment}>{comment.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
