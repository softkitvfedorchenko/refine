---
title: <AutoSaveIndicator />
description: <AutoSaveIndicator> component shows `autoSave` status on edit actions.
source: packages/antd/src/components/autoSaveIndicator/index.tsx
---

`<AutoSaveIndicator>` component from Refine for **Ant Design** can be used to communicate auto-save status to the user.

## Usage

```tsx
import { AutoSaveIndicator, useForm } from "@refinedev/antd";

const MyComponent = () => {
  const { autoSaveProps } = useForm({
    autoSave: {
      enabled: true,
    },
  });

  return <AutoSaveIndicator {...autoSaveProps} />;
};
```

## API Reference

### Properties

<PropsTable module="@refinedev/antd/AutoSaveIndicator" />
