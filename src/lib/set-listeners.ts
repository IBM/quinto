import Quinto from '../Quinto';
import { debounce } from '../utils/debounce';

function setListeners(
  this: Quinto,
  { type }: { type: 'create' | 'destroy' }
): void {
  const props = this.props;
  const targetElement = this.targetElement;

  const EVENT_TYPE =
    type === 'create' ? 'addEventListener' : 'removeEventListener';

  const events = Object.keys(props).filter(prop =>
    EVENT_LISTENER_MAP.hasOwnProperty(prop)
  ) as EventType[];

  events.forEach(event => {
    const LISTENER_EVENT = EVENT_LISTENER_MAP[event];

    switch (LISTENER_EVENT) {
      case 'click':
        document[EVENT_TYPE](LISTENER_EVENT, e => {
          targetElement(e as MouseEvent, event);
        });
        break;

      case 'mouseover':
        document[EVENT_TYPE](
          LISTENER_EVENT,
          debounce(e => {
            targetElement(e, event);
          }, props.debounce)
        );
        break;
    }
  });
}

type EventType = 'onClick' | 'onMouseOver';

const EVENT_LISTENER_MAP = {
  onClick: 'click',
  onMouseOver: 'mouseover'
};

export { setListeners, EventType };
