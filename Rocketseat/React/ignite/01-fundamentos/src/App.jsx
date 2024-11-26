// JSX = JavaScript + XML (html)
import { Header } from "./components/Header";
import { Post, PostDois } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

//author: { avatar_url: "string", name: "string", role: "string" }
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabe subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: 'gabriel-alessandro-batista-godoi-b72a001a3/'},
    ],
    publishedAt: new Date ('2022-11-23 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabe subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: 'gabriel-alessandro-batista-godoi-b72a001a3/'},
    ],
    publishedAt: new Date ('2022-11-20 13:14:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => { 
            return (
              <Post 
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )    
          })}
        </main>
      </div>
    </div>
  );
}
