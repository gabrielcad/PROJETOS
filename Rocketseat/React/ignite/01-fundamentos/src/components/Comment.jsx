import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/maykbrito.png" alt="" />
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
