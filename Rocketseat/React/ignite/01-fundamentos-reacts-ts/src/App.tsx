// JSX = JavaScript + XML (html)
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

//author: { avatar_url: "string", name: "string", role: "string" }
// publishedAt: Date
// content: string

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
      avatarUrl: "https://github.com/diego3g.png",  
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      {
        type: 'paragraph',
        content:
          "Acabe subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: 'link', content: "gabriel-alessandro-batista-godoi-b72a001a3/" },
    ],
    publishedAt: new Date("2024-11-27 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabe subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "gabriel-alessandro-batista-godoi-b72a001a3" },
    ],
    publishedAt: new Date("2024-11-25 13:14:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
