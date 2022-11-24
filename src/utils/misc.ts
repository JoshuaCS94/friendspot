export const cn = (...classes: Array<string | undefined | boolean>) =>
  classes.filter(Boolean).join(' ')
