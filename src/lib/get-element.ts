import NearestAncestor from './NearestAncestor';
import { IQuintoProps } from '../Quinto';

let nearestAncestor: NearestAncestor;

function getElement(element: HTMLElement) {
  if (nearestAncestor === undefined) {
    const props = this.props as IQuintoProps;

    nearestAncestor = new NearestAncestor({
      dataAttribute: props.dataAttribute,
      threshold: props.threshold
    });
  }

  return nearestAncestor.find(element);
}

export { getElement };
