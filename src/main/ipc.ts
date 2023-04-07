import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import { FetchAllDocumentsResponse } from "../shared/types/ipc";

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: "1", title: "Document title", content: "" },
        { id: "2", title: "Document title 2", content: "" },
        { id: "3", title: "Document title 3", content: "" },
        { id: "4", title: "Document title 4", content: "" },
      ],
    };
  }
);
