interface INearestAncestorProps {
  dataAttribute: string;
  threshold: number;
}

interface IAncestor {
  data: null | object;
  depth: number;
  element: HTMLElement;
}

class NearestAncestor {
  private readonly dataAttribute: string;
  private readonly threshold: number;
  private cache: { [id: string]: IAncestor } = {};

  constructor(props: INearestAncestorProps) {
    this.dataAttribute = props.dataAttribute;
    this.threshold = props.threshold;
  }

  public find(element: HTMLElement): IAncestor {
    const result = {
      data: this.checkCache(element),
      depth: 0,
      element
    };

    if (result.data != null) {
      return result;
    }

    const currentDataAttribute = this.getDataAttribute(element);

    if (currentDataAttribute) {
      result.data = JSON.parse(currentDataAttribute);

      this.updateCache(element, result);

      return result;
    } else {
      result.element = element.parentElement as HTMLElement;
      let parentElementDataAttribute = this.getDataAttribute(result.element);

      result.depth = 1;

      try {
        while (
          result.element != null &&
          parentElementDataAttribute === undefined &&
          result.depth < this.threshold
        ) {
          result.element = result.element.parentElement as HTMLElement;
          parentElementDataAttribute = this.getDataAttribute(result.element);
          result.depth += 1;
        }

        if (parentElementDataAttribute !== undefined) {
          result.data = JSON.parse(parentElementDataAttribute);
          this.updateCache(element, result);
        }
      } catch (error) {
        // tslint:disable: no-empty
        // TODO: attach error to returned result
      }

      return result;
    }
  }

  private getDataAttribute = (element: HTMLElement) => {
    if (!element) {
      return undefined;
    }

    return element.dataset[this.dataAttribute];
  };

  private updateCache = (element: HTMLElement, result: IAncestor) => {
    const { id } = element;

    if (!id) {
      return;
    }

    if (document.querySelectorAll(`#${id}`).length > 1) {
      return;
    }

    this.cache[id] = result;
  };

  private checkCache = (element: HTMLElement) => {
    const { id } = element;

    if (!!id && this.cache.hasOwnProperty(id)) {
      return this.cache[id];
    } else {
      return null;
    }
  };
}

export default NearestAncestor;
export { INearestAncestorProps, IAncestor };
