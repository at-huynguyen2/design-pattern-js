export default class SingleObject {
  private constructor() {}
  public static instance: SingleObject;
  public static objectText: string;

  public static getInstance() {
    return this.instance;
  }

  public static getObjectText() {
    // console.log(this.objectText);
    return this.objectText;
  }

  public static setObjectText(text: string) {
    this.objectText = text;
  }

  public static showMessage() {
    console.log('Single pattern hello!');
  }
}
