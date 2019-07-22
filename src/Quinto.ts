import { getElement } from './lib/get-element';
import { IAncestor } from './lib/NearestAncestor';
import { EventType, setListeners } from './lib/set-listeners';
import { boundValue } from './utils/bound-value';

interface IQuintoProps {
  dataAttribute: string;
  debounce: number;
  onClick?: (data: IAncestor) => void;
  onMouseOver?: (data: IAncestor) => void;
  paused: boolean;
  threshold: number;
}

const quintoDefaultProps = {
  dataAttribute: 'q',
  debounce: 500,
  paused: false,
  threshold: 20
};

class Quinto {
  public readonly props: IQuintoProps = quintoDefaultProps;

  constructor(props: {
    dataAttribute?: string;
    debounce?: number;
    onClick?: (data: IAncestor) => void;
    onMouseOver?: (data: IAncestor) => void;
    paused?: boolean;
    threshold?: number;
  }) {
    if (props.dataAttribute) {
      this.props.dataAttribute = props.dataAttribute;
    }

    if (props.debounce) {
      this.props.debounce = boundValue(props.debounce, 2000);
    }

    if (props.onClick) {
      this.props.onClick = props.onClick;
    }

    if (props.onMouseOver) {
      this.props.onMouseOver = props.onMouseOver;
    }

    if (props.paused !== undefined) {
      this.props.paused = props.paused;
    }

    if (props.threshold) {
      this.props.threshold = props.threshold;
    }

    setListeners.apply(this, [{ type: 'create' }]);
  }

  public pause = (isPaused: boolean) => {
    this.props.paused = isPaused;
  };

  public destroy = () => {
    setListeners.apply(this, [{ type: 'destroy' }]);
  };

  public targetElement = (e: MouseEvent, event: EventType) => {
    if (this.props.paused) {
      return;
    }

    const ancestor = getElement.apply(this, [e.target as HTMLElement]);

    switch (event) {
      case 'onClick':
        if (this.props.onClick) {
          this.props.onClick(ancestor);
        }
        break;
      case 'onMouseOver':
        if (this.props.onMouseOver) {
          this.props.onMouseOver(ancestor);
        }
        break;
    }
  };
}

export default Quinto;
