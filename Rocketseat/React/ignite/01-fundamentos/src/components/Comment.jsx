import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>

              <time title="11 de Maio às 11:13h" dateTime="13/11/2024">
                Cerca de uma 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Diego, parabéns!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
export function CommentTwo() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/v2/D4D03AQFO1wVDAP2HTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696277160918?e=1737590400&v=beta&t=-vZlUuw2A8TXRfMOQkIopIMh0H0O9d5TDX7g9Zf2eCY"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Ribeiro</strong>

              <time title="11 de Maio às 11:13h" dateTime="13/11/2024">
                Cerca de 30 minutos atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Samuel, isso ai!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
