'use client' // antd ConfigProvider uses React context

import type { ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { antdThemeConfig } from '@/lib/theme/antd-theme'

interface AntdProviderProps {
  children: ReactNode
}

export function AntdProvider({ children }: AntdProviderProps) {
  return (
    <AntdRegistry layer>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </AntdRegistry>
  )
}
