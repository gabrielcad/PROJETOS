import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://deolhonofuturo.uninter.com/wp-content/uploads/2023/12/MicrosoftTeams-image-67.jpg"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Godoi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 11:13h" dateTime="13/11/2024">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉{" "}
          <a href="https://www.linkedin.com/in/gabriel-alessandro-batista-godoi-b72a001a3/">
            {" "}
            gabriel.godoi/frontend-development
          </a>
        </p>

        <p>
          <a href=""> #novoprojeto </a> <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário.."></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
