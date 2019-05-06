import * as React from 'react';
import { boundValue } from './utils/bound-value';
import { getElement } from './lib/get-element';
import { setListeners } from './lib/set-listeners';
import { IAncestor } from './lib/NearestAncestor';

interface IQuintoProps {
  dataAttribute: string;
  debounce: number;
  onClick?: (data: IAncestor) => void;
  onMouseOver?: (data: IAncestor) => void;
  paused: boolean;
  threshold: number;
}

interface IQuintoState {
  debounce: number;
}

type TargetElement = (e: MouseEvent, event: string) => void;

class Quinto extends React.Component<IQuintoProps, IQuintoState> {
  public static defaultProps = {
    dataAttribute: 'q',
    debounce: 500,
    paused: false,
    threshold: 20
  };

  public readonly state: IQuintoState = {
    debounce: boundValue(this.props.debounce, 2000)
  };

  private mounted: boolean = false;

  public componentDidMount() {
    this.mounted = true;
    setListeners.apply(this, [{ type: 'create' }]);
  }

  public componentWillUnmount() {
    this.mounted = false;
    setListeners.apply(this, [{ type: 'destroy' }]);
  }

  public render() {
    return null;
  }

  private targetElement: TargetElement = (e, event) => {
    if (this.props.paused) {
      return;
    }

    this.props[event](getElement.apply(this, [e.target as HTMLElement]));
  };
}

export default Quinto;
export { IQuintoProps, IQuintoState, TargetElement };
