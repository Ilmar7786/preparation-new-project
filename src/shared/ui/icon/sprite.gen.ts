export interface SpritesMap {
  common: "react" | "vite"
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  common: {
    filePath: "common.7e441973.svg",
    items: {
      react: {
        viewBox: "0 0 256 228",
        width: 35.93,
        height: 32,
      },
      vite: {
        viewBox: "0 0 256 257",
        width: 31.88,
        height: 32,
      },
    },
  },
}
