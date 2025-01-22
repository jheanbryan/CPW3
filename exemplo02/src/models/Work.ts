export class Work {
  title: string = "";
  code: string = "";
  authors: string[] = [];

  constructor(obj: Partial<Work>) {
    Object.assign(this, obj);
  }
}
