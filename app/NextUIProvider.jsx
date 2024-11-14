import * as React from "react";
import Page from "./page"

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider className=" text-foreground">
      <Page />
    </NextUIProvider>
  );
}