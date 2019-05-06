declare type $Override = any;
declare type $Unknown = any;

declare namespace global {
  function checkEventListeners(
    addEventListenerCalled: number,
    removeEventListenerCalled: number
  ): void;
}
