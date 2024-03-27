"use client";

import React from "react";

import { LayoutSidebarContent } from "@/components/layout/LayoutSidebarContent";
import { Routes } from "@/constants/routes";

export default function TransactionTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutSidebarContent
      sidebar={{
        navItems: [
          {
            route: Routes.BUILD_TRANSACTION,
            label: "Build Transaction",
          },
          {
            route: Routes.SIGN_TRANSACTION,
            label: "Sign Transaction",
          },
          {
            route: Routes.SIMULATE_TRANSACTION,
            label: "Simulate Transaction",
          },
          {
            route: Routes.SUBMIT_TRANSACTION,
            label: "Submit Transaction",
          },
          {
            route: Routes.FEE_BUMP_TRANSACTION,
            label: "Fee Bump",
          },
        ],
      }}
    >
      {children}
    </LayoutSidebarContent>
  );
}