import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment, CommentTwo } from "./Comment";
import styles from "./Post.module.css";

//author: { avatar_url: "string", name: "string", role: "string" }
// publishedAt: Date
// content: string

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
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
        {/* <CommentTwo /> */}
      </div>
    </article>
  );
}

export function PostDois() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://media.licdn.com/dms/image/v2/D4D03AQHL4q0DSQRW8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671209166585?e=1737590400&v=beta&t=IxG8zevcsre92ICptdN_V5PAQ8oMZXDe51v8wHnP0ro"
          />
          <div className={styles.authorInfo}>
            <strong>Samuel Quilin</strong>
            <span>Market Research</span>
          </div>
        </div>

        <time title="11 de Maio às 11:13h" dateTime="13/11/2024">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Bom dia!!! 👋</p>

        <p>Acabei de realizar mais uma pesquisa 🚀</p>

        <p>
          👉{" "}
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC9_Q2oBXXD8opFPTv_Oa-toM-5IK_nUFO4&keywords=samuel%20quilin&origin=RICH_QUERY_SUGGESTION&position=0&searchId=6a323c85-a197-40c2-9a68-5cd71538da1e&sid=V%2C%2C&spellCorrectionEnabled=false">
            {" "}
            samuel.quilin/market-research
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
        {/* <Comment /> */}
        <CommentTwo />
      </div>
    </article>
  );
}
