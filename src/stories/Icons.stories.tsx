import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  arbeidstilsynetLogo,
  arrowLeftIcon,
  arrowRightIcon,
  asteriskIcon,
  calendarIcon,
  checkmarkSymbolIcon,
  dibkLogo,
  dibkLogoWithTitle,
  errorIcon,
  infoIcon,
  successIcon,
  warningIcon,
  xSymbolIcon,
  ArbeidstilsynetLogo,
  ArrowLeftIcon,
  ArrowRightIcon,
  AsteriskIcon,
  CalendarIcon,
  CheckmarkSymbolIcon,
  DibkLogo,
  DibkLogoWithTitle,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  XSymbolIcon,
} from "../icons";

const meta: Meta = {
  title: "Assets/Icons",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const icons = [
  { name: "arbeidstilsynet-logo", src: arbeidstilsynetLogo, maxWidth: 200 },
  { name: "dibk-logo-with-title", src: dibkLogoWithTitle, maxWidth: 220 },
  { name: "dibk-logo", src: dibkLogo, maxWidth: 140 },
  { name: "arrow-left-icon", src: arrowLeftIcon },
  { name: "arrow-right-icon", src: arrowRightIcon },
  { name: "asterisk-icon", src: asteriskIcon },
  { name: "calendar-icon", src: calendarIcon },
  { name: "checkmark-symbol-icon", src: checkmarkSymbolIcon },
  { name: "error-icon", src: errorIcon },
  { name: "info-icon", src: infoIcon },

  { name: "success-icon", src: successIcon },
  { name: "warning-icon", src: warningIcon },
  { name: "x-symbol-icon", src: xSymbolIcon },
];

const iconComponents = [
  { name: "ArbeidstilsynetLogo", Component: ArbeidstilsynetLogo, maxWidth: 200 },
  { name: "DibkLogoWithTitle", Component: DibkLogoWithTitle, maxWidth: 220 },
  { name: "DibkLogo", Component: DibkLogo, maxWidth: 140 },
  { name: "ArrowLeftIcon", Component: ArrowLeftIcon },
  { name: "ArrowRightIcon", Component: ArrowRightIcon },
  { name: "AsteriskIcon", Component: AsteriskIcon },
  { name: "CalendarIcon", Component: CalendarIcon },
  { name: "CheckmarkSymbolIcon", Component: CheckmarkSymbolIcon },
  { name: "ErrorIcon", Component: ErrorIcon },
  { name: "InfoIcon", Component: InfoIcon },
  { name: "SuccessIcon", Component: SuccessIcon },
  { name: "WarningIcon", Component: WarningIcon },
  { name: "XSymbolIcon", Component: XSymbolIcon },
];

export const Icons: Story = {
  render: () => (
    <div
      style={{
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
        background: "#f5f6f7",
        minHeight: "100vh",
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.name}
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={icon.src}
              alt={icon.name}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: icon.maxWidth ?? 64,
                maxHeight: 64,
              }}
            />
          </div>
          <code style={{ fontSize: "12px", color: "#374151" }}>
            {icon.name}
          </code>
        </div>
      ))}
      {iconComponents.map(({ name, Component, maxWidth }) => (
        <div
          key={name}
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Component
              style={{
                width: "100%",
                height: "auto",
                maxWidth: maxWidth ?? 64,
                maxHeight: 64,
              }}
              aria-hidden="true"
            />
          </div>
          <code style={{ fontSize: "12px", color: "#374151" }}>{name}</code>
        </div>
      ))}
    </div>
  ),
};
