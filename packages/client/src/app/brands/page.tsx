import { RefreshWrapper } from "./RefreshWrapper";
import { TodoList } from "./TodoList";
import { Suspense } from "react";

const Home: React.FC = () => {
  return (
    <main>
      <h1>Hello from NextJS!</h1>
      <RefreshWrapper>
        <Suspense fallback={<p>Loading todos</p>}>
          {/* @ts-expect-error Async Server Component */}
          <TodoList />
        </Suspense>
      </RefreshWrapper>
    </main>
  );
};

export default Home;
