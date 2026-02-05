// shared/lib/utils/cn.ts

/**
 * Утилита для условного объединения классов
 * Легковесная альтернатива clsx/classnames
 * 
 * @example
 * cn('button', isActive && 'button--active', className)
 * // => 'button button--active my-class'
 */
export const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ')
}
