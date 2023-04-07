import { ipcMain } from "electron";

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: 1, title: 'Document title' },
    { id: 2, title: 'Document title 2' },
    { id: 3, title: 'Document title 3' },
    { id: 4, title: 'Document title 4' },
  ]
})
