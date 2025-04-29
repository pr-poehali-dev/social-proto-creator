
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-8">Страница не найдена</p>
        <p className="text-muted-foreground mb-8">
          Похоже, что страница, которую вы ищете, находится в другой галактике.
        </p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
