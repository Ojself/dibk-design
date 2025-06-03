import { ButtonHTMLAttributes } from 'react';
import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';
import { JSX as JSX_2 } from 'react';
import { ReactNode } from 'react';

export declare const Accordion: ({ title, color, expanded: expandedProp, onToggleExpand, buttonProps, noMargin, initialized: initializedProp, children, ...rest }: AccordionProps) => JSX.Element;

declare type AccordionColor = 'default' | 'secondary';

declare interface AccordionProps {
    title?: string;
    color?: AccordionColor;
    expanded?: boolean;
    onToggleExpand?: () => void;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    noMargin?: boolean;
    initialized?: boolean;
    children?: ReactNode;
    [key: string]: any;
}

declare type ArrowDirection = 'none' | 'left' | 'right';

export declare const Button: ({ content, color, size, arrow, disabled, inputType, defaultChecked, hasErrors, noHover, rounded, noMargin, href, children, ...rest }: ButtonProps) => JSX.Element;

declare type ButtonColor = 'primary' | 'secondary';

declare interface ButtonProps extends Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    content?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    arrow?: ArrowDirection;
    inputType?: InputType;
    name?: string;
    defaultChecked?: boolean;
    required?: boolean;
    hasErrors?: boolean;
    'aria-describedby'?: string;
    noHover?: boolean;
    rounded?: boolean;
    href?: string;
    noMargin?: boolean;
    children?: default_2.ReactNode;
    [key: string]: any;
}

declare type ButtonSize = 'small' | 'regular';

export declare const CheckBoxIcon: ({ size, checked, disabled, showBox, hasErrors, checkmarkCharacter, }: {
    size?: string | undefined;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    showBox?: boolean | undefined;
    hasErrors?: boolean | undefined;
    checkmarkCharacter?: string | undefined;
}) => JSX.Element;

export declare const CheckBoxInput: ({ checked, disabled, required, requiredGroup, id, name, onChange, contentOnly, hasErrors, checkmarkCharacter, tabIndex, children, "aria-controls": ariaControls, "aria-describedby": ariaDescribedBy, }: CheckBoxInputProps) => JSX.Element;

declare interface CheckBoxInputProps {
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    requiredGroup?: boolean;
    id: string;
    name?: string;
    onChange?: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    contentOnly?: boolean;
    hasErrors?: boolean;
    checkmarkCharacter?: string;
    'aria-controls'?: string;
    'aria-describedby'?: string;
    tabIndex?: number;
    children?: default_2.ReactNode;
}

export declare const CheckBoxList: ({ legend, legendSize, required, compact, children, }: CheckBoxListProps) => JSX.Element;

export declare const CheckBoxListItem: ({ checked, disabled, required, requiredGroup, id, name, onChange, contentOnly, compact, hasErrors, checkmarkCharacter, "aria-controls": ariaControls, "aria-describedby": ariaDescribedBy, children, }: CheckBoxListItemProps) => JSX.Element;

declare interface CheckBoxListItemProps {
    inputValue?: string;
    value?: string | number;
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    requiredGroup?: boolean;
    name?: string;
    id: string;
    onChange?: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    contentOnly?: boolean;
    compact?: boolean;
    checkmarkCharacter?: string;
    hasErrors?: boolean;
    'aria-controls'?: string;
    'aria-describedby'?: string;
    children?: default_2.ReactNode;
}

declare interface CheckBoxListProps {
    legend?: string;
    legendSize?: 1 | 2 | 3 | 4 | 5;
    required?: boolean;
    compact?: boolean;
    children?: ReactNode;
}

export declare const Container: ({ maxWidth, children }: ContainerProps) => JSX.Element;

declare interface ContainerProps {
    maxWidth?: string;
    children?: default_2.ReactNode;
}

export declare const ContentBox: React.FC<ContentBoxProps>;

declare interface ContentBoxProps {
    title?: string;
    titleSize?: 'regular' | 'large';
    content?: string;
    children?: React.ReactNode;
    color?: 'default' | 'secondary';
    href?: string | null;
}

export declare const DescriptionDetails: ({ compact, titleWidth, children, }: DescriptionDetailsProps) => JSX.Element;

declare interface DescriptionDetailsProps {
    compact?: boolean;
    titleWidth?: string;
    children?: default_2.ReactNode;
}

export declare const DescriptionList: ({ compact, titleWidth, children, }: DescriptionListProps) => default_2.DetailedReactHTMLElement<{
    className: string;
    style: default_2.CSSProperties;
}, HTMLElement>;

declare interface DescriptionListProps {
    compact?: boolean;
    titleWidth?: string;
    children?: ReactNode;
}

export declare const DescriptionTerm: ({ compact, titleWidth, children, }: DescriptionTermProps) => JSX.Element;

declare interface DescriptionTermProps {
    compact?: boolean;
    titleWidth?: string;
    children?: default_2.ReactNode;
}

export declare const Dialog: ({ maxWidth, noPadding, closeButton, onClickOutside, modal, attachTo, hidden, children, }: DialogProps) => JSX.Element;

declare interface DialogProps {
    maxWidth?: string;
    noPadding?: boolean;
    closeButton?: boolean;
    onClickOutside: () => void;
    modal?: boolean;
    attachTo?: 'left' | 'right' | 'top' | 'bottom' | string;
    hidden?: boolean;
    children?: React.ReactNode;
}

export declare const DragAndDropFileInput: ({ id, name, onSelectChange, onDragAndDropChange, label, contentOnly, buttonColor, buttonContent, buttonContentWhenSelectedFile, selectedFileName, defaultContent, hasErrors, errorMessage, required, children, "data-transaction-name": transactionName, }: DragAndDropFileInputProps) => JSX.Element;

declare interface DragAndDropFileInputProps {
    id: string;
    name?: string;
    onSelectChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    onDragAndDropChange: (files: FileList) => void;
    label?: string | (string | JSX_2.Element)[];
    contentOnly?: boolean;
    buttonColor?: ButtonColor;
    buttonContent?: string;
    buttonContentWhenSelectedFile?: string;
    selectedFileName?: string;
    defaultContent?: string;
    hasErrors?: boolean;
    errorMessage?: string | (string | JSX_2.Element)[];
    required?: boolean;
    children?: default_2.ReactNode;
    'data-transaction-name'?: string;
}

export declare const ErrorBox: React.FC<ErrorBoxProps>;

declare interface ErrorBoxProps {
    type?: 'warning' | 'error';
    fullScreen?: boolean;
    children?: React.ReactNode;
}

export declare const ErrorMessage: ({ id, content }: ErrorMessageProps) => JSX.Element | null;

declare interface ErrorMessageProps {
    id?: string;
    content?: default_2.ReactNode;
}

export declare const Footer: ({ children }: FooterProps) => JSX.Element;

declare interface FooterProps {
    children?: React.ReactNode;
}

export declare const Header: ({ id, content, size, big, label, htmlTag, htmlFor, children, }: HeaderProps) => JSX.Element;

declare interface HeaderProps {
    id?: string;
    content?: string;
    size?: 1 | 2 | 3 | 4 | 5;
    big?: boolean;
    label?: string;
    htmlTag?: keyof JSX_2.IntrinsicElements;
    htmlFor?: string;
    children?: default_2.ReactNode;
}

export declare const InfoBox: ({ children }: InfoBoxProps) => JSX.Element;

declare interface InfoBoxProps {
    children?: default_2.ReactNode;
}

export declare const InputField: ({ id, onChange, onBlur, name, type, disabled, required, readOnly, width, value, defaultValue, elementKey, label, contentOnly, buttonColor, buttonContent, selectedFileName, placeholder, defaultContent, min, max, role, "aria-describedby": ariaDescribedBy, "aria-autocomplete": ariaAutocomplete, hasErrors, errorMessage, noMargin, }: InputFieldProps) => JSX.Element;

declare interface InputFieldProps {
    id: string;
    onChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: default_2.FocusEvent<HTMLInputElement>) => void;
    name?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    width?: string;
    value?: any;
    defaultValue?: any;
    elementKey?: string;
    label?: default_2.ReactNode;
    contentOnly?: boolean;
    buttonColor?: 'primary' | 'secondary';
    buttonContent?: string;
    selectedFileName?: string;
    placeholder?: string;
    defaultContent?: string;
    min?: string;
    max?: string;
    role?: string;
    'aria-describedby'?: string;
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    hasErrors?: boolean;
    errorMessage?: default_2.ReactNode;
    noMargin?: boolean;
}

declare type InputType = 'button' | 'radio';

export declare const Label: ({ inline, normalCursor, htmlTag, children, id, ...rest }: LabelProps) => default_2.DOMElement<{
    className: string;
    id: string | undefined;
    form?: string | undefined;
    htmlFor?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
    autoFocus?: boolean | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: default_2.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: default_2.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    popover?: "" | "auto" | "manual" | undefined;
    popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
    popoverTarget?: string | undefined;
    inert?: boolean | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    exportparts?: string | undefined;
    part?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onCopyCapture?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onCut?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onCutCapture?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onPaste?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onPasteCapture?: default_2.ClipboardEventHandler<HTMLLabelElement> | undefined;
    onCompositionEnd?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onCompositionEndCapture?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onCompositionStart?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onCompositionStartCapture?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onCompositionUpdate?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onCompositionUpdateCapture?: default_2.CompositionEventHandler<HTMLLabelElement> | undefined;
    onFocus?: default_2.FocusEventHandler<HTMLLabelElement> | undefined;
    onFocusCapture?: default_2.FocusEventHandler<HTMLLabelElement> | undefined;
    onBlur?: default_2.FocusEventHandler<HTMLLabelElement> | undefined;
    onBlurCapture?: default_2.FocusEventHandler<HTMLLabelElement> | undefined;
    onChange?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onChangeCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onBeforeInput?: default_2.InputEventHandler<HTMLLabelElement> | undefined;
    onBeforeInputCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onInput?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onInputCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onReset?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onResetCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onSubmit?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onSubmitCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onInvalid?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onInvalidCapture?: default_2.FormEventHandler<HTMLLabelElement> | undefined;
    onLoad?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onError?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onErrorCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onKeyDown?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onKeyDownCapture?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onKeyPress?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onKeyPressCapture?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onKeyUp?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onKeyUpCapture?: default_2.KeyboardEventHandler<HTMLLabelElement> | undefined;
    onAbort?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onAbortCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onCanPlay?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onCanPlayCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onCanPlayThrough?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onCanPlayThroughCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onDurationChange?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onDurationChangeCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEmptied?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEmptiedCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEncrypted?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEncryptedCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEnded?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onEndedCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadedData?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadedDataCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadedMetadata?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadedMetadataCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadStart?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onLoadStartCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPause?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPauseCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPlay?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPlayCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPlaying?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onPlayingCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onProgress?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onProgressCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onRateChange?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onRateChangeCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSeeked?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSeekedCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSeeking?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSeekingCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onStalled?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onStalledCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSuspend?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSuspendCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onTimeUpdate?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onTimeUpdateCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onVolumeChange?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onVolumeChangeCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onWaiting?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onWaitingCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onAuxClick?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onAuxClickCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onClick?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onClickCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onContextMenu?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onContextMenuCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onDoubleClick?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onDoubleClickCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onDrag?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragEnd?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragEndCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragEnter?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragEnterCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragExit?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragExitCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragLeave?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragLeaveCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragOver?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragOverCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragStart?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDragStartCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDrop?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onDropCapture?: default_2.DragEventHandler<HTMLLabelElement> | undefined;
    onMouseDown?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseDownCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseEnter?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseLeave?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseMove?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseMoveCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseOut?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseOutCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseOver?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseOverCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseUp?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseUpCapture?: default_2.MouseEventHandler<HTMLLabelElement> | undefined;
    onSelect?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onSelectCapture?: default_2.ReactEventHandler<HTMLLabelElement> | undefined;
    onTouchCancel?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchCancelCapture?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchEnd?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchEndCapture?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchMove?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchMoveCapture?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchStart?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onTouchStartCapture?: default_2.TouchEventHandler<HTMLLabelElement> | undefined;
    onPointerDown?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerDownCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerMove?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerMoveCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerUp?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerUpCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerCancel?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerCancelCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerEnter?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerLeave?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerOver?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerOverCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerOut?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onPointerOutCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onGotPointerCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onGotPointerCaptureCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onLostPointerCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onLostPointerCaptureCapture?: default_2.PointerEventHandler<HTMLLabelElement> | undefined;
    onScroll?: default_2.UIEventHandler<HTMLLabelElement> | undefined;
    onScrollCapture?: default_2.UIEventHandler<HTMLLabelElement> | undefined;
    onScrollEnd?: default_2.UIEventHandler<HTMLLabelElement> | undefined;
    onScrollEndCapture?: default_2.UIEventHandler<HTMLLabelElement> | undefined;
    onWheel?: default_2.WheelEventHandler<HTMLLabelElement> | undefined;
    onWheelCapture?: default_2.WheelEventHandler<HTMLLabelElement> | undefined;
    onAnimationStart?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onAnimationStartCapture?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onAnimationEnd?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onAnimationEndCapture?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onAnimationIteration?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onAnimationIterationCapture?: default_2.AnimationEventHandler<HTMLLabelElement> | undefined;
    onToggle?: default_2.ToggleEventHandler<HTMLLabelElement> | undefined;
    onBeforeToggle?: default_2.ToggleEventHandler<HTMLLabelElement> | undefined;
    onTransitionCancel?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionCancelCapture?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionEnd?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionEndCapture?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionRun?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionRunCapture?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionStart?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
    onTransitionStartCapture?: default_2.TransitionEventHandler<HTMLLabelElement> | undefined;
}, Element>;

declare interface LabelProps extends default_2.LabelHTMLAttributes<HTMLLabelElement> {
    inline?: boolean;
    normalCursor?: boolean;
    htmlTag?: keyof JSX_2.IntrinsicElements;
    children?: default_2.ReactNode;
}

export declare const Lead: ({ id, htmlTag, children }: LeadProps) => default_2.ReactElement<{
    className: string;
    id: string | undefined;
}, string | default_2.JSXElementConstructor<any>>;

declare interface LeadProps {
    id?: string;
    htmlTag?: keyof JSX_2.IntrinsicElements;
    children?: default_2.ReactNode;
}

export declare const List: ({ listStyle, compact, ordered, children, }: ListProps) => default_2.DetailedReactHTMLElement<{
    className: string;
    style: default_2.CSSProperties;
}, HTMLElement>;

export declare const ListItem: ({ compact, children }: ListItemProps) => JSX.Element;

declare interface ListItemObject {
    name: string;
    href: string;
    listItems?: ListItemObject[];
}

declare interface ListItemProps {
    compact?: boolean;
    children?: default_2.ReactNode;
}

declare interface ListProps {
    listStyle?: string;
    compact?: boolean;
    ordered?: boolean;
    children?: default_2.ReactNode;
}

export declare const LoadingAnimation: ({ fixed, message, }: LoadingAnimationProps) => JSX.Element;

declare interface LoadingAnimationProps {
    fixed?: boolean;
    message?: string;
}

export declare const NavigationBar: ({ primaryListItems, secondaryListItems, logoLink, logoLinkTitle, openLogoLinkInNewTab, theme, compact, mainContentId, preventChildElementStacking, children, }: NavigationBarProps) => JSX.Element;

export declare const NavigationBarListItem: ({ listItem }: NavigationBarListItemProps) => JSX.Element | null;

declare interface NavigationBarListItemProps {
    listItem: string | ListItemObject;
}

declare interface NavigationBarProps {
    primaryListItems?: ListItemObject[];
    secondaryListItems?: ListItemObject[];
    logoLink?: string;
    logoLinkTitle?: string;
    openLogoLinkInNewTab?: boolean;
    theme?: ThemeProps;
    compact?: boolean;
    mainContentId?: string;
    preventChildElementStacking?: boolean;
    children?: default_2.ReactNode;
}

declare type Option_2 = string | number | {
    key: string | number;
    value: string | number;
};

export declare const Paper: ({ noMargin, noPadding, children, }: PaperProps) => JSX.Element;

declare interface PaperProps {
    noMargin?: boolean;
    noPadding?: boolean;
    children?: default_2.ReactNode;
}

export declare const ProgressBar: ({ progress, hasErrors }: ProgressBarProps) => JSX.Element;

declare interface ProgressBarProps {
    progress?: number;
    hasErrors?: boolean;
}

export declare const RadioButtonIcon: ({ size, checked, disabled, hasErrors, }: RadioButtonIconProps) => JSX.Element;

declare interface RadioButtonIconProps {
    size?: string;
    checked?: boolean;
    disabled?: boolean;
    hasErrors?: boolean;
}

export declare const RadioButtonInput: ({ checked, disabled, required, requiredGroup, id, name, onChange, contentOnly, hasErrors, inputValue, tabIndex, children, "aria-controls": ariaControls, "aria-describedby": ariaDescribedBy, }: RadioButtonInputProps) => JSX.Element;

declare interface RadioButtonInputProps {
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    requiredGroup?: boolean;
    id: string;
    name?: string;
    onChange?: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    contentOnly?: boolean;
    hasErrors?: boolean;
    inputValue: string;
    tabIndex?: number;
    children?: default_2.ReactNode;
    'aria-controls'?: string;
    'aria-describedby'?: string;
}

export declare const RadioButtonList: ({ legend, legendSize, required, compact, children, }: RadioButtonListProps) => JSX.Element;

export declare const RadioButtonListItem: ({ inputValue, checked, disabled, required, requiredGroup, name, id, onChange, contentOnly, compact, hasErrors, "aria-controls": ariaControls, "aria-describedby": ariaDescribedBy, children, }: RadioButtonListItemProps) => JSX.Element;

declare interface RadioButtonListItemProps {
    inputValue: string;
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    requiredGroup?: boolean;
    name?: string;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    contentOnly?: boolean;
    compact?: boolean;
    hasErrors?: boolean;
    'aria-controls'?: string;
    'aria-describedby'?: string;
    children?: React.ReactNode;
}

declare interface RadioButtonListProps {
    legend?: string;
    legendSize?: 1 | 2 | 3 | 4 | 5;
    required?: boolean;
    compact?: boolean;
    children?: ReactNode;
}

export declare const Select: ({ id, onChange, name, required, disabled, multiple, options, width, value, defaultValue, label, contentOnly, keyAsContent, placeholder, placeholderValue, defaultContent, role, "aria-describedby": ariaDescribedBy, hasErrors, errorMessage, }: SelectProps) => JSX.Element;

declare interface SelectProps {
    id: string;
    onChange: (value: any) => void;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    options?: Option_2[];
    width?: string;
    value?: any;
    defaultValue?: any;
    label?: default_2.ReactNode;
    contentOnly?: boolean;
    keyAsContent?: boolean;
    placeholder?: string;
    placeholderValue?: string;
    defaultContent?: string;
    role?: string;
    'aria-describedby'?: string;
    hasErrors?: boolean;
    errorMessage?: default_2.ReactNode;
}

declare interface StepData {
    id: string | number;
    name: string;
    finished?: boolean;
    hasErrors?: boolean;
    link?: {
        pathname: string;
        search: string;
    };
}

declare type StepKey = 'SignIn' | 'AvailableReportees' | 'Import' | 'NextProcessCategory' | 'Receipt';

declare interface StepProps {
    step: StepData;
    index: number;
    activeStepId: string | number;
    direction?: 'vertical' | 'horizontal';
}

export declare const Table: ({ captionAlign, captionSide, children }: TableProps) => JSX.Element;

declare interface TableProps {
    captionAlign?: 'left' | 'center' | 'right';
    captionSide?: 'top' | 'bottom';
    children?: default_2.ReactNode;
}

export declare const Textarea: ({ id, onChange, onBlur, name, required, readOnly, disabled, width, resize, value, defaultValue, elementKey, rows, label, contentOnly, placeholder, defaultContent, "aria-describedby": ariaDescribedBy, hasErrors, errorMessage, }: TextareaProps) => JSX.Element;

declare interface TextareaProps {
    id: string;
    onChange: (e: default_2.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: default_2.FocusEvent<HTMLTextAreaElement>) => void;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    width?: string;
    resize?: 'both' | 'horizontal' | 'vertical' | 'none';
    value?: string;
    defaultValue?: string;
    elementKey?: string;
    rows?: string;
    label?: default_2.ReactNode;
    contentOnly?: boolean;
    placeholder?: string;
    defaultContent?: string;
    'aria-describedby'?: string;
    hasErrors?: boolean;
    errorMessage?: default_2.ReactNode;
}

declare interface ThemeProps {
    appName: string;
    logo: string;
    logoPadding?: string;
    sizes?: {
        logoSmallWidth: string;
        logoLargeWidth: string;
    };
    colors?: {
        [key: string]: string;
    };
}

export declare const ThemeProvider: ({ theme, children }: ThemeProviderProps) => ReactNode;

declare interface ThemeProviderProps {
    theme?: ThemeProps;
    children: React.ReactNode;
}

export declare const ToggleNavigationButton: ({ id, htmlTag, showText, hideText, buttonProps, isOpen, }: ToggleNavigationButtonProps) => default_2.DOMElement<{
    className: string;
    id: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
    autoFocus?: boolean | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: default_2.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: default_2.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    popover?: "" | "auto" | "manual" | undefined;
    popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
    popoverTarget?: string | undefined;
    inert?: boolean | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    exportparts?: string | undefined;
    part?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: default_2.ReactNode | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: default_2.ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: default_2.CompositionEventHandler<HTMLElement> | undefined;
    onFocus?: default_2.FocusEventHandler<HTMLElement> | undefined;
    onFocusCapture?: default_2.FocusEventHandler<HTMLElement> | undefined;
    onBlur?: default_2.FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: default_2.FocusEventHandler<HTMLElement> | undefined;
    onChange?: default_2.FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: default_2.InputEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onInput?: default_2.FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onReset?: default_2.FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onSubmit?: default_2.FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onInvalid?: default_2.FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: default_2.FormEventHandler<HTMLElement> | undefined;
    onLoad?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onError?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onKeyDown?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUp?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: default_2.KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEnded?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPause?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPlay?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onProgress?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onStalled?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onClick?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onDrag?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragExit?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragOver?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragStart?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDrop?: default_2.DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: default_2.DragEventHandler<HTMLElement> | undefined;
    onMouseDown?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseOver?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseUp?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: default_2.MouseEventHandler<HTMLElement> | undefined;
    onSelect?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: default_2.ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: default_2.TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: default_2.PointerEventHandler<HTMLElement> | undefined;
    onScroll?: default_2.UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: default_2.UIEventHandler<HTMLElement> | undefined;
    onScrollEnd?: default_2.UIEventHandler<HTMLElement> | undefined;
    onScrollEndCapture?: default_2.UIEventHandler<HTMLElement> | undefined;
    onWheel?: default_2.WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: default_2.WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: default_2.AnimationEventHandler<HTMLElement> | undefined;
    onToggle?: default_2.ToggleEventHandler<HTMLElement> | undefined;
    onBeforeToggle?: default_2.ToggleEventHandler<HTMLElement> | undefined;
    onTransitionCancel?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionCancelCapture?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionRun?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionRunCapture?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionStart?: default_2.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionStartCapture?: default_2.TransitionEventHandler<HTMLElement> | undefined;
}, Element>;

declare interface ToggleNavigationButtonProps {
    id?: string;
    htmlTag?: keyof JSX_2.IntrinsicElements;
    showText: string;
    hideText: string;
    buttonProps?: default_2.HTMLAttributes<HTMLElement>;
    isOpen?: boolean;
}

export declare const WizardNavigation: ({ steps, activeStepId, direction, "aria-label": ariaLabelProp, }: WizardNavigationProps) => JSX.Element;

declare interface WizardNavigationProps {
    steps: Record<StepKey, StepData>;
    activeStepId: string | number;
    direction?: 'vertical' | 'horizontal';
    'aria-label'?: string;
}

export declare const WizardNavigationStep: ({ step, index, activeStepId, direction, }: StepProps) => JSX.Element;

export { }
