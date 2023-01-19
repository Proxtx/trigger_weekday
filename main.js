import fs from "fs/promises";

export class Trigger {
  constructor(config, folder) {
    this.config = config;
    this.folder = folder;
    (async () => {
      this.html = await fs.readFile(this.folder + "index.html", "utf8");
      this.handler = await fs.readFile(this.folder + "handler.js", "utf8");
    })();
  }

  getSelectionGui = async () => {
    return { html: this.html, handler: this.handler, data: {} };
  };

  triggers = async (data) => {
    if (new Date().getDay() == data.day) {
      return true;
    }
  };
}
