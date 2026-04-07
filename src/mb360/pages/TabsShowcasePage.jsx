
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
const variants = ['default', 'button', 'line'] 
const sizes = ['lg', 'md', 'sm', 'xs']
const shapes = ['default', 'pill']

function SingleTabs({ variant, size, shape }) {
  return (
    <Tabs defaultValue="tab1">
      <TabsList
        variant={variant}
        size={size}
        shape={shape}
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: 4,
          display: 'flex',
          gap: 6,
        }}
      >
        <TabsTrigger value="tab1" style={{ padding: '6px 10px' }}>
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" style={{ padding: '6px 10px' }}>
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" style={{ padding: '6px 10px' }}>
          Tab 3
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="tab1"
        style={{
          padding: 10,
          border: '1px solid #e5e7eb',
          borderRadius: 6,
          marginTop: 6,
        }}
      >
        Content 1
      </TabsContent>

      <TabsContent value="tab2" style={{ padding: 10 }}>
        Content 2
      </TabsContent>

      <TabsContent value="tab3" style={{ padding: 10 }}>
        Content 3
      </TabsContent>
    </Tabs>
  );
}

export default function TabsShowcasePage() {
  return (
    <div style={{ padding: 20, display: 'grid', gap: 40 }}>

      {variants.map((variant) => (
        <div key={variant}>
          <h2 style={{ fontWeight: 600, marginBottom: 12 }}>
            Variant: {variant}
          </h2>

          {shapes.map((shape) => (
            <div key={shape} style={{ marginBottom: 20 }}>
              <p style={{ marginBottom: 8 }}>Shape: {shape}</p>

              <div style={{ display: 'grid', gap: 16 }}>
                {sizes.map((size) => (
                  <div key={size}>
                    <p style={{ fontSize: 12, marginBottom: 6 }}>
                      Size: {size}
                    </p>

                    <SingleTabs
                      variant={variant}
                      size={size}
                      shape={shape}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

    </div>
  );
}