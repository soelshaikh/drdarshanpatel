import { theme as antdTheme, type ThemeConfig } from 'antd'

/**
 * antd theme — MIRRORS app/tokens.css. Change a value in one place, change it in the other.
 * antd tokens must be literal values (it computes derived colours at runtime), so this is the
 * only file besides tokens.css allowed to contain hex/rgb.
 */
export const antdThemeConfig: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: { key: 'antd' },
  hashed: false,
  token: {
    colorPrimary: '#1f5bff',
    colorInfo: '#3fd0e6',
    colorSuccess: '#34d399',
    colorWarning: '#f5b84b',
    colorError: '#ff5c6c',

    colorBgBase: '#0a1426',
    colorBgContainer: '#0f1d38',
    colorBgElevated: '#17294a',
    colorBgLayout: '#050b1a',
    colorBorder: 'rgba(255,255,255,0.14)',
    colorBorderSecondary: 'rgba(255,255,255,0.08)',

    colorTextBase: '#f4f8ff',
    colorText: '#f4f8ff',
    colorTextSecondary: '#b8c7e0',
    colorTextTertiary: '#8c9fc0',
    colorTextPlaceholder: '#8c9fc0',

    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    fontSize: 16,
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    controlHeight: 48,
    controlHeightLG: 56,
    motionDurationMid: '0.25s',
    motionEaseOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  components: {
    Button: {
      primaryShadow: '0 6px 24px rgba(31,91,255,0.45)',
      defaultBg: 'rgba(255,255,255,0.06)',
      defaultBorderColor: 'rgba(255,255,255,0.14)',
      fontWeight: 600,
    },
    Input: { colorBgContainer: 'rgba(255,255,255,0.06)', activeBg: 'rgba(255,255,255,0.10)' },
    Select: { colorBgContainer: 'rgba(255,255,255,0.06)' },
    DatePicker: { colorBgContainer: 'rgba(255,255,255,0.06)' },
    Form: { labelColor: '#b8c7e0', verticalLabelPadding: '0 0 8px' },
    Modal: { contentBg: '#0f1d38', headerBg: '#0f1d38' },
    Drawer: { colorBgElevated: '#0a1426' },
    Collapse: { headerBg: 'rgba(255,255,255,0.06)', contentBg: 'transparent' },
  },
}
