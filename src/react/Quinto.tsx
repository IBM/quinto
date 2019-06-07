import * as React from 'react';
import { getElement } from '../lib/get-element';
import { IAncestor } from '../lib/NearestAncestor';
import { EventType, setListeners } from '../lib/set-listeners';
import { boundValue } from '../utils/bound-value';

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

  public targetElement = (e: MouseEvent, event: EventType) => {
    if (!this.mounted || this.props.paused) {
      return;
    }

    switch (event) {
      case 'onClick':
        if (this.props.onClick) {
          this.props.onClick(getElement.apply(this, [e.target as HTMLElement]));
        }
        break;
      case 'onMouseOver':
        if (this.props.onMouseOver) {
          this.props.onMouseOver(
            getElement.apply(this, [e.target as HTMLElement])
          );
        }
        break;
    }
  };
}

export default Quinto;
export { IQuintoProps, IQuintoState };
