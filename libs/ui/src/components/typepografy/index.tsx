import { FC } from 'react';
import { TYPEPOGRAFY_CLASSES, BASIC_TYPEPOGRAFY_CLASSES } from './constants';
import clsx from 'clsx';
import { TypepogragyProps } from './types';

export const Typography: Record<string, FC<TypepogragyProps>> = {
  H1: ({ children, className }) => (
    <h1
      className={clsx(
        TYPEPOGRAFY_CLASSES.H1,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </h1>
  ),
  H2: ({ children, className }) => (
    <h2
      className={clsx(
        TYPEPOGRAFY_CLASSES.H2,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </h2>
  ),
  H3: ({ children, className }) => (
    <h3
      className={clsx(
        TYPEPOGRAFY_CLASSES.H3,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </h3>
  ),
  H4: ({ children, className }) => (
    <h4 className={clsx(TYPEPOGRAFY_CLASSES.H4)}>{children}</h4>
  ),
  H5: ({ children, className }) => (
    <h5
      className={clsx(
        TYPEPOGRAFY_CLASSES.H5,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </h5>
  ),
  H6: ({ children, className }) => (
    <h6
      className={clsx(
        TYPEPOGRAFY_CLASSES.H6,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </h6>
  ),
  Paragraph: ({ children, className }) => (
    <p
      className={clsx(
        TYPEPOGRAFY_CLASSES.Paragraph,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </p>
  ),
  Small: ({ children, className }) => (
    <small
      className={clsx(
        TYPEPOGRAFY_CLASSES.Small,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </small>
  ),
  Caption: ({ children, className }) => (
    <span
      className={clsx(
        TYPEPOGRAFY_CLASSES.Caption,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </span>
  ),
  Link: ({ href, children, className }) => (
    <a
      href={href}
      className={clsx(
        TYPEPOGRAFY_CLASSES.Link,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </a>
  ),
  Strong: ({ children, className }) => (
    <strong
      className={clsx(
        TYPEPOGRAFY_CLASSES.Strong,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </strong>
  ),
  Emphasis: ({ children, className }) => (
    <em
      className={clsx(
        TYPEPOGRAFY_CLASSES.Emphasis,
        BASIC_TYPEPOGRAFY_CLASSES,
        className
      )}
    >
      {children}
    </em>
  ),
};
