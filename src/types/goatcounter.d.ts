interface GoatCounterEvent {
  path?: string
  title?: string
  referrer?: string
  event?: boolean
}

interface GoatCounter {
  count: (vars?: GoatCounterEvent) => void
  no_onload?: boolean
  no_events?: boolean
  allow_local?: boolean
  endpoint?: string
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

export {}