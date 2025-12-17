import { useState, useCallback, useMemo } from 'react';

export interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  getButtonProps: (props?: Record<string, unknown>) => Record<string, unknown>;
  getDisclosureProps: (props?: Record<string, unknown>) => Record<string, unknown>;
}

export const useDisclosure = (props: UseDisclosureProps = {}): UseDisclosureReturn => {
  const {
    defaultIsOpen = false,
    isOpen: controlledIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    onToggle: onToggleProp,
  } = props;

  const [internalIsOpen, setInternalIsOpen] = useState(defaultIsOpen);
  
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(true);
    }
    onOpenProp?.();
  }, [isControlled, onOpenProp]);

  const onClose = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  const onToggle = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen((prev) => !prev);
    }
    onToggleProp?.();
  }, [isControlled, onToggleProp]);

  const getButtonProps = useCallback(
    (props: Record<string, unknown> = {}) => ({
      ...props,
      'aria-expanded': isOpen,
      onClick: (e: React.MouseEvent) => {
        (props.onClick as ((e: React.MouseEvent) => void) | undefined)?.(e);
        onToggle();
      },
    }),
    [isOpen, onToggle]
  );

  const getDisclosureProps = useCallback(
    (props: Record<string, unknown> = {}) => ({
      ...props,
      hidden: !isOpen,
    }),
    [isOpen]
  );

  return useMemo(
    () => ({
      isOpen,
      onOpen,
      onClose,
      onToggle,
      getButtonProps,
      getDisclosureProps,
    }),
    [isOpen, onOpen, onClose, onToggle, getButtonProps, getDisclosureProps]
  );
};
