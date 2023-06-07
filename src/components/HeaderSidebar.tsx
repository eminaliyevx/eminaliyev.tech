import { Index, createSignal } from "solid-js";
import { Icon } from ".";
import me from "../assets/images/me.jpg";
import { LOVE, ROUTES } from "../shared";

const HeaderSidebar = ({ active }: { active: string }) => {
  const [open, setOpen] = createSignal(false);

  const toggle = () => {
    setOpen((o) => !o);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <header class="fixed left-0 top-0 flex h-16 w-full items-center bg-neutral-50 px-2 lg:ml-80 lg:h-20">
        <button
          type="button"
          class="flex items-center rounded-lg p-3 hover:bg-neutral-200 lg:hidden"
          onClick={() => toggle()}
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>

        <nav>
          <ul class="hidden items-center gap-2 font-medium lg:flex">
            <Index each={ROUTES}>
              {(item) => {
                const route = item();
                const isActive = route.href === active;

                return (
                  <li>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      href={route.href}
                      class="flex items-center gap-2 rounded-lg px-4 py-3 transition-all"
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
      </header>

      <aside
        aria-label="Sidebar"
        class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full transition-transform lg:translate-x-0"
        classList={{ "transform-none": open() }}
      >
        <div class="h-full overflow-y-auto bg-neutral-50 p-8">
          <div class="mb-4">
            <img
              src={me}
              alt="Emin Aliyev"
              class="rounded-full ring ring-blue-500 ring-offset-2"
            />
          </div>

          <div class="mb-4 flex flex-col">
            <span class="text-2xl font-semibold">Emin Aliyev</span>
            <span class="text-lg">Lorem ipsum</span>
          </div>

          <a
            href="#"
            class="mb-4 flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-blue-500 px-2 text-center text-sm font-semibold uppercase text-blue-500 transition-all hover:bg-blue-500 hover:text-neutral-50 active:scale-95"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-file-cv"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
              <path d="M13 11l1.5 6l1.5 -6"></path>
            </svg>

            <span>Download CV</span>
          </a>

          <div class="mb-4 flex flex-col">
            <span class="font-medium">🧑‍💻 Software Developer</span>
            <span class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              blanditiis.
            </span>
          </div>

          <div class="mb-4 flex flex-col gap-2">
            <span class="font-medium">❤️‍🔥 Love</span>

            <div class="grid grid-cols-4 gap-4">
              <Index each={LOVE}>
                {(item) => (
                  <div class="aspect-square h-12 overflow-hidden rounded-lg">
                    <Icon icon={item().icon} width="48" height="48" />
                  </div>
                )}
              </Index>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-medium">Contact</span>

            <a
              href="mailto:eminaliyevx@gmail.com"
              class="flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>

              <span>eminaliyevx@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/emin-aliyev-17b806235/"
              class="flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>

              <span>Emin Aliyev</span>
            </a>

            <a
              href="https://github.com/eminaliyevx"
              class="flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>

              <span>eminaliyevx</span>
            </a>
          </div>
        </div>
      </aside>

      {open() && (
        <div
          class="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
          onClick={() => toggle()}
        />
      )}
    </>
  );
};

export default HeaderSidebar;
