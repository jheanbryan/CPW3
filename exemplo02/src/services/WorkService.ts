import { Work } from "../models/Work";
import { works } from "../data/works.json";

export class WorkService {
  static getWorks(query: string): Work[] {
    let results: Work[] = [];
    const filter = query.toLowerCase().trim();

    if (filter) {
      results = works.filter(
        (w) =>
          w.title.toLowerCase().includes(filter) ||
          w.code.toLowerCase().includes(filter) ||
          w.authors.join("").toLowerCase().includes(filter)
      );
    }

    return results;
  }
}
