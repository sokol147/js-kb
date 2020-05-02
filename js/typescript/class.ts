class Animal {
  constructor(name: string) {
    this.name = name;
  }

  public name: string;
  public move(): number {
    console.log("Animal move");
    return this.calculateLength(10);
  }

  private calculateLength(number: number): number {
    return number;
  }

  static isAnimal(): boolean {
    return this instanceof Animal;
  }
}
