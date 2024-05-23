export class SleepUtil {
  static readonly sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
}
