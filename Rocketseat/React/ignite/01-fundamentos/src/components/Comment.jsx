import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gabrielcad.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Godoi</strong>

              <time title="11 de Maio às 11:13h" dateTime="13/11/2024">
                Cerca de uma 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash  size={24}/>
            </button>
          </header>

          <p>Muito bom Gabriel, parabéns!!!</p>
        </div>

        <button>
          <ThumbsUp /> Aplaudir
          <span>20</span>
        </button>
      </div>
    </div>
  );
}
