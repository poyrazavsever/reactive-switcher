"use client";

import { Icon } from "@iconify/react";

// İkonların boyutlarını ve sınıflarını yönetmek için bir wrapper
const IconWrapper = ({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) => <Icon icon={icon} className={className} width="100%" height="100%" />;

export const Icons = {
  // Navigation & UI
  External: (props: any) => (
    <IconWrapper icon="lucide:external-link" {...props} />
  ),
  LinkArrow: (props: any) => (
    <IconWrapper icon="lucide:arrow-up-right" {...props} />
  ),
  Menu: (props: any) => <IconWrapper icon="lucide:menu" {...props} />,
  Close: (props: any) => <IconWrapper icon="lucide:x" {...props} />,

  // Socials & Brand
  Github: (props: any) => <IconWrapper icon="simple-icons:github" {...props} />,
  Coffee: (props: any) => <IconWrapper icon="lucide:coffee" {...props} />,
  Twitter: (props: any) => <IconWrapper icon="simple-icons:x" {...props} />,

  // Actions
  Star: (props: any) => <IconWrapper icon="lucide:star" {...props} />,
  Copy: (props: any) => <IconWrapper icon="lucide:copy" {...props} />,
  Check: (props: any) => <IconWrapper icon="lucide:check" {...props} />,

  // Features
  Lightning: (props: any) => <IconWrapper icon="lucide:zap" {...props} />,
  Typescript: (props: any) => (
    <IconWrapper icon="simple-icons:typescript" {...props} />
  ),
  Tailwind: (props: any) => (
    <IconWrapper icon="simple-icons:tailwindcss" {...props} />
  ),
  Palette: (props: any) => <IconWrapper icon="lucide:palette" {...props} />,

  // Steps
  Code: (props: any) => <IconWrapper icon="lucide:code-2" {...props} />,
  Layers: (props: any) => <IconWrapper icon="lucide:layers" {...props} />,
  Play: (props: any) => <IconWrapper icon="lucide:play-circle" {...props} />,
};
