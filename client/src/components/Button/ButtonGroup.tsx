import cn, { Argument } from 'classnames';
import { useId, Children } from 'react';

type ButtonGroupProps = {
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  className?: Argument;
  isEquisized?: boolean;
  isReversed?: boolean;
  isInlineFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLUListElement>;

export const ButtonGroup = ({
  align = 'left',
  children,
  className,
  isEquisized = false,
  isInlineFrom,
  isReversed = false,
  size = 'md',
  ...props
}: ButtonGroupProps) => {
  const id = useId();
  const _classes = cn(
    'fr-btns-group',
    {
      [`fr-btns-group--${size}`]: size !== 'md',
      [`fr-btns-group--${align}`]: align !== 'left',
      'fr-btns-group--inline': isInlineFrom === 'xs',
      [`fr-btns-group--inline-${isInlineFrom}`]: isInlineFrom && isInlineFrom !== 'xs',
      'fr-btns-group--inline-reverse': isReversed,
      'fr-btns-group--equisized': isEquisized,
    },
    className,
  );
  return (
    <ul className={_classes} {...props}>
      {Children.map(children, (child, index) => (
        <li key={`${id}-${index}`}>{child}</li>
      ))}
    </ul>
  );
};
