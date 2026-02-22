# shadcn/ui Component Standards

## Overview

All UI elements in this application **must use shadcn/ui components**. Custom components are strictly prohibited unless they compose shadcn/ui components.

## Key Rules

- **Check shadcn/ui documentation**: Always check the documentation before implementing or using ui components [https://ui.shadcn.com/]
- **No custom components**: All UI must be built using shadcn/ui components from the component library.
- **Composition over creation**: If a required pattern doesn't exist as a single component, compose multiple shadcn/ui components instead of creating a custom one.
- **Import from the components library**: Always import UI components from the local components directory (typically `@/components/ui`).

## Implementation Checklist

- [ ] Component is from shadcn/ui
- [ ] No custom styles override component behavior
- [ ] Component extends shadcn/ui with composition, not replacement
- [ ] Accessibility standards are preserved

## When to Compose vs. Build

| Scenario | Action |
|----------|--------|
| Single shadcn component fits use case | Use directly |
| Multiple shadcn components needed | Compose them in a container or wrapper |
| Custom behavior needed | Extend via props and shadcn composition |
| No shadcn equivalent exists | Compose existing components or request component addition |

## Examples

✅ **Correct**: Use Button, Input, Card from shadcn/ui
```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
```

✅ **Correct**: Compose components
```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="Email" />
        <Button>Sign in</Button>
      </CardContent>
    </Card>
  );
}
```

❌ **Incorrect**: Create custom components
```tsx
// Don't do this
export function CustomButton() {
  return <button className="custom-btn">...</button>;
}
```

## Maintenance

When updating dependencies or adding new shadcn components:
1. Update `components.json` configuration
2. Install new components via the shadcn/ui CLI
3. Import from the local components directory
4. Test all affected pages/features
