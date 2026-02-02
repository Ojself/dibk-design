import type { Meta, StoryObj } from "@storybook/react-vite";
import {
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
  AddIcon,
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

const iconComponents = [
  { name: "ArbeidstilsynetLogo", Component: ArbeidstilsynetLogo, maxWidth: 200 },
  { name: "DibkLogoWithTitle", Component: DibkLogoWithTitle, maxWidth: 220 },
  { name: "DibkLogo", Component: DibkLogo, maxWidth: 140 },
  { name: "ArrowLeftIcon", Component: ArrowLeftIcon },
  { name: "ArrowRightIcon", Component: ArrowRightIcon },
  { name: "AsteriskIcon", Component: AsteriskIcon },
  { name: "CalendarIcon", Component: CalendarIcon },
  { name: "CheckmarkSymbolIcon", Component: CheckmarkSymbolIcon },
  { name: "AddIcon", Component: AddIcon },
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
