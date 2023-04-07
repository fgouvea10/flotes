import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async () => {
  return [
    { id: 1, title: 'Document title' },
    { id: 2, title: 'Document title 2' },
    { id: 3, title: 'Document title 3' },
    { id: 4, title: 'Document title 4' },
  ]
})
