import NearestAncestor from './NearestAncestor';
import Quinto from '..';

let nearestAncestor: NearestAncestor;

function getElement(this: Quinto, element: HTMLElement) {
  if (nearestAncestor === undefined) {
    nearestAncestor = new NearestAncestor({
      dataAttribute: this.props.dataAttribute,
      threshold: this.props.threshold
    });
  }

  return nearestAncestor.find(element);
}

export { getElement };
