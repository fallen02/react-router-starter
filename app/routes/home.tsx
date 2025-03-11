import { Container } from "../components/Container";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Container className="flex h-dvh w-dvw justify-center items-center">
      <p className="text-5xl text-gray-900 dark:text-gray-300">Hello World</p>
    </Container>
  )
}
