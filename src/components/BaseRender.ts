import { HTMLTemplateResult } from 'lit';

export abstract class BaseRender<T> {
  readonly data: T;
  protected constructor(data: T) {
    this.data = data;
  }
  abstract render(): HTMLTemplateResult;
}