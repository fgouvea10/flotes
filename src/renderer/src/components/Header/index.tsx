import clsx from "clsx";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Code, CaretDoubleRight, TrashSimple } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as Breadcrumbs from "./Breadcrumbs";
import { Document } from "../../../../shared/types/ipc";

interface Props {
  isSidebarOpen: boolean;
}

export function Header({ isSidebarOpen }: Props) {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const isMacOS = process.platform === "darwin";

  const { mutateAsync: deleteDocument, isLoading: isDeletingDocument } =
    useMutation(
      async () => {
        await window.api.deleteDocument({ id: id! });
      },
      {
        onSuccess: () => {
          queryClient.setQueryData<Document[]>(["documents"], (documents) => {
            return documents?.filter((document) => document.id !== id);
          });

          navigate("/");
        },
      }
    );

  return (
    <div
      id="header"
      className={clsx(
        "border-b h-14 border-flotes-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag",
        {
          "pl-24": !isSidebarOpen && isMacOS,
          "w-screen": !isSidebarOpen,
          "w-[calc(100vw-240px)]": isSidebarOpen,
        }
      )}
    >
      <Collapsible.Trigger
        className={clsx("h-5 w-5 text-flotes-200 hover:text-flotes-50", {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </Collapsible.Trigger>

      {id && (
        <>
          <Breadcrumbs.Root>
            <Breadcrumbs.Item>
              <Code weight="bold" className="h-4 w-4 text-pink-500" />
              Estrutura técnica
            </Breadcrumbs.Item>
            <Breadcrumbs.Separator />
            <Breadcrumbs.HiddenItems />
            <Breadcrumbs.Separator />
            <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
            <Breadcrumbs.Separator />
            <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
          </Breadcrumbs.Root>

          <div className="inline-flex region-no-drag">
            <button
              onClick={() => deleteDocument()}
              disabled={isDeletingDocument}
              className="inline-flex items-center gap-1 text-flotes-100 text-sm hover:text-flotes-50 disabled:opacity-60"
            >
              <TrashSimple className="h-4 w-4" />
              Apagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
