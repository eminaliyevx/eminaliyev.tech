import { Index } from "solid-js";
import { ROUTES } from "../shared";
import Icon from "./Icon";

const Footer = ({ active }: { active: string }) => {
  return (
    <footer class="fixed bottom-0 flex h-16 w-full items-center justify-center bg-neutral-50 lg:hidden">
      <nav class="flex-1">
        <ul class="flex flex-1 items-center font-medium">
          <Index each={ROUTES}>
            {(item) => {
              const route = item();
              const isActive = route.href === active;

              return (
                <li class="flex-1">
                  <a
                    aria-current={isActive ? "page" : undefined}
                    href={route.href}
                    class="flex flex-col items-center px-4 py-2 transition-all"
                    classList={{
                      "hover:bg-neutral-200": !isActive,
                      "text-white bg-blue-500 hover:bg-blue-500": isActive,
                    }}
                  >
                    <Icon icon={route.icon} />
                    <span>{route.name}</span>
                  </a>
                </li>
              );
            }}
          </Index>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
