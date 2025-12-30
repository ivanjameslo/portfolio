import {
  SiNextdotjs,
  SiReact,
  SiGit,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiPrisma,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiScikitlearn,
  SiScipy,
  SiKalilinux,
  SiWireshark,
} from "react-icons/si";

import { ShieldCheck, LineChart, Sigma } from "lucide-react";

export const iconMap: Record<string, React.ReactNode> = {
  nextjs: <SiNextdotjs />,
  react: <SiReact />,
  git: <SiGit />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  css3: <SiCss3 />,
  tailwindcss: <SiTailwindcss />,
  prisma: <SiPrisma />,
  nodejs: <SiNodedotjs />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  supabase: <SiSupabase />,

  python: <SiPython />,
  pandas: <SiPandas />,
  numpy: <SiNumpy />,
  tensorflow: <SiTensorflow />,
  scikitlearn: <SiScikitlearn />,
  scipy: <SiScipy />,

  kalilinux: <SiKalilinux />,
  wireshark: <SiWireshark />,

  // Conceptual icons
  pentesting: <ShieldCheck />,
  chart: <LineChart />,
  sigma: <Sigma />,
};
