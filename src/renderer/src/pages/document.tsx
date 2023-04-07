import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { Document as IPCDocument } from "../../../shared/types/ipc";
import { Editor, OnContentUpdatedParams } from "../components/Editor";
import { ToC } from "../components/ToC";

export function Document() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery(["document", id], async () => {
    const response = await window.api.fetchDocument({ id: id! });

    return response.data;
  });

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: OnContentUpdatedParams) => {
      await window.api.saveDocument({
        id: id!,
        title,
        content,
      });
    },
    {
      onSuccess: (_, { title, content }) => {
        queryClient.setQueryData<IPCDocument[]>(["documents"], (documents) => {
          return documents?.map((document) => {
            if (document.id === id) return { ...document, title: title };

            return document;
          });
        });
      },
    }
  );

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? "<p></p>"}`;
    }

    return "";
  }, [data]);

  const handleEditorContentUpdated = ({
    title,
    content,
  }: OnContentUpdatedParams) =>
    saveDocument({
      title,
      content,
    });

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-flotes-300 uppercase text-xs font-medium">
          Table of content
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>SOLID</ToC.Link>
            <ToC.Link>Design Patterns</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        {!isFetching && data && (
          <Editor
            content={initialContent}
            onContentUpdated={handleEditorContentUpdated}
          />
        )}
      </section>
    </main>
  );
}
