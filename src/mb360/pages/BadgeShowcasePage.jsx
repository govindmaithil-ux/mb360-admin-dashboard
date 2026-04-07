import { Badge, BadgeButton, BadgeDot } from "../../components/ui/badge";

const variants = [
  'primary',
  'secondary',
  'success',
  'warning',
  'info',
  'outline',
  'destructive',
];

const appearances = ['default', 'light', 'outline', 'ghost'];
const sizes = ['lg', 'md', 'sm', 'xs'];
const shapes = ['default', 'circle'];

function BadgeRow({ variant, appearance }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {sizes.map((size) =>
        shapes.map((shape) => (
          <Badge
            key={size + shape}
            variant={variant}
            appearance={appearance}
            size={size}
            shape={shape}
            style={{
              border: '1px solid #e5e7eb',
              padding: '4px 8px',
              borderRadius: shape === 'circle' ? 999 : 6,
            }}
          >
            {variant}
            <BadgeDot />
          </Badge>
        )),
      )}
    </div>
  );
}

function BadgeWithButton() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Badge
        variant="primary"
        style={{
          border: '1px solid #e5e7eb',
          padding: '4px 8px',
          borderRadius: 6,
        }}
      >
        With Action
        <BadgeButton style={{ marginLeft: 6 }}>✕</BadgeButton>
      </Badge>

      <Badge
        variant="destructive"
        style={{
          border: '1px solid #e5e7eb',
          padding: '4px 8px',
          borderRadius: 6,
        }}
      >
        Removable
        <BadgeButton style={{ marginLeft: 6 }}>✕</BadgeButton>
      </Badge>
    </div>
  );
}

function States() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Badge
        disabled
        style={{
          border: '1px solid #e5e7eb',
          padding: '4px 8px',
          borderRadius: 6,
        }}
      >
        Disabled
      </Badge>

      <Badge
        variant="success"
        appearance="light"
        style={{
          border: '1px solid #e5e7eb',
          padding: '4px 8px',
          borderRadius: 6,
        }}
      >
        Active
      </Badge>
    </div>
  );
}

export default function BadgeShowcasePage() {
  return (
    <div style={{ padding: 20, display: 'grid', gap: 30 }}>

      {variants.map((variant) => (
        <div key={variant}>
          <h2 style={{ fontWeight: 600, marginBottom: 10 }}>
            Variant: {variant}
          </h2>

          {appearances.map((appearance) => (
            <div key={appearance} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 12, marginBottom: 6 }}>
                Appearance: {appearance}
              </p>

              <BadgeRow variant={variant} appearance={appearance} />
            </div>
          ))}
        </div>
      ))}

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>
          With Button
        </h2>
        <BadgeWithButton />
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginBottom: 10 }}>
          States
        </h2>
        <States />
      </div>

    </div>
  );
}