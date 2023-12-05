
import {People} from "./People";

class DataBase {
  static items: People[] = [];

  static add(item: People): void {
    DataBase.items.push(item);
  }

  static list(): People[] {
    return DataBase.items;
  }
}

export {DataBase};
