// JSX = JavaScript + XML (html)
import { Header } from "./components/Header";
import { Post, PostDois } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Godoi"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo modi consequuntur odit repudiandae itaque ea obcaecati aspernatur aliquid, labore debitis consectetur commodi assumenda eveniet at mollitia unde vel fuga."
          />
          <PostDois
            author="Leonardo Ribeiro"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo modi consequuntur odit repudiandae itaque ea obcaecati aspernatur aliquid, labore debitis consectetur commodi assumenda eveniet at mollitia unde vel fuga."
          />
        </main>
      </div>
    </div>
  );
}
