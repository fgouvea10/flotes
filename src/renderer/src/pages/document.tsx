import { Editor } from '../components/Editor';
import { ToC } from '../components/ToC'

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-flotes-300 uppercase text-xs font-medium">Table of content</span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>SOLID</ToC.Link>
            <ToC.Link>Design Patterns</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        <Editor />
      </section>
    </main>
  );
}