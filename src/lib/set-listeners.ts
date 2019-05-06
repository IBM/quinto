import { debounce } from '../utils/debounce';
import { IQuintoProps, TargetElement } from '../Quinto';

function setListeners({ type }: { type: 'create' | 'destroy' }): void {
  const mounted = this.mounted as boolean;
  const props = this.props as IQuintoProps;
  const targetElement = this.targetElement as TargetElement;

  const EVENT_TYPE =
    type === 'create' ? 'addEventListener' : 'removeEventListener';

  const events = Object.keys(props).filter(prop =>
    EVENT_LISTENER_MAP.hasOwnProperty(prop)
  );

  events.forEach(event => {
    const LISTENER_EVENT = EVENT_LISTENER_MAP[event];

    switch (LISTENER_EVENT) {
      case 'click':
        document[EVENT_TYPE](LISTENER_EVENT, (e: MouseEvent) => {
          targetElement(e, event);
        });
        break;

      case 'mouseover':
        document[EVENT_TYPE](
          LISTENER_EVENT,
          debounce((e: MouseEvent) => {
            if (mounted) {
              targetElement(e, event);
            }
          }, props.debounce)
        );
        break;
    }
  });
}

const EVENT_LISTENER_MAP = {
  onClick: 'click',
  onMouseOver: 'mouseover'
};

export { setListeners };
