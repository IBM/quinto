import Quinto from '../Quinto';
import QuintoReact from '../react/Quinto';
import NearestAncestor from './NearestAncestor';

let nearestAncestor: NearestAncestor;

function getElement(this: QuintoReact | Quinto, element: HTMLElement) {
  if (nearestAncestor === undefined) {
    nearestAncestor = new NearestAncestor({
      dataAttribute: this.props.dataAttribute,
      threshold: this.props.threshold
    });
  }

  return nearestAncestor.find(element);
}

export { getElement };
