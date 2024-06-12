import styles from "./page.module.css";
import { Post, PostType } from "@/components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/TarCouto.png",
      name: "Tarcisio Couto",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2023-03-01 15:34')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/TarCouto.png",
      name: "Tarcisio Couto",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2023-03-02 15:34')
  },
];

export default function Home() {
  return (
    <div>
        <main>
          {posts.map(posts => {
            return (
            <Post
              key={posts.id}
              post={posts}
            />
            )
          })}
      
        </main>
    </div>
  );
}
